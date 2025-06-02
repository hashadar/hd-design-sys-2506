import { writable, derived, type Readable } from 'svelte/store';
import type { SiteConfig, GeneratedColors } from '../types/index.js';
import { defaultSiteConfig, validateConfig } from '../config/site.js';
import { generateAllColorScales } from '../utils/colors.js';
import { generateAndApplyStyles } from '../styles/generator.js';

// Main site configuration store
export const siteConfig = writable<SiteConfig>(defaultSiteConfig);

// Derived store for generated colors
export const generatedColors: Readable<GeneratedColors> = derived(
	siteConfig,
	($config) => generateAllColorScales($config.colors)
);

// Current theme/branding store
export const currentTheme = derived(siteConfig, ($config) => ({
	brandName: $config.brand.name,
	tagline: $config.brand.tagline,
	description: $config.brand.description,
	logo: $config.brand.logo,
	primaryColor: $config.colors.primary,
	accentColor: $config.colors.accent,
}));

// Navigation items store
export const navigationItems = derived(siteConfig, ($config) => $config.navigation);

// Feature toggles store
export const features = derived(siteConfig, ($config) => $config.features);

// Layout configuration store
export const layoutConfig = derived(siteConfig, ($config) => $config.layout);

/**
 * Load configuration from external source (localStorage, API, etc.)
 */
export function loadConfiguration(customConfig?: Partial<SiteConfig>): void {
	if (customConfig) {
		const validatedConfig = validateConfig(customConfig);
		siteConfig.set(validatedConfig);
		
		// Apply styles immediately when config changes
		generateAndApplyStyles(validatedConfig);
	}
}

/**
 * Update a specific part of the configuration
 */
export function updateConfig(updates: Partial<SiteConfig>): void {
	siteConfig.update(currentConfig => {
		const newConfig = validateConfig({ ...currentConfig, ...updates });
		
		// Apply styles when config changes
		generateAndApplyStyles(newConfig);
		
		return newConfig;
	});
}

/**
 * Update just the colors and regenerate styles
 */
export function updateColors(colors: Partial<SiteConfig['colors']>): void {
	siteConfig.update(currentConfig => {
		const newConfig = {
			...currentConfig,
			colors: {
				...currentConfig.colors,
				...colors
			}
		};
		
		const validatedConfig = validateConfig(newConfig);
		generateAndApplyStyles(validatedConfig);
		
		return validatedConfig;
	});
}

/**
 * Update brand information
 */
export function updateBrand(brand: Partial<SiteConfig['brand']>): void {
	siteConfig.update(currentConfig => ({
		...currentConfig,
		brand: {
			...currentConfig.brand,
			...brand
		}
	}));
}

/**
 * Toggle a feature on/off
 */
export function toggleFeature(feature: keyof SiteConfig['features']): void {
	siteConfig.update(currentConfig => ({
		...currentConfig,
		features: {
			...currentConfig.features,
			[feature]: !currentConfig.features[feature]
		}
	}));
}

/**
 * Reset configuration to defaults
 */
export function resetConfiguration(): void {
	siteConfig.set(defaultSiteConfig);
	generateAndApplyStyles(defaultSiteConfig);
}

/**
 * Subscribe to configuration changes and apply styles
 */
export function initializeConfigurationWatcher(): void {
	// Apply initial styles
	siteConfig.subscribe((config) => {
		generateAndApplyStyles(config);
	});
}

/**
 * Export current configuration for backup/sharing
 */
export function exportConfiguration(): string {
	let currentConfig: SiteConfig;
	const unsubscribe = siteConfig.subscribe(config => currentConfig = config);
	unsubscribe();
	
	return JSON.stringify(currentConfig!, null, 2);
}

/**
 * Import configuration from JSON string
 */
export function importConfiguration(configJson: string): boolean {
	try {
		const config = JSON.parse(configJson) as Partial<SiteConfig>;
		loadConfiguration(config);
		return true;
	} catch (error) {
		console.error('Failed to import configuration:', error);
		return false;
	}
}

// Browser storage utilities
export const storageKey = 'hd-design-system-config';

/**
 * Save configuration to localStorage
 */
export function saveConfigurationToStorage(): void {
	if (typeof localStorage === 'undefined') return;
	
	const configJson = exportConfiguration();
	localStorage.setItem(storageKey, configJson);
}

/**
 * Load configuration from localStorage
 */
export function loadConfigurationFromStorage(): boolean {
	if (typeof localStorage === 'undefined') return false;
	
	try {
		const configJson = localStorage.getItem(storageKey);
		if (configJson) {
			return importConfiguration(configJson);
		}
	} catch (error) {
		console.error('Failed to load configuration from storage:', error);
	}
	
	return false;
} 
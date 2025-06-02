import type { SiteConfig } from '../types/index.js';
import { generateAllColorScales, allColorsToCSSProperties } from '../utils/colors.js';

/**
 * Generate all CSS custom properties from site configuration
 */
export function generateCSSProperties(config: SiteConfig): Record<string, string> {
	const generatedColors = generateAllColorScales(config.colors);
	const colorProperties = allColorsToCSSProperties(generatedColors);
	
	// Layout properties
	const layoutProperties = {
		'--nav-width': config.layout.navWidth,
		'--content-max-width': config.layout.contentMaxWidth,
	};
	
	// Border radius properties based on style
	const borderRadiusProperties = getBorderRadiusProperties(config.layout.borderRadiusStyle);
	
	// Semantic color mappings (using generated scales)
	const semanticProperties = {
		'--color-background': colorProperties['--color-secondary-50'],
		'--color-foreground': colorProperties['--color-neutral-900'],
		'--color-muted': colorProperties['--color-secondary-100'],
		'--color-muted-foreground': colorProperties['--color-neutral-600'],
		'--color-card': colorProperties['--color-secondary-50'],
		'--color-card-foreground': colorProperties['--color-neutral-900'],
		'--color-border': colorProperties['--color-secondary-200'],
		'--color-input': colorProperties['--color-secondary-50'],
		'--color-ring': colorProperties['--color-primary-500'],
		'--color-success': '#22c55e',
		'--color-warning': '#f59e0b',
		'--color-error': '#ef4444',
		'--color-info': '#3b82f6',
	};
	
	return {
		...colorProperties,
		...layoutProperties,
		...borderRadiusProperties,
		...semanticProperties,
	};
}

/**
 * Get border radius properties based on style preference
 */
function getBorderRadiusProperties(style: 'sharp' | 'minimal' | 'rounded'): Record<string, string> {
	switch (style) {
		case 'sharp':
			return {
				'--border-radius-sm': '0',
				'--border-radius-base': '0',
				'--border-radius-md': '0.125rem',
				'--border-radius-lg': '0.25rem',
				'--border-radius-xl': '0.5rem',
				'--border-radius-round': '50%',
			};
		case 'minimal':
			return {
				'--border-radius-sm': '0.125rem',
				'--border-radius-base': '0.25rem',
				'--border-radius-md': '0.375rem',
				'--border-radius-lg': '0.5rem',
				'--border-radius-xl': '0.75rem',
				'--border-radius-round': '50%',
			};
		case 'rounded':
			return {
				'--border-radius-sm': '0.375rem',
				'--border-radius-base': '0.5rem',
				'--border-radius-md': '0.75rem',
				'--border-radius-lg': '1rem',
				'--border-radius-xl': '1.5rem',
				'--border-radius-round': '50%',
			};
		default:
			return getBorderRadiusProperties('sharp');
	}
}

/**
 * Generate CSS string from properties
 */
export function generateCSSString(properties: Record<string, string>): string {
	const cssProperties = Object.entries(properties)
		.map(([property, value]) => `  ${property}: ${value};`)
		.join('\n');
	
	return `:root {\n${cssProperties}\n}`;
}

/**
 * Apply CSS properties to document root
 */
export function applyCSSProperties(properties: Record<string, string>): void {
	if (typeof document === 'undefined') return;
	
	const root = document.documentElement;
	
	Object.entries(properties).forEach(([property, value]) => {
		root.style.setProperty(property, value);
	});
}

/**
 * Generate and apply all CSS from config
 */
export function generateAndApplyStyles(config: SiteConfig): void {
	const properties = generateCSSProperties(config);
	applyCSSProperties(properties);
}

/**
 * Get animation properties based on feature toggle
 */
export function getAnimationProperties(enabled: boolean): Record<string, string> {
	if (!enabled) {
		return {
			'--transition-fast': '0ms',
			'--transition-base': '0ms',
			'--transition-slow': '0ms',
			'--transition-bounce': '0ms',
			'--transition-smooth': '0ms',
		};
	}
	
	return {
		'--transition-fast': '150ms cubic-bezier(0.4, 0, 0.2, 1)',
		'--transition-base': '200ms cubic-bezier(0.4, 0, 0.2, 1)',
		'--transition-slow': '300ms cubic-bezier(0.4, 0, 0.2, 1)',
		'--transition-bounce': '400ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
		'--transition-smooth': '500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
	};
}

/**
 * Generate responsive navigation width properties
 */
export function getResponsiveNavProperties(navWidth: string): Record<string, string> {
	return {
		'--nav-width': navWidth,
		'--nav-width-collapsed': '4rem',
	};
} 
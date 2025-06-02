import type { SiteConfig } from '../types/index.js';

export const defaultSiteConfig: SiteConfig = {
	brand: {
		name: 'hasha dar design system',
		tagline: 'design methodology & component library',
		description: 'elegant, accessible interfaces for modern web applications',
		logo: undefined
	},
	colors: {
		primary: '#4a7c59', // Current green-500
		secondary: '#f2e8d8', // Current cream-500  
		accent: '#d18442', // Current orange-500
		neutral: '#1b4332' // Current green-800
	},
	layout: {
		navWidth: '20rem',
		contentMaxWidth: '80rem',
		borderRadiusStyle: 'sharp'
	},
	navigation: [
		{ href: '/', label: 'overview', description: 'introduction to the design system' },
		{ href: '/typography', label: 'typography', description: 'fonts, sizing, and text styles' },
		{ href: '/colors', label: 'colors', description: 'color palette and usage' },
		{ href: '/spacing', label: 'spacing', description: 'layout and spacing system' },
		{ href: '/components', label: 'components', description: 'UI component library' },
		{ href: '/tokens', label: 'design tokens', description: 'design system tokens' },
		{ href: '/configuration', label: 'configuration', description: 'dynamic configuration system' },
		{ href: '/changelog', label: 'changelog', description: 'design system changelog' }
	],
	features: {
		darkMode: false,
		animations: true,
		blogSection: false,
		portfolioSection: false
	}
};

export function validateConfig(config: Partial<SiteConfig>): SiteConfig {
	return {
		brand: {
			...defaultSiteConfig.brand,
			...config.brand
		},
		colors: {
			...defaultSiteConfig.colors,
			...config.colors
		},
		layout: {
			...defaultSiteConfig.layout,
			...config.layout
		},
		navigation: config.navigation || defaultSiteConfig.navigation,
		features: {
			...defaultSiteConfig.features,
			...config.features
		}
	};
}

// Helper function to check if a color is valid hex
export function isValidHexColor(color: string): boolean {
	return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
}

// Helper function to validate colors in config
export function validateColors(colors: Partial<SiteConfig['colors']>): boolean {
	const requiredColors = ['primary', 'secondary', 'accent', 'neutral'] as const;
	
	for (const colorKey of requiredColors) {
		const color = colors[colorKey];
		if (color && !isValidHexColor(color)) {
			console.error(`Invalid hex color for ${colorKey}: ${color}`);
			return false;
		}
	}
	
	return true;
} 
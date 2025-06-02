// This file is generated from CHANGELOG.md
// Update this file when CHANGELOG.md changes to maintain single source of truth

export interface ChangelogEntry {
	version: string;
	date: string;
	sections: ChangelogSection[];
}

export interface ChangelogSection {
	title: string;
	type: 'added' | 'changed' | 'deprecated' | 'removed' | 'fixed' | 'security';
	items: ChangelogItem[];
}

export interface ChangelogItem {
	category: string;
	details: string[];
}

export const changelog: ChangelogEntry[] = [
	{
		version: "1.0.0",
		date: "2025-01-02",
		sections: [
			{
				title: "🎨 Major Design System Launch",
				type: "added",
				items: [
					{
						category: "Design Token System",
						details: [
							"Comprehensive colour scales (cream, green, orange) with 50-900 variants",
							"Systematic spacing scale (tight to generous) based on mathematical progression",
							"Typography tokens with Cormorant serif and JetBrains Mono pairing",
							"Layout tokens for consistent dimensions and spacing"
						]
					},
					{
						category: "Angular Design Language",
						details: [
							"Sharp aesthetic with minimal border radius",
							"Custom CSS clip-paths for angular corner cuts",
							"Pincushioning effects on interactive elements",
							"Enhanced shadow system with defined depth"
						]
					},
					{
						category: "Component Library",
						details: [
							"Accessible buttons with three variants (primary, secondary, accent)",
							"Interactive cards with hover animations and angular styling",
							"Navigation system with active states and hover effects",
							"Form elements with consistent styling",
							"Code blocks with angular presentation"
						]
					},
					{
						category: "Interactive Effects",
						details: [
							"Hover animations preserved throughout the system",
							"Pincushioning button effects with scale transformations",
							"Angular colour swatches with rotation on hover",
							"Smooth transitions using cubic-bezier timing functions"
						]
					},
					{
						category: "Documentation System",
						details: [
							"Comprehensive typography guidelines and examples",
							"Colour palette documentation with accessibility information",
							"Spacing system with usage guidelines",
							"Component library with implementation examples",
							"Design tokens documentation with code examples"
						]
					}
				]
			},
			{
				title: "🔧 Technical Improvements",
				type: "changed",
				items: [
					{
						category: "Navigation",
						details: [
							"Wider sidebar: Increased from 16rem to 20rem for better content spacing",
							"Angular styling: Added subtle corner radius and enhanced visual hierarchy",
							"Active states: Clear indication of current page with angular accents"
						]
					},
					{
						category: "Code Examples",
						details: [
							"Fixed formatting: Resolved template literal parsing issues across all pages",
							"Consistent presentation: Angular styling applied to all code blocks",
							"Improved readability: Enhanced syntax presentation with proper spacing"
						]
					},
					{
						category: "Performance Optimisations",
						details: [
							"Removed page load animations: Instant loading with no entrance animations",
							"Preserved interactions: Maintained all hover and user interaction animations",
							"Optimised shadows: Enhanced shadow system for better visual hierarchy"
						]
					}
				]
			}
		]
	}
];

export const codeBlocks = {
	colors: `/* Cream Palette - Warm neutrals */
--color-cream-50: #FEFCF9;
--color-cream-100: #FDFBF7;
--color-cream-500: #F2E8D8;
--color-cream-900: #8F7A52;

/* Green Palette - Primary brand */
--color-green-50: #F0F4F2;
--color-green-500: #4A7C59;
--color-green-800: #1B4332;
--color-green-900: #0F2D1F;

/* Orange Palette - Accent colour */
--color-orange-50: #FEF7F0;
--color-orange-500: #D18442;
--color-orange-700: #B45309;
--color-orange-900: #5F2D05;`,

	spacing: `/* Mathematical progression for consistent rhythm */
--space-tight: 0.25rem;      /* 4px */
--space-compact: 0.5rem;     /* 8px */
--space-normal: 0.75rem;     /* 12px */
--space-comfortable: 1rem;   /* 16px */
--space-loose: 1.5rem;       /* 24px */
--space-spacious: 2rem;      /* 32px */
--space-generous: 3rem;      /* 48px */`,

	angular: `/* Corner cuts for angular aesthetic */
--clip-corner: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 12px 100%, 0 calc(100% - 8px));
--clip-corner-lg: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));

/* Pincushioning effects */
--shadow-pincushion: inset 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 -1px 2px rgba(255, 255, 255, 0.3);
--shadow-pincushion-hover: inset 0 3px 6px rgba(0, 0, 0, 0.15), inset 0 -1px 3px rgba(255, 255, 255, 0.4);`
}; 
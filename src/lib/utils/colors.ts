import chroma from 'chroma-js';
import type { ColorScale, GeneratedColors, ColorConfig } from '../types/index.js';

/**
 * Generate a color scale from a base color
 * Creates 10 shades from lightest (50) to darkest (900)
 */
export function generateColorScale(baseColor: string): ColorScale {
	try {
		const color = chroma(baseColor);
		
		// Generate scale with more nuanced approach
		const scale = chroma.scale([
			color.brighten(3).saturate(0.1).hex(), // 50 - very light
			color.brighten(2.5).saturate(0.05).hex(), // 100 - light
			color.brighten(2).hex(), // 200 - lighter
			color.brighten(1.2).hex(), // 300 - light
			color.brighten(0.5).hex(), // 400 - medium-light
			baseColor, // 500 - base color
			color.darken(0.5).hex(), // 600 - medium-dark
			color.darken(1.2).hex(), // 700 - dark
			color.darken(2).saturate(0.1).hex(), // 800 - darker
			color.darken(3).saturate(0.2).hex(), // 900 - very dark
		]).mode('lab');

		return {
			50: scale(0).hex(),
			100: scale(0.111).hex(), // 1/9
			200: scale(0.222).hex(), // 2/9
			300: scale(0.333).hex(), // 3/9
			400: scale(0.444).hex(), // 4/9
			500: scale(0.555).hex(), // 5/9 (close to base)
			600: scale(0.666).hex(), // 6/9
			700: scale(0.777).hex(), // 7/9
			800: scale(0.888).hex(), // 8/9
			900: scale(1).hex(), // 9/9
		};
	} catch (error) {
		console.error('Error generating color scale for:', baseColor, error);
		// Fallback to grayscale if color is invalid
		return generateGrayscaleColorScale();
	}
}

/**
 * Generate a grayscale color scale as fallback
 */
function generateGrayscaleColorScale(): ColorScale {
	const scale = chroma.scale(['#f9fafb', '#111827']).mode('lab');
	
	return {
		50: scale(0).hex(),
		100: scale(0.111).hex(),
		200: scale(0.222).hex(),
		300: scale(0.333).hex(),
		400: scale(0.444).hex(),
		500: scale(0.555).hex(),
		600: scale(0.666).hex(),
		700: scale(0.777).hex(),
		800: scale(0.888).hex(),
		900: scale(1).hex(),
	};
}

/**
 * Generate all color scales from base colors
 */
export function generateAllColorScales(colors: ColorConfig): GeneratedColors {
	return {
		primary: generateColorScale(colors.primary),
		secondary: generateColorScale(colors.secondary),
		accent: generateColorScale(colors.accent),
		neutral: generateColorScale(colors.neutral),
	};
}

/**
 * Check if a color provides sufficient contrast against another
 */
export function checkContrast(color1: string, color2: string): number {
	try {
		return chroma.contrast(color1, color2);
	} catch (error) {
		console.error('Error checking contrast:', error);
		return 1; // Return minimum contrast on error
	}
}

/**
 * Get a readable text color (black or white) for a background
 */
export function getReadableTextColor(backgroundColor: string): string {
	try {
		const bgColor = chroma(backgroundColor);
		const luminance = bgColor.luminance();
		
		// Return white text for dark backgrounds, black for light
		return luminance > 0.5 ? '#000000' : '#ffffff';
	} catch (error) {
		console.error('Error getting readable text color:', error);
		return '#000000'; // Default to black
	}
}

/**
 * Lighten a color by a percentage
 */
export function lightenColor(color: string, amount: number): string {
	try {
		return chroma(color).brighten(amount).hex();
	} catch (error) {
		console.error('Error lightening color:', error);
		return color;
	}
}

/**
 * Darken a color by a percentage
 */
export function darkenColor(color: string, amount: number): string {
	try {
		return chroma(color).darken(amount).hex();
	} catch (error) {
		console.error('Error darkening color:', error);
		return color;
	}
}

/**
 * Convert color scale to CSS custom properties
 */
export function colorScaleToCSSProperties(prefix: string, scale: ColorScale): Record<string, string> {
	const properties: Record<string, string> = {};
	
	Object.entries(scale).forEach(([shade, color]) => {
		properties[`--color-${prefix}-${shade}`] = color;
	});
	
	return properties;
}

/**
 * Convert all generated colors to CSS custom properties
 */
export function allColorsToCSSProperties(generatedColors: GeneratedColors): Record<string, string> {
	return {
		...colorScaleToCSSProperties('primary', generatedColors.primary),
		...colorScaleToCSSProperties('secondary', generatedColors.secondary),
		...colorScaleToCSSProperties('accent', generatedColors.accent),
		...colorScaleToCSSProperties('neutral', generatedColors.neutral),
	};
} 
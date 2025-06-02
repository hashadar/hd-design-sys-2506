export interface ColorConfig {
	primary: string;
	secondary: string;
	accent: string;
	neutral: string;
}

export interface LayoutConfig {
	navWidth: string;
	contentMaxWidth: string;
	borderRadiusStyle: 'sharp' | 'minimal' | 'rounded';
}

export interface NavigationItem {
	href: string;
	label: string;
	description: string;
}

export interface FeatureToggles {
	darkMode: boolean;
	animations: boolean;
	blogSection: boolean;
	portfolioSection: boolean;
}

export interface BrandIdentity {
	name: string;
	tagline: string;
	description: string;
	logo?: string;
}

export interface SiteConfig {
	brand: BrandIdentity;
	colors: ColorConfig;
	layout: LayoutConfig;
	navigation: NavigationItem[];
	features: FeatureToggles;
}

export interface ColorScale {
	50: string;
	100: string;
	200: string;
	300: string;
	400: string;
	500: string;
	600: string;
	700: string;
	800: string;
	900: string;
}

export interface GeneratedColors {
	primary: ColorScale;
	secondary: ColorScale;
	accent: ColorScale;
	neutral: ColorScale;
}

// Component prop types
export interface CardProps {
	title?: string;
	description?: string;
	href?: string;
	variant?: 'default' | 'featured';
	class?: string;
}

export interface ButtonProps {
	variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
	size?: 'sm' | 'md' | 'lg';
	disabled?: boolean;
	href?: string;
	type?: 'button' | 'submit' | 'reset';
	class?: string;
}

export interface HeroProps {
	title: string;
	subtitle?: string;
	description?: string;
	cta?: {
		text: string;
		href: string;
		variant?: ButtonProps['variant'];
	};
	layout?: 'center' | 'left' | 'split';
	backgroundImage?: string;
	class?: string;
}

export interface ColorSwatchProps {
	color: string;
	name?: string;
	size?: 'sm' | 'md' | 'lg';
	showLabel?: boolean;
	showValue?: boolean;
	usage?: string;
	class?: string;
}

export interface SpacingDemoProps {
	size: string;
	name?: string;
	pixels?: string;
	usage?: string;
	orientation?: 'horizontal' | 'vertical';
	showLabel?: boolean;
	class?: string;
}

export interface PageHeaderProps {
	title: string;
	description?: string;
	class?: string;
}

export interface GridProps {
	columns?: 1 | 2 | 3 | 4 | 'auto';
	gap?: 'tight' | 'compact' | 'normal' | 'comfortable' | 'loose' | 'spacious';
	responsive?: boolean;
	class?: string;
}

export interface CodeBlockProps {
	code: string;
	language?: string;
	title?: string;
	showCopy?: boolean;
	class?: string;
}

export interface ModalProps {
	open: boolean;
	title?: string;
	description?: string;
	size?: 'sm' | 'md' | 'lg' | 'xl';
	class?: string;
}

export interface FormFieldProps {
	label: string;
	name: string;
	type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number' | 'textarea' | 'select';
	placeholder?: string;
	required?: boolean;
	value?: string;
	options?: Array<{ value: string; label: string }>;
	error?: string;
	class?: string;
} 
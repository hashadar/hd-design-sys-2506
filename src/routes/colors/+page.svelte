<script lang="ts">
	import { PageHeader, Section, Grid, Card, ColorSwatch, CodeBlock } from '$lib/components/index.js';

	// Color palettes
	const creamPalette = [
		{ name: 'cream-50', value: '#FEFCF9', usage: 'lightest backgrounds' },
		{ name: 'cream-100', value: '#FDFBF7', usage: 'main background' },
		{ name: 'cream-200', value: '#FBF7F0', usage: 'subtle backgrounds' },
		{ name: 'cream-300', value: '#F8F2E8', usage: 'borders and dividers' },
		{ name: 'cream-400', value: '#F5EDE0', usage: 'disabled states' },
		{ name: 'cream-500', value: '#F2E8D8', usage: 'hover states' },
		{ name: 'cream-600', value: '#E6D4B8', usage: 'active states' },
		{ name: 'cream-700', value: '#D4BC92', usage: 'muted text' },
		{ name: 'cream-800', value: '#B89F6C', usage: 'secondary text' },
		{ name: 'cream-900', value: '#8F7A52', usage: 'dark accents' }
	];

	const greenPalette = [
		{ name: 'green-50', value: '#F0F4F2', usage: 'success backgrounds' },
		{ name: 'green-100', value: '#DCE8E1', usage: 'light success states' },
		{ name: 'green-200', value: '#B8D1C2', usage: 'success borders' },
		{ name: 'green-300', value: '#95BAA4', usage: 'success hover' },
		{ name: 'green-400', value: '#6B9A7D', usage: 'success text' },
		{ name: 'green-500', value: '#4A7C59', usage: 'primary actions' },
		{ name: 'green-600', value: '#3D6B4A', usage: 'primary hover' },
		{ name: 'green-700', value: '#2F5239', usage: 'secondary text' },
		{ name: 'green-800', value: '#1B4332', usage: 'primary text' },
		{ name: 'green-900', value: '#0F2D1F', usage: 'heading text' }
	];

	const orangePalette = [
		{ name: 'orange-50', value: '#FEF7F0', usage: 'warning backgrounds' },
		{ name: 'orange-100', value: '#FDEADB', usage: 'light warning states' },
		{ name: 'orange-200', value: '#F9D2B5', usage: 'warning borders' },
		{ name: 'orange-300', value: '#F5BA8F', usage: 'warning hover' },
		{ name: 'orange-400', value: '#E69F69', usage: 'warning text' },
		{ name: 'orange-500', value: '#D18442', usage: 'accent elements' },
		{ name: 'orange-600', value: '#B86A1C', usage: 'accent hover' },
		{ name: 'orange-700', value: '#B45309', usage: 'primary accent' },
		{ name: 'orange-800', value: '#8A4107', usage: 'dark accent' },
		{ name: 'orange-900', value: '#5F2D05', usage: 'accent text' }
	];

	const semanticColors = [
		{ name: 'success', value: '#22c55e', usage: 'positive states and feedback' },
		{ name: 'warning', value: '#f59e0b', usage: 'caution and attention states' },
		{ name: 'error', value: '#ef4444', usage: 'error states and validation' },
		{ name: 'info', value: '#3b82f6', usage: 'informational content' }
	];

	const cssCode = `/* Cream Palette */
--color-cream-50: #FEFCF9;
--color-cream-100: #FDFBF7;
--color-cream-500: #F2E8D8;
--color-cream-900: #8F7A52;

/* Green Palette */
--color-green-50: #F0F4F2;
--color-green-500: #4A7C59;
--color-green-800: #1B4332;
--color-green-900: #0F2D1F;

/* Orange Palette */
--color-orange-50: #FEF7F0;
--color-orange-500: #D18442;
--color-orange-700: #B45309;
--color-orange-900: #5F2D05;

/* Usage */
.text-primary { color: var(--color-green-900); }
.text-accent { color: var(--color-orange-700); }
.bg-surface { background: var(--color-cream-50); }`;
</script>

<svelte:head>
	<title>colours - hasha dar design system</title>
	<meta
		name="description"
		content="comprehensive colour palette including cream, green, and orange scales with usage guidelines for the hasha dar design system."
	/>
</svelte:head>

<PageHeader 
	title="colours"
	description="our colour system features warm cream, rich green, and vibrant orange palettes designed for accessibility, harmony, and elegant interfaces."
/>

<!-- Color Philosophy Section -->
<Section>
	<h2 class="section-title">colour philosophy</h2>

	<Grid columns={3}>
		<Card title="accessibility first" variant="featured">
			<p class="card-description">
				all colour combinations meet WCAG 2.1 AA standards for contrast ratios, ensuring readable and
				inclusive interfaces for all users.
			</p>
		</Card>

		<Card title="natural harmony" variant="featured">
			<p class="card-description">
				inspired by natural elements - warm cream like sand, rich green like forest foliage, vibrant
				orange like autumn leaves.
			</p>
		</Card>

		<Card title="systematic scaling" variant="featured">
			<p class="card-description">
				each colour has a complete 50-900 scale providing flexibility whilst maintaining consistency
				across all interface elements.
			</p>
		</Card>
	</Grid>
</Section>

<!-- Cream Palette Section -->
<Section>
	<h2 class="section-title">cream palette</h2>
	<p class="mb-comfortable text-secondary">
		warm, neutral tones for backgrounds, surfaces, and subtle interface elements.
	</p>

	<Grid columns={4}>
		{#each creamPalette as color (color.name)}
			<Card variant="default">
				<ColorSwatch 
					color={color.value}
					name={color.name}
					size="lg"
					showLabel={true}
					showValue={true}
					usage={color.usage}
				/>
			</Card>
		{/each}
	</Grid>
</Section>

<!-- Green Palette Section -->
<Section>
	<h2 class="section-title">green palette</h2>
	<p class="mb-comfortable text-secondary">
		earthy green tones for primary actions, text, and nature-inspired elements.
	</p>

	<Grid columns={4}>
		{#each greenPalette as color (color.name)}
			<Card variant="default">
				<ColorSwatch 
					color={color.value}
					name={color.name}
					size="lg"
					showLabel={true}
					showValue={true}
					usage={color.usage}
				/>
			</Card>
		{/each}
	</Grid>
</Section>

<!-- Orange Palette Section -->
<Section>
	<h2 class="section-title">orange palette</h2>
	<p class="mb-comfortable text-secondary">
		vibrant orange tones for accents, links, and attention-drawing elements.
	</p>

	<Grid columns={4}>
		{#each orangePalette as color (color.name)}
			<Card variant="default">
				<ColorSwatch 
					color={color.value}
					name={color.name}
					size="lg"
					showLabel={true}
					showValue={true}
					usage={color.usage}
				/>
			</Card>
		{/each}
	</Grid>
</Section>

<!-- Semantic Colors Section -->
<Section>
	<h2 class="section-title">semantic colours</h2>
	<p class="mb-comfortable text-secondary">
		purpose-driven colours for states, feedback, and system communications.
	</p>

	<Grid columns={2}>
		{#each semanticColors as color (color.name)}
			<Card variant="featured">
				<ColorSwatch 
					color={color.value}
					name={color.name}
					size="lg"
					showLabel={true}
					showValue={true}
					usage={color.usage}
				/>
			</Card>
		{/each}
	</Grid>
</Section>

<!-- Usage Guidelines Section -->
<Section>
	<h2 class="section-title">usage guidelines</h2>

	<Grid columns={2}>
		<Card title="text colours" variant="default">
			<div class="text-examples">
				<p class="text-primary mb-normal">
					primary text - green-900
				</p>
				<p class="text-secondary mb-normal">
					secondary text - green-800
				</p>
				<p class="text-tertiary mb-normal">
					tertiary text - green-700
				</p>
				<p class="text-muted mb-normal">
					muted text - green-500
				</p>
			</div>
			<p class="card-description">
				use darker green shades for text to ensure proper contrast against light backgrounds.
				reserve orange for links and accents only.
			</p>
		</Card>

		<Card title="background colours" variant="default">
			<div class="background-examples">
				<div class="bg-surface mb-normal">
					card backgrounds - cream-50
				</div>
				<div class="bg-page mb-normal">
					page background - cream-100
				</div>
				<div class="bg-hover mb-normal">
					hover states - cream-200
				</div>
			</div>
			<p class="card-description">
				layer cream tones to create depth and hierarchy. use lighter shades for backgrounds and
				progressively darker for interactive states.
			</p>
		</Card>
	</Grid>
</Section>

<!-- Code Examples Section -->
<Section>
	<h2 class="section-title">code examples</h2>

	<Card title="CSS custom properties" variant="default">
		<CodeBlock 
			title="color utilities"
			code={cssCode}
			showCopy={true}
		/>
	</Card>
</Section>

<style>
	.text-examples {
		margin-bottom: var(--space-normal);
	}

	.text-primary {
		color: var(--color-green-900);
	}

	.text-secondary {
		color: var(--color-green-800);
	}

	.text-tertiary {
		color: var(--color-green-700);
	}

	.text-muted {
		color: var(--color-green-500);
	}

	.background-examples {
		margin-bottom: var(--space-normal);
	}

	.bg-surface {
		background-color: var(--color-cream-50);
		padding: var(--space-normal);
		border-radius: var(--border-radius-base);
	}

	.bg-page {
		background-color: var(--color-cream-100);
		padding: var(--space-normal);
		border-radius: var(--border-radius-base);
	}

	.bg-hover {
		background-color: var(--color-cream-200);
		padding: var(--space-normal);
		border-radius: var(--border-radius-base);
	}
</style>

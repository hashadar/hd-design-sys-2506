<script lang="ts">
	import { PageHeader, Section, Grid, Card, CodeBlock } from '$lib/components/index.js';
	// Typography scales and examples
	const fontSizes = [
		{ name: 'text-xs', size: '0.75rem', example: 'small captions and metadata' },
		{ name: 'text-sm', size: '0.875rem', example: 'secondary text and labels' },
		{ name: 'text-base', size: '1rem', example: 'body text and primary content' },
		{ name: 'text-lg', size: '1.125rem', example: 'large body text and emphasis' },
		{ name: 'text-xl', size: '1.25rem', example: 'section headings and highlights' },
		{ name: 'text-2xl', size: '1.5rem', example: 'page subheadings' },
		{ name: 'text-3xl', size: '1.875rem', example: 'major section titles' },
		{ name: 'text-4xl', size: '2.25rem', example: 'page titles and hero text' }
	];

	const fontWeights = [
		{ name: 'font-light', weight: '300', example: 'light emphasis text' },
		{ name: 'font-normal', weight: '400', example: 'regular body text' },
		{ name: 'font-medium', weight: '500', example: 'medium emphasis text' },
		{ name: 'font-semibold', weight: '600', example: 'headings and emphasis' },
		{ name: 'font-bold', weight: '700', example: 'strong emphasis and titles' }
	];
</script>

<svelte:head>
	<title>typography - hasha dar design system</title>
	<meta
		name="description"
		content="typography guidelines including fonts, sizing, hierarchy, and best practices for the hasha dar design system."
	/>
</svelte:head>

<PageHeader
	title="typography"
	description="our typography system uses elegant fonts and systematic sizing to create clear hierarchy and excellent readability across all interfaces."
/>

<!-- Font Families Section -->
<Section>
	<h2 class="section-title">font families</h2>

	<Grid columns={2}>
		<Card title="Cormorant" variant="featured">
			<p class="card-description">
				our primary typeface for headings, body text, and most content. elegant serif with excellent
				readability and character.
			</p>
			<div class="typography-sample">
				<p class="font-primary text-2xl mb-normal">
					the quick brown fox jumps
				</p>
				<p class="font-primary">abcdefghijklmnopqrstuvwxyz</p>
				<p class="font-primary">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
				<p class="font-primary">1234567890 !@#$%^&*()</p>
			</div>
		</Card>

		<Card title="JetBrains Mono" variant="featured">
			<p class="card-description">
				monospace font for code blocks, technical content, and data displays. optimized for
				programming with excellent character distinction.
			</p>
			<div class="typography-sample">
				<p class="font-mono text-2xl mb-normal">
					const hello = world;
				</p>
				<p class="font-mono">abcdefghijklmnopqrstuvwxyz</p>
				<p class="font-mono">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
				<p class="font-mono">1234567890 !@#$%^&*()</p>
			</div>
		</Card>
	</Grid>
</Section>

<!-- Font Sizes Section -->
<Section>
	<h2 class="section-title">font sizes</h2>
	<p class="mb-comfortable text-secondary">
		systematic font sizing based on a modular scale for consistent hierarchy.
	</p>

	<Grid columns={2}>
		{#each fontSizes as size}
			<Card title={size.name} variant="default">
				<div class="typography-sample">
					<div class={size.name} style="color: var(--color-foreground);">
						{size.size} - {size.example}
					</div>
					<code class="text-sm font-mono mt-tight">.{size.name}</code>
				</div>
			</Card>
		{/each}
	</Grid>
</Section>

<!-- Font Weights Section -->
<Section>
	<h2 class="section-title">font weights</h2>
	<p class="mb-comfortable text-secondary">
		varied font weights to establish hierarchy and emphasis within content.
	</p>

	<Grid columns={2}>
		{#each fontWeights as weight}
			<Card title={weight.name} variant="default">
				<div class="typography-sample">
					<div class="{weight.name} text-xl" style="color: var(--color-foreground);">
						{weight.weight} - {weight.example}
					</div>
					<code class="text-sm font-mono mt-tight">.{weight.name}</code>
				</div>
			</Card>
		{/each}
	</Grid>
</Section>

<!-- Typography Hierarchy Section -->
<Section>
	<h2 class="section-title">heading hierarchy</h2>
	<p class="mb-comfortable text-secondary">
		semantic heading structure with consistent styling and spacing.
	</p>

	<Card title="heading levels" variant="featured">
		<div class="typography-hierarchy">
			<h1 class="mb-normal">heading level 1 - page titles</h1>
			<h2 class="mb-normal">heading level 2 - section titles</h2>
			<h3 class="mb-normal">heading level 3 - subsection titles</h3>
			<h4 class="mb-normal">heading level 4 - component titles</h4>
			<h5 class="mb-normal">heading level 5 - small headings</h5>
			<h6 class="mb-normal">heading level 6 - micro headings</h6>

			<p class="mt-normal">
				this is regular paragraph text that follows the heading hierarchy. it demonstrates the visual
				relationship between headings and body text, showing how the typographic scale creates clear
				information architecture.
			</p>
		</div>
	</Card>
</Section>

<!-- Usage Guidelines Section -->
<Section>
	<h2 class="section-title">usage guidelines</h2>

	<Grid columns={2}>
		<Card title="primary font" variant="default">
			<p class="card-description">
				use Cormorant for all headings, body text, UI labels, and general content. its elegant serif
				design provides excellent readability and sophisticated character that aligns with our
				design principles.
			</p>
			<ul class="usage-list">
				<li>page and section headings</li>
				<li>body text and paragraphs</li>
				<li>navigation and UI elements</li>
				<li>buttons and interactive text</li>
			</ul>
		</Card>

		<Card title="monospace font" variant="default">
			<p class="card-description">
				use JetBrains Mono exclusively for code, technical content, and data that requires monospace
				formatting. avoid using it for regular content as it reduces readability for extended text.
			</p>
			<ul class="usage-list">
				<li>code blocks and snippets</li>
				<li>technical documentation</li>
				<li>data tables and numbers</li>
				<li>terminal or console output</li>
			</ul>
		</Card>
	</Grid>
</Section>

<!-- Code Examples Section -->
<Section>
	<h2 class="section-title">code examples</h2>

	<Card title="CSS font utilities" variant="default">
		<CodeBlock 
			title="font utilities"
			code={`/* Font families */
.font-primary { font-family: 'Cormorant', serif; }
.font-mono { font-family: 'JetBrains Mono', monospace; }

/* Font sizes */
.text-xs { font-size: 0.75rem; }
.text-sm { font-size: 0.875rem; }
.text-base { font-size: 1rem; }
.text-lg { font-size: 1.125rem; }
.text-xl { font-size: 1.25rem; }
.text-2xl { font-size: 1.5rem; }
.text-3xl { font-size: 1.875rem; }
.text-4xl { font-size: 2.25rem; }

/* Font weights */
.font-light { font-weight: 300; }
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }`}
			showCopy={true}
		/>
	</Card>
</Section>

<style>
	.typography-sample {
		background-color: var(--color-muted);
		padding: var(--space-normal);
		border-radius: var(--border-radius-base);
		border: 1px solid var(--color-border);
	}

	.typography-hierarchy {
		background-color: var(--color-muted);
		padding: var(--space-normal);
		border-radius: var(--border-radius-base);
		border: 1px solid var(--color-border);
	}

	.usage-list {
		margin-top: var(--space-normal);
		padding-left: var(--space-comfortable);
		color: var(--color-muted-foreground);
	}

	.usage-list li {
		margin-bottom: var(--space-tight);
	}

	.usage-list li:last-child {
		margin-bottom: 0;
	}
</style>

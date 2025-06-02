<script lang="ts">
	import { PageHeader, Section, Grid, Card, SpacingDemo, CodeBlock } from '$lib/components/index.js';

	// Spacing scale data
	const spacingScale = [
		{ name: 'tight', value: '0.25rem', pixels: '4px', usage: 'very tight spacing for dense interfaces' },
		{ name: 'compact', value: '0.5rem', pixels: '8px', usage: 'compact spacing for form elements' },
		{ name: 'normal', value: '0.75rem', pixels: '12px', usage: 'normal spacing for general use' },
		{ name: 'comfortable', value: '1rem', pixels: '16px', usage: 'comfortable spacing for content areas' },
		{ name: 'loose', value: '1.5rem', pixels: '24px', usage: 'loose spacing for breathing room' },
		{ name: 'spacious', value: '2rem', pixels: '32px', usage: 'spacious layouts and sections' },
		{ name: 'generous', value: '3rem', pixels: '48px', usage: 'generous spacing for major separations' }
	];

	const cssCode = `/* Spacing variables */
--space-tight: 0.25rem;      /* 4px */
--space-compact: 0.5rem;     /* 8px */
--space-normal: 0.75rem;     /* 12px */
--space-comfortable: 1rem;   /* 16px */
--space-loose: 1.5rem;       /* 24px */
--space-spacious: 2rem;      /* 32px */
--space-generous: 3rem;      /* 48px */

/* Margin utilities */
.mb-tight { margin-bottom: var(--space-tight); }
.mb-compact { margin-bottom: var(--space-compact); }
.mb-normal { margin-bottom: var(--space-normal); }
.mb-comfortable { margin-bottom: var(--space-comfortable); }
.mb-loose { margin-bottom: var(--space-loose); }
.mb-spacious { margin-bottom: var(--space-spacious); }
.mb-generous { margin-bottom: var(--space-generous); }

/* Grid spacing */
.grid {
  display: grid;
  gap: var(--space-comfortable);
}`;
</script>

<svelte:head>
	<title>spacing - hasha dar design system</title>
	<meta
		name="description"
		content="systematic spacing scale with seven carefully calculated steps from tight to generous, ensuring consistent rhythm and hierarchy in interface design."
	/>
</svelte:head>

<PageHeader 
	title="spacing"
	description="systematic spacing scale with seven carefully calculated steps from tight to generous, ensuring consistent rhythm and hierarchy in interface design."
/>

<!-- Spacing Philosophy Section -->
<Section>
	<h2 class="section-title">spacing philosophy</h2>

	<Grid columns={3}>
		<Card title="minimal approach" variant="featured">
			<p class="card-description">
				deliberate use of whitespace creates elegant, uncluttered interfaces that let content
				breathe and guide user attention naturally.
			</p>
		</Card>

		<Card title="systematic scale" variant="featured">
			<p class="card-description">
				mathematical progression from tight to generous spacing ensures consistency whilst providing
				flexibility for different layout needs.
			</p>
		</Card>

		<Card title="visual rhythm" variant="featured">
			<p class="card-description">
				consistent spacing creates visual rhythm that helps users understand relationships between
				elements and navigate interfaces intuitively.
			</p>
		</Card>
	</Grid>
</Section>

<!-- Spacing Scale Section -->
<Section>
	<h2 class="section-title">spacing scale</h2>
	<p class="mb-comfortable text-secondary">
		seven-step spacing scale from very tight to generous, designed for minimal yet effective spatial
		relationships.
	</p>

	<Grid columns={2}>
		{#each spacingScale as space (space.name)}
			<Card variant="default">
				<SpacingDemo 
					size={space.value}
					name={space.name}
					pixels={space.pixels}
					usage={space.usage}
				/>
			</Card>
		{/each}
	</Grid>
</Section>

<!-- Margin Examples Section -->
<Section>
	<h2 class="section-title">margin examples</h2>

	<Grid columns={2}>
		<Card title="vertical rhythm" variant="default">
			<div class="spacing-examples">
				<div class="example-block mb-tight">margin-bottom: tight</div>
				<div class="example-block mb-compact">margin-bottom: compact</div>
				<div class="example-block mb-normal">margin-bottom: normal</div>
				<div class="example-block mb-comfortable">margin-bottom: comfortable</div>
				<div class="example-block">last element</div>
			</div>
			<p class="card-description">
				vertical margins create reading rhythm and help establish content hierarchy through
				consistent spacing relationships.
			</p>
		</Card>

		<Card title="horizontal spacing" variant="default">
			<div class="horizontal-examples">
				<div class="example-inline">item 1</div>
				<div class="example-inline">item 2</div>
				<div class="example-inline">item 3</div>
			</div>
			<p class="card-description">
				horizontal margins and gaps create logical groupings and ensure sufficient breathing room
				between interactive elements.
			</p>
		</Card>
	</Grid>
</Section>

<!-- Padding Guidelines Section -->
<Section>
	<h2 class="section-title">padding guidelines</h2>

	<Grid columns={2}>
		<Card title="component padding" variant="default">
			<div class="padding-examples">
				<div class="example-button mb-normal">
					<strong>buttons:</strong> compact vertical, normal horizontal
				</div>
				<div class="example-card mb-normal">
					<strong>cards:</strong> comfortable padding all around
				</div>
				<div class="example-section mb-normal">
					<strong>sections:</strong> loose padding for content areas
				</div>
			</div>
			<p class="card-description">
				use appropriate padding based on component importance and content density.
			</p>
		</Card>

		<Card title="layout padding" variant="default">
			<div class="padding-examples">
				<div class="example-content mb-normal">
					<strong>main content:</strong> comfortable padding for readability
				</div>
				<div class="example-nav mb-normal">
					<strong>navigation:</strong> compact padding for efficiency
				</div>
				<div class="example-hero mb-normal">
					<strong>hero sections:</strong> spacious padding for impact
				</div>
			</div>
			<p class="card-description">
				layout padding creates hierarchy and guides attention through the interface.
			</p>
		</Card>
	</Grid>
</Section>

<!-- Grid and Layout Section -->
<Section>
	<h2 class="section-title">grid and layout</h2>

	<Card title="grid spacing" variant="featured">
		<p class="card-description mb-comfortable">
			our grid system uses comfortable spacing between items for optimal readability and visual
			flow.
		</p>

		<Grid columns={3} class="mb-spacious">
			<div class="grid-example">
				grid item 1
			</div>
			<div class="grid-example">
				grid item 2
			</div>
			<div class="grid-example">
				grid item 3
			</div>
		</Grid>

		<p class="text-sm text-secondary">
			grid gap: comfortable (1rem / 16px) for balanced spacing between elements
		</p>
	</Card>
</Section>

<!-- Usage Guidelines Section -->
<Section>
	<h2 class="section-title">usage guidelines</h2>

	<Grid columns={2}>
		<Card title="when to use tight spacing" variant="default">
			<ul class="usage-list">
				<li>form labels and inputs</li>
				<li>navigation menu items</li>
				<li>button groups and toolbars</li>
				<li>data tables and dense layouts</li>
				<li>icon and text pairs</li>
			</ul>
		</Card>

		<Card title="when to use generous spacing" variant="default">
			<ul class="usage-list">
				<li>between major page sections</li>
				<li>around hero content</li>
				<li>isolation of important elements</li>
				<li>call-to-action areas</li>
				<li>before footer content</li>
			</ul>
		</Card>
	</Grid>
</Section>

<!-- Code Examples Section -->
<Section>
	<h2 class="section-title">code examples</h2>

	<Card title="CSS spacing utilities" variant="default">
		<CodeBlock 
			title="spacing utilities"
			code={cssCode}
			showCopy={true}
		/>
	</Card>
</Section>

<style>
	.spacing-examples {
		border-left: 2px solid var(--color-accent-600);
		padding-left: var(--space-normal);
	}

	.example-block {
		background-color: var(--color-muted);
		padding: var(--space-compact);
		border-radius: var(--border-radius-sm);
		font-size: 0.875rem;
		color: var(--color-card-foreground);
	}

	.horizontal-examples {
		display: flex;
		gap: var(--space-normal);
		margin-bottom: var(--space-normal);
		flex-wrap: wrap;
	}

	.example-inline {
		background-color: var(--color-primary-100);
		padding: var(--space-compact);
		border-radius: var(--border-radius-sm);
		font-size: 0.875rem;
		color: var(--color-card-foreground);
	}

	.padding-examples {
		margin-bottom: var(--space-normal);
	}

	.example-button {
		background-color: var(--color-primary-600);
		color: var(--color-primary-50);
		padding: var(--space-compact) var(--space-normal);
		border-radius: var(--border-radius-base);
	}

	.example-card {
		background-color: var(--color-secondary-200);
		padding: var(--space-comfortable);
		border-radius: var(--border-radius-base);
	}

	.example-section {
		background-color: var(--color-muted);
		padding: var(--space-loose);
		border-radius: var(--border-radius-base);
	}

	.example-content {
		background-color: var(--color-accent-100);
		padding: var(--space-comfortable);
		border-radius: var(--border-radius-base);
	}

	.example-nav {
		background-color: var(--color-primary-100);
		padding: var(--space-compact);
		border-radius: var(--border-radius-base);
	}

	.example-hero {
		background-color: var(--color-secondary-300);
		padding: var(--space-spacious);
		border-radius: var(--border-radius-base);
	}

	.grid-example {
		background-color: var(--color-primary-200);
		padding: var(--space-comfortable);
		border-radius: var(--border-radius-base);
		text-align: center;
	}

	.usage-list {
		margin-top: var(--space-normal);
		padding-left: var(--space-comfortable);
		color: var(--color-card-foreground);
	}

	.usage-list li {
		margin-bottom: var(--space-tight);
	}

	.usage-list li:last-child {
		margin-bottom: 0;
	}
</style>

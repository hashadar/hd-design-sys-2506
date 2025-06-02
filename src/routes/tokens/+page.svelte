<script lang="ts">
	import { PageHeader, Section, Grid, Card, ColorSwatch, SpacingDemo, CodeBlock } from '$lib/components/index.js';

	// Token categories and examples
	const colorTokens = [
		{
			category: 'cream',
			tokens: [
				'cream-50',
				'cream-100',
				'cream-200',
				'cream-300',
				'cream-400',
				'cream-500',
				'cream-600',
				'cream-700',
				'cream-800',
				'cream-900'
			]
		},
		{
			category: 'green',
			tokens: [
				'green-50',
				'green-100',
				'green-200',
				'green-300',
				'green-400',
				'green-500',
				'green-600',
				'green-700',
				'green-800',
				'green-900'
			]
		},
		{
			category: 'orange',
			tokens: [
				'orange-50',
				'orange-100',
				'orange-200',
				'orange-300',
				'orange-400',
				'orange-500',
				'orange-600',
				'orange-700',
				'orange-800',
				'orange-900'
			]
		}
	];

	const spacingTokens = [
		{ name: 'tight', value: '0.25rem', usage: 'tight spacing', pixels: '4px' },
		{ name: 'compact', value: '0.5rem', usage: 'compact spacing', pixels: '8px' },
		{ name: 'normal', value: '0.75rem', usage: 'normal spacing', pixels: '12px' },
		{ name: 'comfortable', value: '1rem', usage: 'comfortable spacing', pixels: '16px' },
		{ name: 'loose', value: '1.5rem', usage: 'loose spacing', pixels: '24px' },
		{ name: 'spacious', value: '2rem', usage: 'spacious spacing', pixels: '32px' },
		{ name: 'generous', value: '3rem', usage: 'generous spacing', pixels: '48px' }
	];

	const cssCode = `/* Design Tokens */
:root {
  /* Color Tokens */
  --color-cream-50: #fdfbf7;
  --color-cream-100: #f9f5ed;
  --color-cream-200: #f2e8d8;
  --color-cream-300: #e6d9c2;
  --color-cream-400: #d9c9ab;
  --color-cream-500: #ccb994;
  --color-cream-600: #bfa97d;
  --color-cream-700: #b29966;
  --color-cream-800: #a5894f;
  --color-cream-900: #987938;

  /* Spacing Tokens */
  --space-tight: 0.25rem;      /* 4px */
  --space-compact: 0.5rem;     /* 8px */
  --space-normal: 0.75rem;     /* 12px */
  --space-comfortable: 1rem;   /* 16px */
  --space-loose: 1.5rem;       /* 24px */
  --space-spacious: 2rem;      /* 32px */
  --space-generous: 3rem;      /* 48px */

  /* Typography Tokens */
  --font-primary: 'Cormorant', serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Border Radius Tokens */
  --border-radius-sm: 0.25rem;
  --border-radius-base: 0.5rem;
  --border-radius-lg: 1rem;

  /* Shadow Tokens */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
}`;
</script>

<svelte:head>
	<title>design tokens - hasha dar design system</title>
	<meta
		name="description"
		content="comprehensive design tokens including colors, spacing, typography, and layout variables for the hasha dar design system."
	/>
</svelte:head>

<PageHeader 
	title="design tokens"
	description="foundational design decisions expressed as named variables that ensure consistency, maintainability, and scalability across all interfaces."
/>

<!-- Token Philosophy Section -->
<Section>
	<h2 class="section-title">token philosophy</h2>

	<Grid columns={3}>
		<Card title="systematic naming" variant="featured">
			<p class="card-description">
				clear, hierarchical naming conventions make tokens easy to understand 
				and use across different contexts and team members.
			</p>
		</Card>

		<Card title="single source of truth" variant="featured">
			<p class="card-description">
				centralised tokens eliminate inconsistencies and make global design 
				changes simple and reliable across the entire system.
			</p>
		</Card>

		<Card title="scalable architecture" variant="featured">
			<p class="card-description">
				flexible token structure supports themes, customisation, and future 
				expansion whilst maintaining design system integrity.
			</p>
		</Card>
	</Grid>
</Section>

<!-- Color Tokens Section -->
<Section>
	<h2 class="section-title">colour tokens</h2>
	<p class="mb-comfortable text-secondary">
		comprehensive colour scales with semantic naming for consistent colour usage.
	</p>

	{#each colorTokens as palette (palette.category)}
		<Card title="{palette.category} palette" variant="default" class="mb-spacious">
			<Grid columns={4} class="mt-normal">
				{#each palette.tokens as token (token)}
					<ColorSwatch 
						color="var(--color-{token})"
						name={token}
						size="md"
						showLabel={true}
					/>
				{/each}
			</Grid>
		</Card>
	{/each}
</Section>

<!-- Spacing Tokens Section -->
<Section>
	<h2 class="section-title">spacing tokens</h2>
	<p class="mb-comfortable text-secondary">
		systematic spacing scale for consistent layouts and visual rhythm.
	</p>

	<Card title="spacing scale" variant="default">
		<Grid columns={1} gap="normal" class="mt-normal">
			{#each spacingTokens as token (token.name)}
				<SpacingDemo 
					size={token.value}
					name={token.name}
					pixels={token.pixels}
					usage={token.usage}
				/>
			{/each}
		</Grid>
	</Card>
</Section>

<!-- Typography Tokens Section -->
<Section>
	<h2 class="section-title">typography tokens</h2>

	<Grid columns={2}>
		<Card title="font families" variant="default">
			<div class="mt-normal">
				<div class="mb-normal">
					<code class="font-mono text-sm">--font-primary</code>
					<p class="mt-tight font-primary">
						'Cormorant', serif - elegant serif for headings and body text
					</p>
				</div>
				<div class="mb-normal">
					<code class="font-mono text-sm">--font-mono</code>
					<p class="mt-tight font-mono">
						'JetBrains Mono', monospace - code and technical content
					</p>
				</div>
			</div>
		</Card>

		<Card title="font sizes" variant="default">
			<div class="mt-normal">
				<div class="mb-tight text-xs">
					<code class="font-mono">text-xs</code> - 0.75rem
				</div>
				<div class="mb-tight text-sm">
					<code class="font-mono">text-sm</code> - 0.875rem
				</div>
				<div class="mb-tight text-base">
					<code class="font-mono">text-base</code> - 1rem
				</div>
				<div class="mb-tight text-lg">
					<code class="font-mono">text-lg</code> - 1.125rem
				</div>
				<div class="mb-tight text-xl">
					<code class="font-mono">text-xl</code> - 1.25rem
				</div>
				<div class="mb-tight text-2xl">
					<code class="font-mono">text-2xl</code> - 1.5rem
				</div>
			</div>
		</Card>
	</Grid>
</Section>

<!-- Border and Effects Tokens Section -->
<Section>
	<h2 class="section-title">border & effects tokens</h2>

	<Grid columns={2}>
		<Card title="border radius" variant="default">
			<div class="mt-normal">
				<div class="mb-normal">
					<div class="radius-demo radius-sm"></div>
					<code class="font-mono text-sm">--border-radius-sm</code>
				</div>
				<div class="mb-normal">
					<div class="radius-demo radius-base"></div>
					<code class="font-mono text-sm">--border-radius-base</code>
				</div>
				<div class="mb-normal">
					<div class="radius-demo radius-lg"></div>
					<code class="font-mono text-sm">--border-radius-lg</code>
				</div>
			</div>
		</Card>

		<Card title="shadows" variant="default">
			<div class="mt-normal">
				<div class="mb-normal">
					<div class="shadow-demo shadow-sm"></div>
					<code class="font-mono text-sm">--shadow-sm</code>
				</div>
				<div class="mb-normal">
					<div class="shadow-demo shadow-md"></div>
					<code class="font-mono text-sm">--shadow-md</code>
				</div>
				<div class="mb-normal">
					<div class="shadow-demo shadow-lg"></div>
					<code class="font-mono text-sm">--shadow-lg</code>
				</div>
			</div>
		</Card>
	</Grid>
</Section>

<!-- Code Examples Section -->
<Section>
	<h2 class="section-title">code examples</h2>

	<Card title="CSS design tokens" variant="default">
		<CodeBlock 
			title="design tokens"
			code={cssCode}
			showCopy={true}
		/>
	</Card>
</Section>

<style>
	.radius-demo {
		width: 2rem;
		height: 2rem;
		background: var(--color-primary-600);
		margin-bottom: var(--space-compact);
	}

	.radius-sm {
		border-radius: var(--border-radius-sm);
	}

	.radius-base {
		border-radius: var(--border-radius-base);
	}

	.radius-lg {
		border-radius: var(--border-radius-lg);
	}

	.shadow-demo {
		width: 3rem;
		height: 2rem;
		background: var(--color-secondary-100);
		margin-bottom: var(--space-compact);
	}

	.shadow-sm {
		box-shadow: var(--shadow-sm);
	}

	.shadow-md {
		box-shadow: var(--shadow-md);
	}

	.shadow-lg {
		box-shadow: var(--shadow-lg);
	}
</style>

<script lang="ts">
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
		{ name: 'space-tight', value: '0.25rem', usage: 'tight spacing' },
		{ name: 'space-compact', value: '0.5rem', usage: 'compact spacing' },
		{ name: 'space-normal', value: '0.75rem', usage: 'normal spacing' },
		{ name: 'space-comfortable', value: '1rem', usage: 'comfortable spacing' },
		{ name: 'space-loose', value: '1.5rem', usage: 'loose spacing' },
		{ name: 'space-spacious', value: '2rem', usage: 'spacious spacing' },
		{ name: 'space-generous', value: '3rem', usage: 'generous spacing' }
	];
</script>

<svelte:head>
	<title>design tokens - hasha dar design system</title>
	<meta
		name="description"
		content="comprehensive design tokens including colors, spacing, typography, and layout variables for the hasha dar design system."
	/>
</svelte:head>

<!-- Page Header -->
<header class="page-header">
	<h1 class="page-title">design tokens</h1>
	<p class="page-description">
		foundational design decisions expressed as named variables that ensure 
		consistency, maintainability, and scalability across all interfaces.
	</p>
</header>

<!-- Token Philosophy Section -->
<section class="section">
	<h2 class="section-title">token philosophy</h2>

	<div class="grid grid-3">
		<div class="card">
			<h3 class="card-title">systematic naming</h3>
			<p class="card-description">
				clear, hierarchical naming conventions make tokens easy to understand 
				and use across different contexts and team members.
			</p>
		</div>

		<div class="card">
			<h3 class="card-title">single source of truth</h3>
			<p class="card-description">
				centralised tokens eliminate inconsistencies and make global design 
				changes simple and reliable across the entire system.
			</p>
		</div>

		<div class="card">
			<h3 class="card-title">scalable architecture</h3>
			<p class="card-description">
				flexible token structure supports themes, customisation, and future 
				expansion whilst maintaining design system integrity.
			</p>
		</div>
	</div>
</section>

<!-- Color Tokens Section -->
<section class="section">
	<h2 class="section-title">colour tokens</h2>
	<p class="mb-comfortable text-secondary">
		comprehensive colour scales with semantic naming for consistent colour usage.
	</p>

	{#each colorTokens as palette, paletteIndex (palette.category)}
		<div class="card" style="margin-bottom: 2rem;">
			<h3 class="card-title">{palette.category} palette</h3>
			<div class="grid-4 grid" style="margin-top: 1rem;">
				{#each palette.tokens as token (token)}
					<div style="text-align: centre;">
						<div 
							class="color-swatch" 
							style="background-color: var(--color-{token}); width: 100%; height: 3rem; margin-bottom: 0.5rem;"
						></div>
						<code class="text-xs">--color-{token}</code>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</section>

<!-- Spacing Tokens Section -->
<section class="section">
	<h2 class="section-title">spacing tokens</h2>
	<p class="mb-comfortable text-secondary">
		systematic spacing scale for consistent layouts and visual rhythm.
	</p>

	<div class="card">
		<h3 class="card-title">spacing scale</h3>
		<div style="margin-top: 1rem;">
			{#each spacingTokens as token, index (token.name)}
				<div style="display: flex; align-items: centre; margin-bottom: 1rem;">
					<div 
						class="spacing-demo" 
						style="width: {token.value}; height: 1rem; margin-right: 1rem;"
					></div>
					<div style="flex: 1;">
						<code class="font-mono text-sm">--{token.name}</code>
						<span style="margin: 0 1rem; color: var(--color-green-600);">{token.value}</span>
						<span class="text-sm text-muted">{token.usage}</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Typography Tokens Section -->
<section class="section">
	<h2 class="section-title">typography tokens</h2>

	<div class="grid grid-2">
		<div class="card">
			<h3 class="card-title">font families</h3>
			<div style="margin-top: 1rem;">
				<div style="margin-bottom: 1rem;">
					<code class="font-mono text-sm">--font-primary</code>
					<p style="margin-top: 0.5rem; font-family: var(--font-primary);">
						'Cormorant', serif - elegant serif for headings and body text
					</p>
				</div>
				<div style="margin-bottom: 1rem;">
					<code class="font-mono text-sm">--font-mono</code>
					<p style="margin-top: 0.5rem; font-family: var(--font-mono);">
						'JetBrains Mono', monospace - code and technical content
					</p>
				</div>
			</div>
		</div>

		<div class="card">
			<h3 class="card-title">font sizes</h3>
			<div style="margin-top: 1rem;">
				<div style="margin-bottom: 0.5rem; font-size: 0.75rem;">
					<code class="font-mono">text-xs</code> - 0.75rem
				</div>
				<div style="margin-bottom: 0.5rem; font-size: 0.875rem;">
					<code class="font-mono">text-sm</code> - 0.875rem
				</div>
				<div style="margin-bottom: 0.5rem; font-size: 1rem;">
					<code class="font-mono">text-base</code> - 1rem
				</div>
				<div style="margin-bottom: 0.5rem; font-size: 1.125rem;">
					<code class="font-mono">text-lg</code> - 1.125rem
				</div>
				<div style="margin-bottom: 0.5rem; font-size: 1.25rem;">
					<code class="font-mono">text-xl</code> - 1.25rem
				</div>
				<div style="margin-bottom: 0.5rem; font-size: 1.5rem;">
					<code class="font-mono">text-2xl</code> - 1.5rem
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Layout Tokens Section -->
<section class="section">
	<h2 class="section-title">layout tokens</h2>

	<div class="grid grid-2">
		<div class="card">
			<h3 class="card-title">layout dimensions</h3>
			<div style="margin-top: 1rem;">
				<div style="margin-bottom: 1rem;">
					<code class="font-mono text-sm">--nav-width</code>
					<span style="margin-left: 1rem; color: var(--color-green-600);">20rem</span>
					<p class="text-sm text-muted">sidebar navigation width</p>
				</div>
				<div style="margin-bottom: 1rem;">
					<code class="font-mono text-sm">--content-max-width</code>
					<span style="margin-left: 1rem; color: var(--color-green-600);">80rem</span>
					<p class="text-sm text-muted">maximum content container width</p>
				</div>
				<div style="margin-bottom: 1rem;">
					<code class="font-mono text-sm">--content-padding</code>
					<span style="margin-left: 1rem; color: var(--color-green-600);">1.5rem</span>
					<p class="text-sm text-muted">default content area padding</p>
				</div>
			</div>
		</div>

		<div class="card">
			<h3 class="card-title">border and radius</h3>
			<div style="margin-top: 1rem;">
				<div style="margin-bottom: 1rem;">
					<code class="font-mono text-sm">--border-width</code>
					<span style="margin-left: 1rem; color: var(--color-green-600);">1px</span>
					<p class="text-sm text-muted">standard border thickness</p>
				</div>
				<div style="margin-bottom: 1rem;">
					<code class="font-mono text-sm">--border-radius-base</code>
					<span style="margin-left: 1rem; color: var(--color-green-600);">0.25rem</span>
					<p class="text-sm text-muted">default border radius</p>
				</div>
				<div style="margin-bottom: 1rem;">
					<code class="font-mono text-sm">--border-radius-lg</code>
					<span style="margin-left: 1rem; color: var(--color-green-600);">0.5rem</span>
					<p class="text-sm text-muted">large border radius for cards</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Animation Tokens Section -->
<section class="section">
	<h2 class="section-title">animation tokens</h2>

	<div class="card">
		<h3 class="card-title">transitions and timing</h3>
		<div class="grid grid-2" style="margin-top: 1rem;">
			<div>
				<h4 class="font-semibold mb-compact">transition durations:</h4>
				<div style="margin-bottom: 0.5rem;">
					<code class="font-mono text-sm">--transition-fast</code>
					<span style="margin-left: 1rem; color: var(--color-green-600);">150ms</span>
				</div>
				<div style="margin-bottom: 0.5rem;">
					<code class="font-mono text-sm">--transition-base</code>
					<span style="margin-left: 1rem; color: var(--color-green-600);">200ms</span>
				</div>
				<div style="margin-bottom: 0.5rem;">
					<code class="font-mono text-sm">--transition-slow</code>
					<span style="margin-left: 1rem; color: var(--color-green-600);">300ms</span>
				</div>
			</div>
			<div>
				<h4 class="font-semibold mb-compact">hover animation classes:</h4>
				<div style="margin-bottom: 0.5rem;">
					<code class="font-mono text-sm">.card:hover</code>
				</div>
				<div style="margin-bottom: 0.5rem;">
					<code class="font-mono text-sm">.btn:hover</code>
				</div>
				<div style="margin-bottom: 0.5rem;">
					<code class="font-mono text-sm">.nav-link:hover</code>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Implementation Section -->
<section class="section">
	<h2 class="section-title">implementation</h2>

	<div class="card">
		<h3 class="card-title">using design tokens</h3>
		<pre class="font-mono"><code>{`/* CSS implementation */
.component {
  color: var(--color-green-900);
  background-color: var(--color-cream-50);
  padding: var(--space-comfortable);
  border-radius: var(--border-radius-md);
  transition: all var(--transition-base);
}

/* Responsive design */
@media (max-width: 768px) {
  .nav-sidebar {
    width: var(--nav-width-collapsed);
  }
}

/* Custom properties override */
:root {
  --custom-accent: var(--color-orange-700);
  --custom-spacing: var(--space-loose);
}`}</code></pre>
	</div>
</section>

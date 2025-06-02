<script lang="ts">
	// Spacing scale
	const spacingScale = [
		{
			name: 'tight',
			value: '0.25rem',
			pixels: '4px',
			usage: 'very tight spacing between small elements'
		},
		{ name: 'compact', value: '0.5rem', pixels: '8px', usage: 'compact spacing for dense layouts' },
		{ name: 'normal', value: '0.75rem', pixels: '12px', usage: 'normal spacing for most elements' },
		{
			name: 'comfortable',
			value: '1rem',
			pixels: '16px',
			usage: 'comfortable spacing for readability'
		},
		{ name: 'loose', value: '1.5rem', pixels: '24px', usage: 'loose spacing for emphasis' },
		{ name: 'spacious', value: '2rem', pixels: '32px', usage: 'spacious spacing for sections' },
		{
			name: 'generous',
			value: '3rem',
			pixels: '48px',
			usage: 'generous spacing for major sections'
		}
	];
</script>

<svelte:head>
	<title>spacing - hasha dar design system</title>
	<meta
		name="description"
		content="systematic spacing scale and layout guidelines for consistent, harmonious designs in the hasha dar design system."
	/>
</svelte:head>

<!-- Page Header -->
<header class="page-header">
	<h1 class="page-title">spacing</h1>
	<p class="page-description">
		our spacing system creates rhythm, hierarchy, and visual harmony through systematic and minimal
		use of whitespace across all interfaces.
	</p>
</header>

<!-- Spacing Philosophy Section -->
<section class="section">
	<h2 class="section-title">spacing philosophy</h2>

	<div class="grid grid-3">
		<div class="card">
			<h3 class="card-title">minimal approach</h3>
			<p class="card-description">
				deliberate use of whitespace creates elegant, uncluttered interfaces that let content
				breathe and guide user attention naturally.
			</p>
		</div>

		<div class="card">
			<h3 class="card-title">systematic scale</h3>
			<p class="card-description">
				mathematical progression from tight to generous spacing ensures consistency whilst providing
				flexibility for different layout needs.
			</p>
		</div>

		<div class="card">
			<h3 class="card-title">visual rhythm</h3>
			<p class="card-description">
				consistent spacing creates visual rhythm that helps users understand relationships between
				elements and navigate interfaces intuitively.
			</p>
		</div>
	</div>
</section>

<!-- Spacing Scale Section -->
<section class="section">
	<h2 class="section-title">spacing scale</h2>
	<p class="mb-comfortable text-secondary">
		seven-step spacing scale from very tight to generous, designed for minimal yet effective spatial
		relationships.
	</p>

	<div class="grid-2 grid">
		{#each spacingScale as space, index (space.name)}
			<div class="card">
				<div style="display: flex; align-items: center; margin-bottom: 1rem;">
					<div
						class="spacing-demo"
						style="width: {space.value}; height: 1rem; margin-right: 1rem;"
						title="{space.name}: {space.value}"
					></div>
					<div>
						<h4 class="card-title text-sm">space-{space.name}</h4>
						<p class="text-xs font-mono">{space.value} ({space.pixels})</p>
					</div>
				</div>
				<p class="card-description text-sm">{space.usage}</p>
			</div>
		{/each}
	</div>
</section>

<!-- Margin Examples Section -->
<section class="section">
	<h2 class="section-title">margin examples</h2>
	<p class="mb-comfortable text-secondary">
		bottom margin utilities for consistent vertical rhythm throughout content.
	</p>

	<div class="card">
		<div
			class="mb-tight"
			style="background-color: var(--color-cream-200); padding: 1rem; border-radius: 4px;"
		>
			<strong>mb-tight</strong> - very small bottom margin for tight layouts
		</div>
		<div
			class="mb-compact"
			style="background-color: var(--color-cream-200); padding: 1rem; border-radius: 4px;"
		>
			<strong>mb-compact</strong> - compact bottom margin for dense content
		</div>
		<div
			class="mb-normal"
			style="background-color: var(--color-cream-200); padding: 1rem; border-radius: 4px;"
		>
			<strong>mb-normal</strong> - normal bottom margin for standard spacing
		</div>
		<div
			class="mb-comfortable"
			style="background-color: var(--color-cream-200); padding: 1rem; border-radius: 4px;"
		>
			<strong>mb-comfortable</strong> - comfortable bottom margin for readability
		</div>
		<div
			class="mb-loose"
			style="background-color: var(--color-cream-200); padding: 1rem; border-radius: 4px;"
		>
			<strong>mb-loose</strong> - loose bottom margin for emphasis
		</div>
		<div
			class="mb-spacious"
			style="background-color: var(--color-cream-200); padding: 1rem; border-radius: 4px;"
		>
			<strong>mb-spacious</strong> - spacious bottom margin for sections
		</div>
		<div
			class="mb-generous"
			style="background-color: var(--color-cream-200); padding: 1rem; border-radius: 4px;"
		>
			<strong>mb-generous</strong> - generous bottom margin for major sections
		</div>
	</div>
</section>

<!-- Padding Guidelines Section -->
<section class="section">
	<h2 class="section-title">padding guidelines</h2>

	<div class="grid grid-2">
		<div class="card">
			<h3 class="card-title">component padding</h3>
			<div style="margin-bottom: 1rem;">
				<div
					style="background-color: var(--color-green-800); color: var(--color-cream-100); padding: var(--space-compact) var(--space-normal); margin-bottom: 0.5rem; border-radius: 4px;"
				>
					<strong>buttons:</strong> compact vertical, normal horizontal
				</div>
				<div
					style="background-color: var(--color-cream-200); padding: var(--space-comfortable); margin-bottom: 0.5rem; border-radius: 4px;"
				>
					<strong>cards:</strong> comfortable padding all around
				</div>
				<div
					style="background-color: var(--color-cream-300); padding: var(--space-loose); margin-bottom: 0.5rem; border-radius: 4px;"
				>
					<strong>sections:</strong> loose padding for content areas
				</div>
			</div>
			<p class="card-description">
				use appropriate padding based on component importance and content density.
			</p>
		</div>

		<div class="card">
			<h3 class="card-title">layout padding</h3>
			<div style="margin-bottom: 1rem;">
				<div
					style="background-color: var(--color-orange-100); padding: var(--space-comfortable); margin-bottom: 0.5rem; border-radius: 4px;"
				>
					<strong>main content:</strong> comfortable padding for readability
				</div>
				<div
					style="background-color: var(--color-green-100); padding: var(--space-compact); margin-bottom: 0.5rem; border-radius: 4px;"
				>
					<strong>navigation:</strong> compact padding for efficiency
				</div>
				<div
					style="background-color: var(--color-cream-300); padding: var(--space-spacious); margin-bottom: 0.5rem; border-radius: 4px;"
				>
					<strong>hero sections:</strong> spacious padding for impact
				</div>
			</div>
			<p class="card-description">
				layout padding creates hierarchy and guides attention through the interface.
			</p>
		</div>
	</div>
</section>

<!-- Grid and Layout Section -->
<section class="section">
	<h2 class="section-title">grid and layout</h2>

	<div class="card">
		<h3 class="card-title">grid spacing</h3>
		<p class="card-description mb-comfortable">
			our grid system uses comfortable spacing between items for optimal readability and visual
			flow.
		</p>

		<div class="grid grid-3" style="margin-bottom: 2rem;">
			<div
				style="background-color: var(--color-green-200); padding: 1rem; border-radius: 4px; text-align: center;"
			>
				grid item 1
			</div>
			<div
				style="background-color: var(--color-green-200); padding: 1rem; border-radius: 4px; text-align: center;"
			>
				grid item 2
			</div>
			<div
				style="background-color: var(--color-green-200); padding: 1rem; border-radius: 4px; text-align: center;"
			>
				grid item 3
			</div>
		</div>

		<p class="text-sm text-muted">
			grid gap: comfortable (1rem / 16px) for balanced spacing between elements
		</p>
	</div>
</section>

<!-- Usage Guidelines Section -->
<section class="section">
	<h2 class="section-title">usage guidelines</h2>

	<div class="grid grid-2">
		<div class="card">
			<h3 class="card-title">when to use tight spacing</h3>
			<ul style="margin-top: 1rem; padding-left: 1.5rem; color: var(--color-green-700);">
				<li>form labels and inputs</li>
				<li>navigation menu items</li>
				<li>button groups and toolbars</li>
				<li>data tables and dense layouts</li>
				<li>icon and text pairs</li>
			</ul>
		</div>

		<div class="card">
			<h3 class="card-title">when to use generous spacing</h3>
			<ul style="margin-top: 1rem; padding-left: 1.5rem; color: var(--color-green-700);">
				<li>between major page sections</li>
				<li>around hero content</li>
				<li>isolation of important elements</li>
				<li>call-to-action areas</li>
				<li>before footer content</li>
			</ul>
		</div>
	</div>
</section>

<!-- Code Examples Section -->
<section class="section">
	<h2 class="section-title">code examples</h2>

	<div class="card">
		<h3 class="card-title">CSS spacing utilities</h3>
		<pre class="font-mono"><code>{`/* Spacing variables */
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
}`}</code></pre>
	</div>
</section>

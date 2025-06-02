<script lang="ts">
	import { changelog, codeBlocks } from '$lib/changelog';
	
	// Get the latest changelog entry (first one)
	const latestEntry = changelog[0];
</script>

<svelte:head>
	<title>changelog - hasha dar design system</title>
	<meta name="description" content="complete changelog documenting all changes and updates to the hasha dar design system." />
</svelte:head>

<!-- Page Header -->
<header class="page-header">
	<h1 class="page-title">changelog</h1>
	<p class="page-description">
		complete record of all notable changes, improvements, and additions to the hasha dar design system. 
		following semantic versioning and keep a changelog standards.
	</p>
</header>

<!-- Version Header -->
<section class="section">
	<div class="card" style="border-left: 4px solid var(--color-orange-700);">
		<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
			<h2 class="card-title" style="font-size: 2rem; margin: 0;">
				version {latestEntry.version}
			</h2>
			<time class="text-secondary font-mono" style="font-size: 1rem;">
				{latestEntry.date}
			</time>
		</div>
		<div class="card-description">
			<strong>Initial Release</strong> - Complete design system launch with angular design language, 
			comprehensive component library, and full documentation suite.
		</div>
	</div>
</section>

<!-- Changelog Sections -->
{#each latestEntry.sections as section (section.title)}
	<section class="section">
		<h2 class="section-title">{section.title}</h2>
		
		<div class="grid grid-1">
			{#each section.items as item (item.category)}
				<div class="card">
					<h3 class="card-title">{item.category}</h3>
					<ul style="margin: 0; padding-left: 1.25rem; color: var(--color-green-700);">
						{#each item.details as detail}
							<li style="margin-bottom: 0.5rem; line-height: 1.5;">{detail}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</section>
{/each}

<!-- Technical Specifications -->
<section class="section">
	<h2 class="section-title">🎯 Design Token Specifications</h2>
	
	<div class="grid grid-2">
		<div class="card">
			<h3 class="card-title">Colour Palette</h3>
			<pre class="font-mono"><code>{codeBlocks.colors}</code></pre>
		</div>
		
		<div class="card">
			<h3 class="card-title">Spacing Scale</h3>
			<pre class="font-mono"><code>{codeBlocks.spacing}</code></pre>
		</div>
	</div>
</section>

<!-- Angular Design Elements -->
<section class="section">
	<h2 class="section-title">⚡ Angular Design Elements</h2>
	
	<div class="card">
		<h3 class="card-title">CSS Implementation</h3>
		<pre class="font-mono"><code>{codeBlocks.angular}{`

/* Usage example */
.angular-element {
  clip-path: var(--clip-corner);
  box-shadow: var(--shadow-pincushion);
  transition: all var(--transition-base);
}

.angular-element:hover {
  box-shadow: var(--shadow-pincushion-hover);
  transform: scale(0.98);
}`}</code></pre>
	</div>
</section>

<!-- Browser Support -->
<section class="section">
	<h2 class="section-title">🌍 Browser Support</h2>
	
	<div class="grid grid-2">
		<div class="card">
			<h3 class="card-title">Supported Browsers</h3>
			<ul style="margin: 0; padding-left: 1.25rem; color: var(--color-green-700);">
				<li style="margin-bottom: 0.5rem;">Chrome 90+ ✓</li>
				<li style="margin-bottom: 0.5rem;">Firefox 88+ ✓</li>
				<li style="margin-bottom: 0.5rem;">Safari 14+ ✓</li>
				<li style="margin-bottom: 0.5rem;">Edge 90+ ✓</li>
			</ul>
		</div>
		
		<div class="card">
			<h3 class="card-title">Technology Stack</h3>
			<ul style="margin: 0; padding-left: 1.25rem; color: var(--color-green-700);">
				<li style="margin-bottom: 0.5rem;">SvelteKit 2.x with TypeScript</li>
				<li style="margin-bottom: 0.5rem;">Custom CSS with design tokens</li>
				<li style="margin-bottom: 0.5rem;">Bits UI 2.4.1 for accessibility</li>
				<li style="margin-bottom: 0.5rem;">Vite with ESLint and Prettier</li>
			</ul>
		</div>
	</div>
</section>

<!-- Source of Truth Notice -->
<section class="section">
	<div class="card" style="border-left: 4px solid var(--color-green-700);">
		<h3 class="card-title">📄 Single Source of Truth</h3>
		<p class="card-description" style="margin-bottom: 1rem;">
			This changelog is generated from <code>CHANGELOG.md</code> and synchronized with 
			<code>src/lib/changelog.ts</code> to maintain consistency. When updating the changelog:
		</p>
		<ol style="margin: 0; padding-left: 1.5rem; color: var(--color-green-700);">
			<li style="margin-bottom: 0.5rem;">Update <code>CHANGELOG.md</code> with new changes</li>
			<li style="margin-bottom: 0.5rem;">Synchronize data in <code>src/lib/changelog.ts</code></li>
			<li style="margin-bottom: 0.5rem;">Commit both files to maintain consistency</li>
		</ol>
	</div>
</section>

<!-- Footer Links -->
<section class="section">
	<div class="card" style="text-align: center; padding: 2rem;">
		<h2 class="card-title" style="margin-bottom: 1rem;">related resources</h2>
		<p class="card-description" style="margin-bottom: 1.5rem;">
			explore the design system documentation and source code
		</p>
		<div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
			<a href="/" class="btn btn-primary">design system overview</a>
			<a href="/components" class="btn btn-secondary">component library</a>
			<a href="https://github.com/hashadar" target="_blank" rel="noopener" class="btn btn-accent">view source code</a>
		</div>
	</div>
</section> 
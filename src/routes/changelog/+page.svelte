<script lang="ts">
	import { PageHeader, Section, Grid, Card, CodeBlock, Button } from '$lib/components/index.js';
	import { changelog, codeBlocks } from '$lib/changelog';
	
	// Get the latest changelog entry (first one)
	const latestEntry = changelog[0];
</script>

<svelte:head>
	<title>changelog - hasha dar design system</title>
	<meta name="description" content="complete changelog documenting all changes and updates to the hasha dar design system." />
</svelte:head>

<PageHeader
	title="changelog"
	description="complete record of all notable changes, improvements, and additions to the hasha dar design system. following semantic versioning and keep a changelog standards."
/>

<!-- Version Header -->
<Section>
	<Card variant="featured" class="version-header">
		<div class="version-header-content">
			<h1 class="version-title">
				version {latestEntry.version}
			</h1>
			<time class="version-date" datetime={latestEntry.date}>
				{latestEntry.date}
			</time>
		</div>
		<p class="card-description">
			<strong>Component Library Enhancements</strong> - Comprehensive updates to the design system with new color presets, 
			improved navigation, and enhanced component guidelines.
		</p>
	</Card>
</Section>

<!-- Changelog Sections -->
{#each latestEntry.sections as section (section.title)}
	<Section>
		<h2 class="section-title">{section.title}</h2>
		
		<Grid columns={2}>
			{#each section.items as item (item.category)}
				<Card title={item.category} variant="default">
					<ul class="changelog-list">
						{#each item.details as detail}
							<li>{detail}</li>
						{/each}
					</ul>
				</Card>
			{/each}
		</Grid>
	</Section>
{/each}

<!-- Technical Specifications -->
<Section>
	<h2 class="section-title">🎯 design token specifications</h2>
	
	<Grid columns={2}>
		<Card title="colour palette" variant="default">
			<CodeBlock 
				title="colour tokens"
				code={codeBlocks.colors}
				showCopy={true}
			/>
		</Card>
		
		<Card title="spacing scale" variant="default">
			<CodeBlock 
				title="spacing tokens"
				code={codeBlocks.spacing}
				showCopy={true}
			/>
		</Card>
	</Grid>
</Section>

<!-- Angular Design Elements -->
<Section>
	<h2 class="section-title">⚡ angular design elements</h2>
	
	<Card title="CSS implementation" variant="default">
		<CodeBlock 
			title="angular design tokens"
			code={`${codeBlocks.angular}

/* Usage example */
.angular-element {
  clip-path: var(--clip-corner);
  box-shadow: var(--shadow-pincushion);
  transition: all var(--transition-base);
}

.angular-element:hover {
  box-shadow: var(--shadow-pincushion-hover);
  transform: scale(0.98);
}`}
			showCopy={true}
		/>
	</Card>
</Section>

<!-- Browser Support -->
<Section>
	<h2 class="section-title">🌍 browser support</h2>
	
	<Grid columns={2}>
		<Card title="supported browsers" variant="default">
			<ul class="support-list">
				<li>Chrome 90+ ✓</li>
				<li>Firefox 88+ ✓</li>
				<li>Safari 14+ ✓</li>
				<li>Edge 90+ ✓</li>
			</ul>
		</Card>
		
		<Card title="technology stack" variant="default">
			<ul class="support-list">
				<li>SvelteKit 2.x with TypeScript</li>
				<li>Custom CSS with design tokens</li>
				<li>Bits UI 2.4.1 for accessibility</li>
				<li>Vite with ESLint and Prettier</li>
			</ul>
		</Card>
	</Grid>
</Section>

<!-- Source of Truth Notice -->
<Section>
	<Card variant="featured" class="source-notice">
		<h2 class="card-title">📄 single source of truth</h2>
		<p class="card-description">
			This changelog is generated from <code>CHANGELOG.md</code> and synchronized with 
			<code>src/lib/changelog.ts</code> to maintain consistency. When updating the changelog:
		</p>
		<ol class="source-list">
			<li>Update <code>CHANGELOG.md</code> with new changes</li>
			<li>Synchronize data in <code>src/lib/changelog.ts</code></li>
			<li>Commit both files to maintain consistency</li>
		</ol>
	</Card>
</Section>

<!-- Footer Links -->
<Section>
	<Card variant="default" class="footer-links">
		<h2 class="card-title">related resources</h2>
		<p class="card-description">
			explore the design system documentation and source code
		</p>
		<div class="link-buttons" role="navigation" aria-label="Related resources">
			<Button variant="primary" href="/">design system overview</Button>
			<Button variant="secondary" href="/components">component library</Button>
			<a 
				href="https://github.com/hashadar" 
				target="_blank" 
				rel="noopener noreferrer" 
				class="btn btn-accent"
				aria-label="View source code on GitHub (opens in new tab)"
			>
				view source code
			</a>
		</div>
	</Card>
</Section>

<style>
	.version-header {
		border-left: var(--border-width-thick) solid var(--color-accent-600);
	}

	.version-header-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: var(--space-normal);
	}

	.version-title {
		font-size: var(--text-2xl);
		font-weight: var(--font-weight-semibold);
		margin: 0;
		color: var(--color-card-foreground);
		line-height: var(--line-height-tight);
	}

	.version-date {
		font-family: var(--font-mono);
		font-size: var(--text-base);
		color: var(--color-muted-foreground);
	}

	.changelog-list {
		margin: 0;
		padding-left: var(--space-comfortable);
		color: var(--color-card-foreground);
		list-style-type: disc;
	}

	.changelog-list li {
		margin-bottom: var(--space-tight);
		line-height: var(--line-height-relaxed);
	}

	.changelog-list li:last-child {
		margin-bottom: 0;
	}

	.support-list {
		margin: 0;
		padding-left: var(--space-comfortable);
		color: var(--color-card-foreground);
		list-style-type: none;
	}

	.support-list li {
		margin-bottom: var(--space-tight);
		display: flex;
		align-items: center;
		gap: var(--space-tight);
	}

	.support-list li:last-child {
		margin-bottom: 0;
	}

	.support-list li::before {
		content: '✓';
		color: var(--color-accent-600);
		font-weight: var(--font-weight-bold);
	}

	.source-notice {
		border-left: var(--border-width-thick) solid var(--color-primary-600);
	}

	.source-list {
		margin: var(--space-normal) 0 0;
		padding-left: var(--space-loose);
		color: var(--color-card-foreground);
		list-style-type: decimal;
	}

	.source-list li {
		margin-bottom: var(--space-tight);
		line-height: var(--line-height-relaxed);
	}

	.source-list li:last-child {
		margin-bottom: 0;
	}

	.source-list code {
		background: var(--color-muted);
		padding: var(--space-tight) var(--space-compact);
		border-radius: var(--border-radius-sm);
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		color: var(--color-card-foreground);
	}

	.footer-links {
		text-align: center;
		padding: var(--space-spacious);
	}

	.link-buttons {
		display: flex;
		gap: var(--space-normal);
		justify-content: center;
		flex-wrap: wrap;
		margin-top: var(--space-loose);
	}

	/* Ensure external link button matches other buttons */
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-compact);
		padding: var(--space-comfortable) var(--space-loose);
		border: var(--border-width-thick) solid transparent;
		border-radius: var(--border-radius-base);
		font-family: var(--font-primary);
		font-weight: var(--font-weight-semibold);
		font-size: var(--text-base);
		line-height: var(--line-height-normal);
		text-decoration: none;
		cursor: pointer;
		transition: all var(--transition-base);
		position: relative;
		overflow: hidden;
		clip-path: var(--clip-corner);
		box-shadow: var(--shadow-pincushion);
	}

	.btn:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-pincushion-hover), var(--shadow-md);
	}

	.btn:active {
		transform: translateY(0);
		box-shadow: var(--shadow-pincushion);
	}

	.btn:focus-visible {
		outline: 2px solid var(--color-ring);
		outline-offset: 2px;
	}
</style> 
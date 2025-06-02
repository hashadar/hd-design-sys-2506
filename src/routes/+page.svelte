<script lang="ts">
	// No additional imports needed for basic page
</script>

<svelte:head>
	<title>hasha dar design system - overview</title>
	<meta
		name="description"
		content="a comprehensive design system for creating elegant, accessible, and consistent user interfaces by hasha dar."
	/>
</svelte:head>

<!-- Page Header -->
<header class="page-header">
	<h1 class="page-title">hasha dar design system</h1>
	<p class="page-description">
		a comprehensive design system and methodology guide for creating elegant, accessible, and
		consistent user interfaces. built with design tokens, systematic spacing, and thoughtful
		typography for modern web experiences.
	</p>
</header>

<!-- Design Foundations Section -->
<section class="section">
	<h2 class="section-title">design foundations</h2>

	<div class="grid grid-2">
		<article class="card">
			<h3 class="card-title">typography</h3>
			<p class="card-description">
				our type system uses Cormorant for elegant headings and body text, paired with JetBrains
				Mono for code and technical content. built on a modular scale for consistent hierarchy and
				rhythm.
			</p>
			<a href="/typography" class="card-link">explore typography →</a>
		</article>

		<article class="card">
			<h3 class="card-title">colours</h3>
			<p class="card-description">
				a carefully crafted palette featuring warm cream, rich dark green, and vibrant dark orange.
				each colour has a full scale from light to dark, ensuring accessibility and visual harmony
				across all interfaces.
			</p>
			<a href="/colors" class="card-link">explore colours →</a>
		</article>

		<article class="card">
			<h3 class="card-title">spacing</h3>
			<p class="card-description">
				a systematic spacing scale ensures consistent and harmonious layouts. minimal padding and
				margins create a clean, elegant aesthetic whilst maintaining excellent readability and visual
				flow.
			</p>
			<a href="/spacing" class="card-link">explore spacing →</a>
		</article>

		<article class="card">
			<h3 class="card-title">components</h3>
			<p class="card-description">
				built with Bits UI, our components are accessible, customisable, and follow design system
				principles. each component is documented with usage examples, guidelines, and best
				practices.
			</p>
			<a href="/components" class="card-link">explore components →</a>
		</article>
	</div>
</section>

<!-- Design Principles Section -->
<section class="section">
	<h2 class="section-title">design principles</h2>

	<div class="grid grid-3">
		<div class="card">
			<h3 class="card-title">simplicity</h3>
			<p class="card-description">
				clean, minimal design with purposeful use of space. every element serves a clear function
				and contributes meaningfully to the overall user experience and interface clarity.
			</p>
		</div>

		<div class="card">
			<h3 class="card-title">consistency</h3>
			<p class="card-description">
				systematic approach to design tokens, spacing, and typography ensures consistency across all
				components and layouts. predictable patterns enhance usability and development efficiency.
			</p>
		</div>

		<div class="card">
			<h3 class="card-title">accessibility</h3>
			<p class="card-description">
				built with accessibility at its core, featuring proper contrast ratios, semantic HTML
				structure, keyboard navigation support, and screen reader compatibility for inclusive user
				experiences.
			</p>
		</div>
	</div>
</section>

<!-- Design Tokens Preview -->
<section class="section">
	<h2 class="section-title">design tokens</h2>
	<p class="text-secondary mb-comfortable">
		our design system is built on a foundation of design tokens that ensure consistency and enable
		systematic design decisions across all touchpoints.
	</p>

	<div class="grid grid-3">
		<div class="card">
			<h3 class="card-title">colour tokens</h3>
			<div style="display: flex; gap: 0.25rem; margin-bottom: 0.75rem;">
				<div
					class="color-swatch"
					style="background-color: var(--color-cream-500);"
					title="cream palette"
				></div>
				<div
					class="color-swatch"
					style="background-color: var(--color-green-800);"
					title="green palette"
				></div>
				<div
					class="color-swatch"
					style="background-color: var(--color-orange-700);"
					title="orange palette"
				></div>
			</div>
			<p class="card-description">
				cream, dark green, and dark orange palettes with semantic naming and comprehensive
				accessibility considerations for all use cases.
			</p>
		</div>

		<div class="card">
			<h3 class="card-title">spacing scale</h3>
			<div style="display: flex; align-items: end; gap: 0.125rem; margin-bottom: 0.75rem;">
				<div
					class="spacing-demo"
					style="width: 0.5rem; height: 0.25rem;"
					title="tight spacing"
				></div>
				<div
					class="spacing-demo"
					style="width: 0.5rem; height: 0.5rem;"
					title="compact spacing"
				></div>
				<div
					class="spacing-demo"
					style="width: 0.5rem; height: 0.75rem;"
					title="normal spacing"
				></div>
				<div
					class="spacing-demo"
					style="width: 0.5rem; height: 1rem;"
					title="comfortable spacing"
				></div>
				<div
					class="spacing-demo"
					style="width: 0.5rem; height: 1.5rem;"
					title="loose spacing"
				></div>
			</div>
			<p class="card-description">
				systematic spacing based on a mathematical scale for harmonious layouts and consistent
				rhythm throughout the interface design.
			</p>
		</div>

		<div class="card">
			<h3 class="card-title">typography scale</h3>
			<div style="margin-bottom: 0.75rem; line-height: 1.3;">
				<div style="font-size: 0.75rem;">small text</div>
				<div style="font-size: 1rem;">base text</div>
				<div style="font-size: 1.25rem;">large text</div>
				<div style="font-size: 1.5rem;">extra large</div>
			</div>
			<p class="card-description">
				modular typography scale using Cormorant for elegant text and JetBrains Mono for code,
				creating clear hierarchy and readability.
			</p>
		</div>
	</div>
</section>

<!-- Call to Action -->
<section class="section">
	<div class="card" style="text-align: center; padding: 2rem;">
		<h2 class="card-title" style="margin-bottom: 1rem; font-size: 1.75rem;">start building</h2>
		<p
			class="card-description"
			style="margin-bottom: 1.5rem; max-width: 32rem; margin-left: auto; margin-right: auto;"
		>
			explore the components, understand the principles, and start building 
			beautiful, consistent interfaces with the hasha dar design system.
		</p>
		<div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
			<a href="/components" class="btn btn-primary">view components</a>
			<a href="/tokens" class="btn btn-secondary">design tokens</a>
		</div>
	</div>
</section>

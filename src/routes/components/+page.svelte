<script lang="ts">
	// Component examples and guidelines
	let buttonExamples = [
		{ variant: 'primary', label: 'primary button', description: 'main call-to-action buttons' },
		{
			variant: 'secondary',
			label: 'secondary button',
			description: 'secondary actions and alternatives'
		},
		{ variant: 'accent', label: 'accent button', description: 'accent actions and highlights' }
	];
</script>

<svelte:head>
	<title>components - hasha dar design system</title>
	<meta
		name="description"
		content="comprehensive component library built with Bits UI, featuring accessible and customizable interface elements for the hasha dar design system."
	/>
</svelte:head>

<!-- Page Header -->
<header class="page-header">
	<h1 class="page-title">components</h1>
	<p class="page-description">
		our component library is built with Bits UI for accessibility and customisation, providing
		consistent patterns for all interface needs.
	</p>
</header>

<!-- Component Philosophy Section -->
<section class="section">
	<h2 class="section-title">component philosophy</h2>

	<div class="grid grid-3">
		<div class="card">
			<h3 class="card-title">accessibility first</h3>
			<p class="card-description">
				every component follows WCAG guidelines with proper ARIA labels, keyboard navigation, and
				screen reader support built-in.
			</p>
		</div>

		<div class="card">
			<h3 class="card-title">systematic design</h3>
			<p class="card-description">
				components use design tokens for colours, spacing, and typography, ensuring consistency
				across the entire interface system.
			</p>
		</div>

		<div class="card">
			<h3 class="card-title">flexible customisation</h3>
			<p class="card-description">
				headless components from Bits UI allow complete styling control whilst maintaining
				accessibility and behavioural consistency.
			</p>
		</div>
	</div>
</section>

<!-- Button Components Section -->
<section class="section">
	<h2 class="section-title">buttons</h2>
	<p class="mb-comfortable text-secondary">
		button components with clear hierarchy and consistent interaction patterns.
	</p>

	<div class="grid grid-3">
		{#each buttonExamples as button, index (button.variant)}
			<div class="card">
				<h4 class="card-title">{button.label}</h4>
				<p class="card-description mb-comfortable">{button.description}</p>
				<div style="margin-bottom: 1rem;">
					<button class="btn btn-{button.variant}">{button.label}</button>
				</div>
				<code class="text-xs">.btn .btn-{button.variant}</code>
			</div>
		{/each}
	</div>
</section>

<!-- Card Components Section -->
<section class="section">
	<h2 class="section-title">cards</h2>
	<p class="mb-comfortable text-secondary">
		content containers with consistent styling and interactive states.
	</p>

	<div class="grid grid-2">
		<div class="card">
			<h3 class="card-title">basic card</h3>
			<p class="card-description">
				standard content container with title, description, and optional actions. features subtle
				hover effects and proper spacing for optimal readability.
			</p>
			<a href="#" class="card-link">explore more →</a>
		</div>

		<div class="card">
			<h3 class="card-title">interactive card</h3>
			<p class="card-description">
				enhanced card with hover animations and visual feedback. includes gradient borders and
				smooth transitions for engaging user experience.
			</p>
			<a href="#" class="card-link">learn more →</a>
		</div>
	</div>
</section>

<!-- Navigation Components Section -->
<section class="section">
	<h2 class="section-title">navigation</h2>

	<div class="card">
		<h3 class="card-title">sidebar navigation</h3>
		<p class="card-description mb-comfortable">
			fixed sidebar with brand area, navigation menu, and footer information. includes mobile
			responsive behaviour and active state indicators.
		</p>

		<div
			style="background-color: var(--color-cream-200); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;"
		>
			<div
				style="background-color: var(--color-cream-50); padding: 0.75rem; border-radius: 6px; margin-bottom: 1rem; border-left: 3px solid var(--color-orange-700);"
			>
				<strong style="color: var(--color-green-900);">hasha dar design system</strong><br />
				<small style="color: var(--color-green-600);">design methodology & component library</small>
			</div>

			<nav style="margin-bottom: 1rem;">
				<div
					style="background-color: var(--color-green-800); color: var(--color-cream-100); padding: 0.5rem 0.75rem; border-radius: 4px; margin-bottom: 0.25rem;"
				>
					overview
				</div>
				<div style="padding: 0.5rem 0.75rem; color: var(--color-green-700);">typography</div>
				<div style="padding: 0.5rem 0.75rem; color: var(--color-green-700);">colours</div>
				<div style="padding: 0.5rem 0.75rem; color: var(--color-green-700);">spacing</div>
			</nav>

			<div
				style="font-size: 0.75rem; color: var(--color-green-500); border-top: 1px solid var(--color-cream-300); padding-top: 0.75rem;"
			>
				<strong>version 1.0.0</strong><br />
				built with Svelte & Bits UI
			</div>
		</div>

		<code class="text-xs">.nav-sidebar, .nav-brand, .nav-menu, .nav-footer</code>
	</div>
</section>

<!-- Form Components Section -->
<section class="section">
	<h2 class="section-title">form elements</h2>

	<div class="grid grid-2">
		<div class="card">
			<h3 class="card-title">input styling</h3>
			<p class="card-description mb-comfortable">
				consistent input styling with proper focus states and accessibility support.
			</p>

			<div style="margin-bottom: 1rem;">
				<label
					style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-green-800);"
				>
					email address
				</label>
				<input
					type="email"
					placeholder="enter your email"
					style="width: 100%; padding: var(--space-compact) var(--space-normal); border: 1px solid var(--color-cream-400); border-radius: var(--border-radius-md); font-family: inherit; transition: all var(--transition-fast);"
				/>
			</div>

			<div style="margin-bottom: 1rem;">
				<label
					style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-green-800);"
				>
					message
				</label>
				<textarea
					placeholder="your message here..."
					rows="3"
					style="width: 100%; padding: var(--space-compact) var(--space-normal); border: 1px solid var(--color-cream-400); border-radius: var(--border-radius-md); font-family: inherit; resize: vertical; transition: all var(--transition-fast);"
				></textarea>
			</div>
		</div>

		<div class="card">
			<h3 class="card-title">interactive elements</h3>
			<p class="card-description mb-comfortable">
				checkboxes, radio buttons, and other form controls with consistent styling.
			</p>

			<div style="margin-bottom: 1rem;">
				<label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
					<input type="checkbox" style="margin: 0;" />
					<span>subscribe to updates</span>
				</label>
			</div>

			<div style="margin-bottom: 1rem;">
				<fieldset style="border: none; padding: 0; margin: 0;">
					<legend style="font-weight: 500; margin-bottom: 0.5rem; color: var(--color-green-800);">
						preferred contact method
					</legend>
					<label
						style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem; cursor: pointer;"
					>
						<input type="radio" name="contact" value="email" style="margin: 0;" />
						<span>email</span>
					</label>
					<label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
						<input type="radio" name="contact" value="phone" style="margin: 0;" />
						<span>phone</span>
					</label>
				</fieldset>
			</div>
		</div>
	</div>
</section>

<!-- Typography Components Section -->
<section class="section">
	<h2 class="section-title">typography components</h2>

	<div class="card">
		<h3 class="card-title">text hierarchy</h3>
		<p class="card-description mb-comfortable">
			consistent typography patterns for content structure and readability.
		</p>

		<div class="typography-sample">
			<h2 style="margin-bottom: 1rem;">section heading</h2>
			<p style="margin-bottom: 1rem;">
				this is a paragraph with normal body text. it demonstrates the standard line height and
				spacing that creates comfortable reading experiences across all content areas.
			</p>
			<p style="margin-bottom: 1rem; color: var(--color-green-600);">
				this is secondary text with muted colour for supporting information and descriptions that
				complement the primary content.
			</p>
			<p>
				links within text appear in <a href="#">orange accent colour</a> and maintain proper contrast
				ratios for accessibility whilst standing out from the surrounding content.
			</p>
		</div>
	</div>
</section>

<!-- Code Examples Section -->
<section class="section">
	<h2 class="section-title">implementation guide</h2>

	<div class="card">
		<h3 class="card-title">Bits UI integration</h3>
		<pre class="font-mono"><code>{`// Import Bits UI components
import { Button, Dialog, Accordion } from 'bits-ui';

// Use with custom styling
<Button.Root class="btn btn-primary">
  click me
</Button.Root>

// Accordion example
<Accordion.Root>
  <Accordion.Item value="item-1">
    <Accordion.Trigger class="accordion-trigger">
      section title
    </Accordion.Trigger>
    <Accordion.Content class="accordion-content">
      section content here
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>`}</code></pre>
	</div>
</section>

<script lang="ts">
	import { PageHeader, Section, Grid, Card, Button, CodeBlock } from '$lib/components/index.js';
	import { siteConfig } from '$lib/stores/config.js';

	// Component examples and guidelines
	let buttonExamples = [
		{ 
			variant: 'primary', 
			label: 'primary button', 
			description: 'main call-to-action buttons',
			guidelines: {
				typography: 'font-primary, font-semibold, text-sm',
				colors: 'primary-700 to primary-600 gradient, primary-50 text',
				spacing: 'normal vertical, loose horizontal padding',
				animation: 'hover scale 0.98, active scale 0.96, transition-base'
			}
		},
		{
			variant: 'secondary',
			label: 'secondary button',
			description: 'secondary actions and alternatives',
			guidelines: {
				typography: 'font-primary, font-semibold, text-sm',
				colors: 'secondary-200 to secondary-300 gradient, foreground text',
				spacing: 'normal vertical, loose horizontal padding',
				animation: 'hover scale 0.98, active scale 0.96, transition-base'
			}
		},
		{ 
			variant: 'accent', 
			label: 'accent button', 
			description: 'accent actions and highlights',
			guidelines: {
				typography: 'font-primary, font-semibold, text-sm',
				colors: 'accent-600 to accent-500 gradient, accent-50 text',
				spacing: 'normal vertical, loose horizontal padding',
				animation: 'hover scale 0.98, active scale 0.96, transition-base'
			}
		}
	];

	let cardExamples = [
		{
			type: 'basic',
			title: 'basic card',
			description: 'standard content container with title, description, and optional actions',
			guidelines: {
				typography: {
					title: 'font-primary, font-semibold, text-lg',
					description: 'font-primary, text-sm, text-muted-foreground'
				},
				colors: {
					background: 'card background (secondary-50)',
					border: 'border color (secondary-200)',
					hover: 'secondary-100 background, primary-300 border'
				},
				spacing: {
					padding: 'loose (1.5rem)',
					gap: 'comfortable (1rem) between elements'
				},
				animation: 'hover translateY(-2px) scale(1.01), transition-base'
			}
		},
		{
			type: 'interactive',
			title: 'interactive card',
			description: 'enhanced card with hover animations and visual feedback',
			guidelines: {
				typography: {
					title: 'font-primary, font-semibold, text-lg',
					description: 'font-primary, text-sm, text-muted-foreground'
				},
				colors: {
					background: 'card background (secondary-50)',
					border: 'border color (secondary-200)',
					hover: 'secondary-100 background, accent-600 border, shadow-lg'
				},
				spacing: {
					padding: 'loose (1.5rem)',
					gap: 'comfortable (1rem) between elements'
				},
				animation: 'hover translateY(-2px) scale(1.01), gradient border animation, transition-base'
			}
		}
	];

	let navigationExamples = [
		{
			type: 'sidebar',
			title: 'sidebar navigation',
			description: 'fixed sidebar with brand area, navigation menu, and footer information',
			guidelines: {
				typography: {
					brand: 'font-primary, font-bold, text-xl',
					menu: 'font-primary, font-medium, text-sm',
					footer: 'font-primary, text-xs, text-muted-foreground'
				},
				colors: {
					background: 'secondary-50 to secondary-100 gradient',
					border: 'border color (secondary-200)',
					active: 'primary-700 to primary-600 gradient, primary-50 text',
					hover: 'muted background, foreground text'
				},
				spacing: {
					padding: 'loose (1.5rem)',
					menuGap: 'tight (0.25rem)',
					footerMargin: 'comfortable (1rem)'
				},
				animation: {
					hover: 'translateX(4px), transition-base',
					active: 'translateX(4px), shadow-md'
				}
			}
		}
	];
</script>

<svelte:head>
	<title>components - hasha dar design system</title>
	<meta
		name="description"
		content="comprehensive component library built with Bits UI, featuring accessible and customizable interface elements for the hasha dar design system."
	/>
</svelte:head>

<PageHeader
	title="components"
	description="our component library is built with Bits UI for accessibility and customisation, providing consistent patterns for all interface needs."
/>

<!-- Component Philosophy Section -->
<Section>
	<h2 class="section-title">component philosophy</h2>

	<Grid columns={3}>
		<Card title="accessibility first">
			<p class="card-description">
				every component follows WCAG guidelines with proper ARIA labels, keyboard navigation, and
				screen reader support built-in.
			</p>
		</Card>

		<Card title="systematic design">
			<p class="card-description">
				components use design tokens for colours, spacing, and typography, ensuring consistency
				across the entire interface system.
			</p>
		</Card>

		<Card title="flexible customisation">
			<p class="card-description">
				headless components from Bits UI allow complete styling control whilst maintaining
				accessibility and behavioural consistency.
			</p>
		</Card>
	</Grid>
</Section>

<!-- Button Components Section -->
<Section>
	<h2 class="section-title">buttons</h2>
	<p class="mb-comfortable text-secondary">
		button components with clear hierarchy and consistent interaction patterns.
	</p>

	<Grid columns={3}>
		{#each buttonExamples as button}
			<Card title={button.label}>
				<p class="card-description mb-comfortable">{button.description}</p>
				<div class="mb-normal">
					<Button variant={button.variant as "primary" | "secondary" | "accent" | "ghost"}>{button.label}</Button>
				</div>
				
				<div class="guidelines">
					<h4 class="text-sm font-medium mb-tight">guidelines</h4>
					<dl class="text-sm">
						<dt class="font-medium text-muted-foreground">typography</dt>
						<dd class="mb-tight">{button.guidelines.typography}</dd>
						
						<dt class="font-medium text-muted-foreground">colors</dt>
						<dd class="mb-tight">{button.guidelines.colors}</dd>
						
						<dt class="font-medium text-muted-foreground">spacing</dt>
						<dd class="mb-tight">{button.guidelines.spacing}</dd>
						
						<dt class="font-medium text-muted-foreground">animation</dt>
						<dd>{button.guidelines.animation}</dd>
					</dl>
				</div>
			</Card>
		{/each}
	</Grid>
</Section>

<!-- Card Components Section -->
<Section>
	<h2 class="section-title">cards</h2>
	<p class="mb-comfortable text-secondary">
		content containers with consistent styling and interactive states.
	</p>

	<Grid columns={2}>
		{#each cardExamples as card}
			<Card title={card.title} variant={card.type === 'interactive' ? 'featured' : 'default'}>
				<p class="card-description mb-comfortable">{card.description}</p>
				
				<div class="guidelines">
					<h4 class="text-sm font-medium mb-tight">guidelines</h4>
					<dl class="text-sm">
						<dt class="font-medium text-muted-foreground">typography</dt>
						<dd class="mb-tight">
							<strong>title:</strong> {card.guidelines.typography.title}<br>
							<strong>description:</strong> {card.guidelines.typography.description}
						</dd>
						
						<dt class="font-medium text-muted-foreground">colors</dt>
						<dd class="mb-tight">
							<strong>background:</strong> {card.guidelines.colors.background}<br>
							<strong>border:</strong> {card.guidelines.colors.border}<br>
							<strong>hover:</strong> {card.guidelines.colors.hover}
						</dd>
						
						<dt class="font-medium text-muted-foreground">spacing</dt>
						<dd class="mb-tight">
							<strong>padding:</strong> {card.guidelines.spacing.padding}<br>
							<strong>gap:</strong> {card.guidelines.spacing.gap}
						</dd>
						
						<dt class="font-medium text-muted-foreground">animation</dt>
						<dd>{card.guidelines.animation}</dd>
					</dl>
				</div>
			</Card>
		{/each}
	</Grid>
</Section>

<!-- Navigation Components Section -->
<Section>
	<h2 class="section-title">navigation</h2>
	<p class="mb-comfortable text-secondary">
		navigation components with consistent styling and interactive states.
	</p>

	{#each navigationExamples as nav}
		<Card title={nav.title}>
			<p class="card-description mb-comfortable">{nav.description}</p>
			
			<div class="nav-preview mb-normal">
				<div class="nav-brand">
					<h3>hasha dar design system</h3>
					<p>design methodology & component library</p>
				</div>

				<nav class="nav-menu">
					<a href="#" class="nav-link active">overview</a>
					<a href="#" class="nav-link">typography</a>
					<a href="#" class="nav-link">colours</a>
					<a href="#" class="nav-link">spacing</a>
				</nav>

				<div class="nav-footer">
					<p><strong>version 1.0.0</strong></p>
					<p>built with Svelte & Bits UI</p>
				</div>
			</div>
			
			<div class="guidelines">
				<h4 class="text-sm font-medium mb-tight">guidelines</h4>
				<dl class="text-sm">
					<dt class="font-medium text-muted-foreground">typography</dt>
					<dd class="mb-tight">
						<strong>brand:</strong> {nav.guidelines.typography.brand}<br>
						<strong>menu:</strong> {nav.guidelines.typography.menu}<br>
						<strong>footer:</strong> {nav.guidelines.typography.footer}
					</dd>
					
					<dt class="font-medium text-muted-foreground">colors</dt>
					<dd class="mb-tight">
						<strong>background:</strong> {nav.guidelines.colors.background}<br>
						<strong>border:</strong> {nav.guidelines.colors.border}<br>
						<strong>active:</strong> {nav.guidelines.colors.active}<br>
						<strong>hover:</strong> {nav.guidelines.colors.hover}
					</dd>
					
					<dt class="font-medium text-muted-foreground">spacing</dt>
					<dd class="mb-tight">
						<strong>padding:</strong> {nav.guidelines.spacing.padding}<br>
						<strong>menu gap:</strong> {nav.guidelines.spacing.menuGap}<br>
						<strong>footer margin:</strong> {nav.guidelines.spacing.footerMargin}
					</dd>
					
					<dt class="font-medium text-muted-foreground">animation</dt>
					<dd>
						<strong>hover:</strong> {nav.guidelines.animation.hover}<br>
						<strong>active:</strong> {nav.guidelines.animation.active}
					</dd>
				</dl>
			</div>
		</Card>
	{/each}
</Section>

<!-- Code Examples Section -->
<Section>
	<h2 class="section-title">implementation guide</h2>

	<Card title="Bits UI integration">
		<CodeBlock 
			title="component usage"
			code={`// Import Bits UI components
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
</Accordion.Root>`}
			showCopy={true}
		/>
	</Card>
</Section>

<style>
	.guidelines {
		background-color: var(--color-muted);
		padding: var(--space-normal);
		border-radius: var(--border-radius-base);
		border: 1px solid var(--color-border);
	}

	.nav-preview {
		background-color: var(--color-secondary-50);
		padding: var(--space-loose);
		border-radius: var(--border-radius-base);
		border: 1px solid var(--color-border);
		display: flex;
		flex-direction: column;
		gap: var(--space-comfortable);
	}

	.nav-brand h3 {
		color: var(--color-foreground);
		font-size: 1.25rem;
		font-weight: 700;
		margin-bottom: var(--space-tight);
	}

	.nav-brand p {
		color: var(--color-muted-foreground);
		font-size: 0.875rem;
	}

	.nav-menu {
		display: flex;
		flex-direction: column;
		gap: var(--space-tight);
	}

	.nav-link {
		display: block;
		padding: var(--space-compact) var(--space-normal);
		color: var(--color-muted-foreground);
		border-radius: var(--border-radius-base);
		transition: all var(--transition-base);
		font-weight: 500;
		position: relative;
		overflow: hidden;
		border-left: 3px solid transparent;
	}

	.nav-link:hover {
		background-color: var(--color-muted);
		color: var(--color-foreground);
		transform: translateX(4px);
		box-shadow: var(--shadow-sm);
		border-left-color: var(--color-accent-600);
	}

	.nav-link.active {
		background: linear-gradient(135deg, var(--color-primary-700), var(--color-primary-600));
		color: var(--color-primary-50);
		transform: translateX(4px);
		box-shadow: var(--shadow-md);
		border-left-color: var(--color-accent-500);
		clip-path: polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 0 100%);
	}

	.nav-footer {
		margin-top: auto;
		padding-top: var(--space-comfortable);
		border-top: 1px solid var(--color-border);
		font-size: 0.75rem;
		color: var(--color-muted-foreground);
		line-height: 1.4;
	}

	.nav-footer p {
		margin-bottom: var(--space-tight);
		color: inherit;
	}
</style>

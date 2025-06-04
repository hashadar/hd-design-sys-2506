<script lang="ts">
	import { PageHeader, Section, Grid, Card, ColorSwatch, SpacingDemo, Hero, Button } from '$lib/components/index.js';
</script>

<svelte:head>
	<title>hasha dar design system</title>
	<meta
		name="description"
		content="minimal, elegant design system featuring cream, green, and orange colour palettes with comprehensive components, typography, and spacing guidelines."
	/>
</svelte:head>

<Hero 
	title="hasha dar design system"
	subtitle="design methodology & component library"
	description="minimal, elegant design system featuring harmonious colour palettes, systematic spacing, and thoughtfully crafted components for modern web interfaces."
	cta={{
		text: "explore components",
		href: "/components",
		variant: "primary"
	}}
	layout="left"
/>

<!-- Design Principles Section -->
<Section>
	<PageHeader 
		title="design principles"
		description="our design philosophy centres on simplicity, accessibility, and natural harmony to create interfaces that feel both elegant and functional."
	/>

	<Grid columns={3}>
		<Card variant="default" title="minimal elegance">
			<p class="text-muted-foreground">
				clean, uncluttered interfaces that prioritise content and user experience over decorative
				elements, whilst maintaining visual interest through thoughtful use of colour and spacing.
			</p>
		</Card>

		<Card variant="default" title="accessibility first">
			<p class="text-muted-foreground">
				designed with inclusivity at its core, ensuring all users can access and navigate our
				interfaces regardless of ability, device, or context of use.
			</p>
		</Card>

		<Card variant="default" title="systematic approach">
			<p class="text-muted-foreground">
				consistent design tokens, component patterns, and naming conventions create a cohesive
				system that scales effortlessly across projects and teams.
			</p>
		</Card>
	</Grid>
</Section>

<!-- Design Tokens Section -->
<Section>
	<PageHeader 
		title="design tokens"
		description="our design system is built on a foundation of design tokens that ensure consistency and enable systematic design decisions across all touchpoints."
	/>

	<Grid columns={3}>
		<Card variant="default" title="colour tokens">
			<div class="color-swatches">
				<ColorSwatch 
					color="var(--color-cream-500)"
					name="cream palette"
					size="md"
				/>
				<ColorSwatch 
					color="var(--color-green-800)"
					name="green palette"
					size="md"
				/>
				<ColorSwatch 
					color="var(--color-orange-700)"
					name="orange palette"
					size="md"
				/>
			</div>
			<p class="text-muted-foreground">
				cream, dark green, and dark orange palettes with semantic naming and comprehensive
				accessibility considerations for all use cases.
			</p>
		</Card>

		<Card variant="default" title="spacing scale">
			<div class="spacing-demo">
				<SpacingDemo size="0.25rem" showLabel={false} orientation="vertical" />
				<SpacingDemo size="0.5rem" showLabel={false} orientation="vertical" />
				<SpacingDemo size="0.75rem" showLabel={false} orientation="vertical" />
				<SpacingDemo size="1rem" showLabel={false} orientation="vertical" />
				<SpacingDemo size="1.5rem" showLabel={false} orientation="vertical" />
			</div>
			<p class="text-muted-foreground">
				systematic spacing based on a mathematical scale for harmonious layouts and consistent
				rhythm throughout the interface design.
			</p>
		</Card>

		<Card variant="default" title="typography system">
			<div class="typography-preview">
				<div class="text-2xl font-primary mb-tight">Cormorant</div>
				<div class="text-sm font-mono">JetBrains Mono</div>
			</div>
			<p class="text-muted-foreground">
				elegant serif typography paired with technical monospace fonts, creating hierarchy and
				personality whilst maintaining excellent readability across all contexts.
			</p>
		</Card>
	</Grid>
</Section>

<!-- Component Showcase Section -->
<Section>
	<PageHeader 
		title="component library"
		description="our component library provides consistent, accessible, and flexible building blocks for creating modern web interfaces with minimal effort."
	/>

	<Grid columns={2}>
		<Card variant="default" title="interface components">
			<div class="component-preview">
				<Button variant="primary" class="mr-compact">Primary</Button>
				<Button variant="secondary" class="mr-compact">Secondary</Button>
				<Button variant="accent">Accent</Button>
			</div>
			<p class="text-muted-foreground">
				buttons, cards, forms, and navigation elements built with accessibility in mind and designed
				to work seamlessly together across different contexts.
			</p>
		</Card>

		<Card variant="default" title="layout system">
			<div class="grid-preview">
				<div class="grid-demo-item"></div>
				<div class="grid-demo-item"></div>
				<div class="grid-demo-item"></div>
			</div>
			<p class="text-muted-foreground">
				flexible grid systems, containers, and spacing utilities that adapt to different screen
				sizes whilst maintaining visual consistency and optimal content flow.
			</p>
		</Card>
	</Grid>

	<div class="cta-container">
		<Button 
			variant="primary" 
			size="lg"
			href="/components"
		>
			explore all components
		</Button>
	</div>
</Section>

<!-- Getting Started Section -->
<Section>
	<PageHeader 
		title="getting started"
		description="start exploring our design system with these key resources"
	/>

	<Grid columns={4}>
		<Card variant="default" title="colours" href="/colors">
			<ColorSwatch 
				color="var(--color-green-500)"
				size="lg"
				class="mb-normal"
			/>
			<p class="text-muted-foreground">explore our carefully crafted colour palettes and accessibility guidelines.</p>
		</Card>

		<Card variant="default" title="typography" href="/typography">
			<div class="text-2xl font-primary mb-normal">Aa</div>
			<p class="text-muted-foreground">discover our typography system and text styling conventions.</p>
		</Card>

		<Card variant="default" title="spacing" href="/spacing">
			<SpacingDemo size="1.5rem" showLabel={false} class="mb-normal" />
			<p class="text-muted-foreground">learn about our systematic approach to spacing and layout rhythm.</p>
		</Card>

		<Card variant="default" title="components" href="/components">
			<Button variant="primary" size="sm" class="mb-normal">Button</Button>
			<p class="text-muted-foreground">browse our complete library of accessible, reusable interface components.</p>
		</Card>
	</Grid>
</Section>

<style>
	.color-swatches {
		display: flex;
		gap: var(--space-compact);
		margin-bottom: var(--space-normal);
	}

	.spacing-demo {
		display: flex;
		align-items: end;
		gap: var(--space-tight);
		margin-bottom: var(--space-normal);
	}

	.typography-preview {
		margin-bottom: var(--space-normal);
	}

	.component-preview {
		margin-bottom: var(--space-normal);
	}

	.grid-preview {
		display: flex;
		gap: var(--space-compact);
		margin-bottom: var(--space-normal);
	}

	.grid-demo-item {
		flex: 1;
		height: var(--space-spacious);
		background: var(--color-primary-200);
		border-radius: var(--border-radius-sm);
	}

	.cta-container {
		text-align: center;
		margin-top: var(--space-spacious);
	}

	.mb-normal {
		margin-bottom: var(--space-normal);
	}

	.mb-tight {
		margin-bottom: var(--space-tight);
	}

	.text-muted-foreground {
		color: var(--color-muted-foreground);
	}
</style>

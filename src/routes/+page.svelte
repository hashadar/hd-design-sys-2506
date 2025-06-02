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
	<h2 class="section-title">design principles</h2>
	<p class="text-secondary mb-comfortable">
		our design philosophy centres on simplicity, accessibility, and natural harmony to create
		interfaces that feel both elegant and functional.
	</p>

	<Grid columns={3}>
		<Card title="minimal elegance">
			<p>
				clean, uncluttered interfaces that prioritise content and user experience over decorative
				elements, whilst maintaining visual interest through thoughtful use of colour and spacing.
			</p>
		</Card>

		<Card title="accessibility first">
			<p>
				designed with inclusivity at its core, ensuring all users can access and navigate our
				interfaces regardless of ability, device, or context of use.
			</p>
		</Card>

		<Card title="systematic approach">
			<p>
				consistent design tokens, component patterns, and naming conventions create a cohesive
				system that scales effortlessly across projects and teams.
			</p>
		</Card>
	</Grid>
</Section>

<!-- Design Tokens Section -->
<Section>
	<h2 class="section-title">design tokens</h2>
	<p class="text-secondary mb-comfortable">
		our design system is built on a foundation of design tokens that ensure consistency and enable
		systematic design decisions across all touchpoints.
	</p>

	<Grid columns={3}>
		<Card title="colour tokens">
			<div style="display: flex; gap: 0.25rem; margin-bottom: 0.75rem;">
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
			<p>
				cream, dark green, and dark orange palettes with semantic naming and comprehensive
				accessibility considerations for all use cases.
			</p>
		</Card>

		<Card title="spacing scale">
			<div style="display: flex; align-items: end; gap: 0.125rem; margin-bottom: 0.75rem;">
				<SpacingDemo size="0.25rem" showLabel={false} orientation="vertical" />
				<SpacingDemo size="0.5rem" showLabel={false} orientation="vertical" />
				<SpacingDemo size="0.75rem" showLabel={false} orientation="vertical" />
				<SpacingDemo size="1rem" showLabel={false} orientation="vertical" />
				<SpacingDemo size="1.5rem" showLabel={false} orientation="vertical" />
			</div>
			<p>
				systematic spacing based on a mathematical scale for harmonious layouts and consistent
				rhythm throughout the interface design.
			</p>
		</Card>

		<Card title="typography system">
			<div style="margin-bottom: 0.75rem;">
				<div class="text-2xl font-primary mb-tight">Cormorant</div>
				<div class="text-sm font-mono">JetBrains Mono</div>
			</div>
			<p>
				elegant serif typography paired with technical monospace fonts, creating hierarchy and
				personality whilst maintaining excellent readability across all contexts.
			</p>
		</Card>
	</Grid>
</Section>

<!-- Component Showcase Section -->
<Section>
	<h2 class="section-title">component library</h2>
	<p class="text-secondary mb-comfortable">
		our component library provides consistent, accessible, and flexible building blocks for creating
		modern web interfaces with minimal effort.
	</p>

	<Grid columns={2}>
		<Card title="interface components">
			<div class="mb-comfortable">
				<Button variant="primary" class="mr-compact">Primary</Button>
				<Button variant="secondary" class="mr-compact">Secondary</Button>
				<Button variant="accent">Accent</Button>
			</div>
			<p>
				buttons, cards, forms, and navigation elements built with accessibility in mind and designed
				to work seamlessly together across different contexts.
			</p>
		</Card>

		<Card title="layout system">
			<div class="mb-comfortable">
				<div class="grid-demo-preview">
					<div class="grid-demo-item"></div>
					<div class="grid-demo-item"></div>
					<div class="grid-demo-item"></div>
				</div>
			</div>
			<p>
				flexible grid systems, containers, and spacing utilities that adapt to different screen
				sizes whilst maintaining visual consistency and optimal content flow.
			</p>
		</Card>
	</Grid>

	<div style="text-align: center; margin-top: var(--space-spacious);">
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
	<h2 class="section-title">getting started</h2>

	<Grid columns={4}>
		<Card title="colours" href="/colors">
			<ColorSwatch 
				color="var(--color-green-500)"
				size="lg"
				class="mb-normal"
			/>
			<p>explore our carefully crafted colour palettes and accessibility guidelines.</p>
		</Card>

		<Card title="typography" href="/typography">
			<div class="text-2xl font-primary mb-normal">Aa</div>
			<p>discover our typography system and text styling conventions.</p>
		</Card>

		<Card title="spacing" href="/spacing">
			<SpacingDemo size="1.5rem" showLabel={false} class="mb-normal" />
			<p>learn about our systematic approach to spacing and layout rhythm.</p>
		</Card>

		<Card title="components" href="/components">
			<Button variant="primary" size="sm" class="mb-normal">Button</Button>
			<p>browse our complete library of accessible, reusable interface components.</p>
		</Card>
	</Grid>
</Section>

<style>
	.grid-demo-preview {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.grid-demo-item {
		flex: 1;
		height: 2rem;
		background: var(--color-primary-200);
		border-radius: var(--border-radius-sm);
	}

	.mr-compact {
		margin-right: var(--space-compact);
	}
</style>

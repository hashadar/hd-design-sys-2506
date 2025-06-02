<script lang="ts">
	import Button from './Button.svelte';
	
	interface $$Props {
		title: string;
		subtitle?: string;
		description?: string;
		cta?: {
			text: string;
			href: string;
			variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
		};
		layout?: 'center' | 'left' | 'split';
		backgroundImage?: string;
		class?: string;
	}

	export let title: $$Props['title'];
	export let subtitle: $$Props['subtitle'] = undefined;
	export let description: $$Props['description'] = undefined;
	export let cta: $$Props['cta'] = undefined;
	export let layout: $$Props['layout'] = 'left';
	export let backgroundImage: $$Props['backgroundImage'] = undefined;
	let className: $$Props['class'] = '';
	export { className as class };

	$: layoutClass = `hero-${layout}`;
	$: componentClasses = [
		'hero',
		layoutClass,
		className
	].filter(Boolean).join(' ');

	$: heroStyle = backgroundImage ? `background-image: url(${backgroundImage});` : '';
</script>

<section 
	class={componentClasses} 
	style={heroStyle}
	{...$$restProps}
>
	<div class="hero-content">
		<div class="hero-text">
			{#if subtitle}
				<p class="hero-subtitle">{subtitle}</p>
			{/if}
			
			<h1 class="hero-title">{title}</h1>
			
			{#if description}
				<p class="hero-description">{description}</p>
			{/if}
		</div>

		{#if cta}
			<div class="hero-actions">
				<Button 
					variant={cta.variant || 'primary'}
					size="lg"
					href={cta.href}
				>
					{cta.text}
				</Button>
			</div>
		{/if}

		{#if $$slots.default}
			<div class="hero-content-slot">
				<slot />
			</div>
		{/if}
	</div>
</section>

<style>
	.hero {
		padding: var(--space-generous) 0;
		background-color: var(--color-background);
		position: relative;
		overflow: hidden;
	}

	.hero-content {
		max-width: var(--content-max-width);
		margin: 0 auto;
		padding: 0 var(--space-comfortable);
		position: relative;
		z-index: 2;
	}

	.hero-text {
		margin-bottom: var(--space-loose);
	}

	.hero-subtitle {
		font-size: 1.125rem;
		color: var(--color-primary-600);
		margin: 0 0 var(--space-compact) 0;
		font-weight: 500;
	}

	.hero-title {
		font-size: 3.5rem;
		font-weight: 700;
		line-height: 1.1;
		margin: 0 0 var(--space-comfortable) 0;
		color: var(--color-foreground);
		background: linear-gradient(135deg, var(--color-primary-700), var(--color-accent-600));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.hero-description {
		font-size: 1.25rem;
		line-height: 1.6;
		color: var(--color-foreground);
		margin: 0;
		max-width: 48rem;
	}

	.hero-actions {
		margin-bottom: var(--space-comfortable);
	}

	.hero-content-slot {
		margin-top: var(--space-comfortable);
	}

	/* Layout variants */
	.hero-center .hero-content {
		text-align: center;
	}

	.hero-center .hero-description {
		margin: 0 auto;
	}

	.hero-left .hero-content {
		text-align: left;
	}

	.hero-split {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-generous);
		align-items: center;
	}

	/* Background image support */
	.hero[style*="background-image"] {
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	.hero[style*="background-image"]::before {
		content: '';
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.3);
		z-index: 1;
	}

	.hero[style*="background-image"] .hero-title,
	.hero[style*="background-image"] .hero-subtitle,
	.hero[style*="background-image"] .hero-description {
		color: white;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
	}

	/* Responsive design */
	@media (max-width: 768px) {
		.hero-title {
			font-size: 2.5rem;
		}

		.hero-description {
			font-size: 1.125rem;
		}

		.hero-split {
			grid-template-columns: 1fr;
			text-align: center;
		}
	}
</style> 
<script lang="ts">
	import type { CardProps } from '$lib/types/index.js';

	interface $$Props extends CardProps {
		children?: any;
	}

	export let title: CardProps['title'] = undefined;
	export let description: CardProps['description'] = undefined;
	export let href: CardProps['href'] = undefined;
	export let variant: CardProps['variant'] = 'default';
	let className: CardProps['class'] = '';
	export { className as class };

	$: componentClasses = [
		'card',
		`card-${variant}`,
		href && 'card-interactive',
		className
	].filter(Boolean).join(' ');

	$: tag = href ? 'a' : 'div';
	$: elementProps = href 
		? { href, class: componentClasses }
		: { class: componentClasses };
</script>

<svelte:element
	this={tag}
	{...elementProps}
	{...$$restProps}
>
	{#if title || description}
		<div class="card-header">
			{#if title}
				<h3 class="card-title">{title}</h3>
			{/if}
			{#if description}
				<p class="card-description">{description}</p>
			{/if}
		</div>
	{/if}
	
	<div class="card-content">
		<slot />
	</div>
	
	{#if $$slots.footer}
		<div class="card-footer">
			<slot name="footer" />
		</div>
	{/if}
</svelte:element>

<style>
	.card {
		background: var(--color-card);
		border: var(--border-width) solid var(--color-border);
		border-radius: var(--border-radius-lg);
		padding: var(--space-loose);
		transition: all var(--transition-base);
		position: relative;
		overflow: hidden;
		
		/* Angular design elements */
		clip-path: var(--clip-corner);
		box-shadow: var(--shadow-sm);
	}

	.card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: linear-gradient(90deg, 
			var(--color-primary-500), 
			var(--color-accent-500), 
			var(--color-primary-500)
		);
		transform: scaleX(0);
		transition: transform var(--transition-base);
	}

	.card:hover::before {
		transform: scaleX(1);
	}

	.card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
		border-color: var(--color-primary-300);
	}

	/* Interactive cards (links) */
	.card-interactive {
		cursor: pointer;
		text-decoration: none;
		color: inherit;
	}

	.card-interactive:focus-visible {
		outline: 2px solid var(--color-ring);
		outline-offset: 2px;
	}

	/* Card sections */
	.card-header {
		margin-bottom: var(--space-normal);
	}

	.card-title {
		font-family: var(--font-primary);
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--color-card-foreground);
		margin: 0 0 var(--space-tight) 0;
		line-height: 1.3;
	}

	.card-description {
		font-size: 0.875rem;
		line-height: 1.6;
		color: var(--color-primary-600);
		margin: 0;
	}

	.card-content {
		color: var(--color-card-foreground);
	}

	.card-footer {
		margin-top: var(--space-normal);
		padding-top: var(--space-normal);
		border-top: var(--border-width) solid var(--color-border);
	}

	/* Variants */
	.card-featured {
		border-color: var(--color-primary-300);
		background: linear-gradient(135deg, 
			var(--color-card) 0%, 
			var(--color-primary-50) 100%
		);
	}

	.card-featured::before {
		height: 3px;
		background: var(--color-primary-500);
		transform: scaleX(1);
	}

	.card-minimal {
		border: none;
		background: transparent;
		box-shadow: none;
		clip-path: none;
		padding: var(--space-normal);
	}

	.card-minimal:hover {
		background: var(--color-muted);
		transform: none;
		box-shadow: none;
	}

	.card-minimal::before {
		display: none;
	}
</style> 
<script lang="ts">
	import type { ButtonProps } from '$lib/types/index.js';
	import { createEventDispatcher } from 'svelte';

	interface $$Props extends ButtonProps {
		children?: any;
	}

	export let variant: ButtonProps['variant'] = 'primary';
	export let size: ButtonProps['size'] = 'md';
	export let disabled: ButtonProps['disabled'] = false;
	export let href: ButtonProps['href'] = undefined;
	export let type: ButtonProps['type'] = 'button';
	let className: ButtonProps['class'] = '';
	export { className as class };

	const dispatch = createEventDispatcher<{
		click: MouseEvent;
	}>();

	function handleClick(event: MouseEvent) {
		if (disabled) {
			event.preventDefault();
			return;
		}
		dispatch('click', event);
	}

	$: componentClasses = [
		'btn',
		`btn-${variant}`,
		`btn-${size}`,
		disabled && 'btn-disabled',
		className
	].filter(Boolean).join(' ');

	$: tag = href ? 'a' : 'button';
	$: elementProps = href 
		? { href, class: componentClasses }
		: { disabled, type, class: componentClasses };
</script>

<svelte:element
	this={tag}
	{...elementProps}
	on:click={handleClick}
	{...$$restProps}
>
	<slot />
</svelte:element>

<style>
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: var(--space-comfortable) var(--space-loose);
		border: var(--border-width) solid transparent;
		border-radius: var(--border-radius-base);
		font-family: var(--font-primary);
		font-weight: 500;
		font-size: 1rem;
		line-height: 1.5;
		text-decoration: none;
		cursor: pointer;
		transition: all var(--transition-base);
		position: relative;
		overflow: hidden;
		
		/* Angular design elements */
		clip-path: var(--clip-corner);
		box-shadow: var(--shadow-pincushion);
	}

	.btn::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, 
			transparent, 
			rgba(255, 255, 255, 0.2), 
			transparent
		);
		transition: left var(--transition-base);
	}

	.btn:hover::before {
		left: 100%;
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

	/* Size variants */
	.btn-sm {
		padding: var(--space-compact) var(--space-normal);
		font-size: 0.875rem;
	}

	.btn-lg {
		padding: var(--space-loose) var(--space-spacious);
		font-size: 1.125rem;
	}

	/* Color variants */
	.btn-primary {
		background-color: var(--color-primary-600);
		color: var(--color-primary-50);
		border-color: var(--color-primary-700);
	}

	.btn-primary:hover {
		background-color: var(--color-primary-700);
		border-color: var(--color-primary-800);
	}

	.btn-secondary {
		background-color: var(--color-secondary-200);
		color: var(--color-neutral-800);
		border-color: var(--color-secondary-300);
	}

	.btn-secondary:hover {
		background-color: var(--color-secondary-300);
		border-color: var(--color-secondary-400);
	}

	.btn-accent {
		background-color: var(--color-accent-600);
		color: var(--color-accent-50);
		border-color: var(--color-accent-700);
	}

	.btn-accent:hover {
		background-color: var(--color-accent-700);
		border-color: var(--color-accent-800);
	}

	.btn-ghost {
		background-color: transparent;
		color: var(--color-primary-600);
		border-color: var(--color-primary-600);
	}

	.btn-ghost:hover {
		background-color: var(--color-primary-50);
		color: var(--color-primary-700);
	}

	.btn-disabled {
		opacity: 0.5;
		cursor: not-allowed;
		pointer-events: none;
	}

	/* Remove the clip-path override for links to maintain consistency */
	/* a.btn {
		clip-path: none;
	} */
</style> 
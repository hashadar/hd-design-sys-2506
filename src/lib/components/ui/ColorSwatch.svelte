<script lang="ts">
	interface $$Props {
		color: string;
		name?: string;
		size?: 'sm' | 'md' | 'lg';
		showLabel?: boolean;
		showValue?: boolean;
		usage?: string;
		class?: string;
	}

	export let color: $$Props['color'];
	export let name: $$Props['name'] = undefined;
	export let size: $$Props['size'] = 'md';
	export let showLabel: $$Props['showLabel'] = false;
	export let showValue: $$Props['showValue'] = false;
	export let usage: $$Props['usage'] = undefined;
	let className: $$Props['class'] = '';
	export { className as class };

	$: sizeClass = `color-swatch-${size}`;
	$: componentClasses = [
		'color-swatch',
		sizeClass,
		className
	].filter(Boolean).join(' ');

	$: title = name ? `${name}: ${color}` : color;
</script>

<div class="color-swatch-container">
	<div
		class={componentClasses}
		style="background-color: {color};"
		{title}
		{...$$restProps}
	></div>
	
	{#if showLabel && name}
		<h4 class="color-swatch-label font-mono text-sm">{name}</h4>
	{/if}
	
	{#if showValue}
		<p class="color-swatch-value font-mono text-xs">{color}</p>
	{/if}
	
	{#if usage}
		<p class="color-swatch-usage text-xs">{usage}</p>
	{/if}
</div>

<style>
	.color-swatch-container {
		text-align: center;
	}

	.color-swatch {
		border-radius: var(--border-radius-base);
		border: var(--border-width-thick) solid var(--color-border);
		transition: all var(--transition-base);
		cursor: pointer;
		position: relative;
		overflow: hidden;
		box-shadow: var(--shadow-base);
		clip-path: var(--clip-corner);
		margin-bottom: var(--space-compact);
	}

	.color-swatch::after {
		content: '';
		position: absolute;
		inset: 0;
		box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
	}

	.color-swatch:hover {
		transform: scale(1.08) rotate(2deg);
		box-shadow: var(--shadow-lg);
		border-color: var(--color-accent-600);
	}

	/* Size variants */
	.color-swatch-sm {
		width: 2rem;
		height: 2rem;
	}

	.color-swatch-md {
		width: 3rem;
		height: 3rem;
	}

	.color-swatch-lg {
		width: 100%;
		height: 4rem;
	}

	.color-swatch-label {
		margin: 0 0 var(--space-tight) 0;
		color: var(--color-card-foreground);
	}

	.color-swatch-value {
		margin: 0 0 var(--space-tight) 0;
		color: var(--color-primary-600);
	}

	.color-swatch-usage {
		margin: 0;
		color: var(--color-primary-600);
		line-height: 1.4;
	}
</style> 
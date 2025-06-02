<script lang="ts">
	interface $$Props {
		size: string;
		name?: string;
		pixels?: string;
		usage?: string;
		orientation?: 'horizontal' | 'vertical';
		showLabel?: boolean;
		class?: string;
	}

	export let size: $$Props['size'];
	export let name: $$Props['name'] = undefined;
	export let pixels: $$Props['pixels'] = undefined;
	export let usage: $$Props['usage'] = undefined;
	export let orientation: $$Props['orientation'] = 'horizontal';
	export let showLabel: $$Props['showLabel'] = true;
	let className: $$Props['class'] = '';
	export { className as class };

	$: componentClasses = [
		'spacing-demo',
		`spacing-demo-${orientation}`,
		className
	].filter(Boolean).join(' ');

	$: demoStyle = orientation === 'horizontal' 
		? `width: ${size}; height: 1rem;`
		: `width: 1rem; height: ${size};`;

	$: title = name ? `${name}: ${size}` : size;
</script>

<div class="spacing-demo-container">
	<div class="spacing-demo-visual">
		<div
			class={componentClasses}
			style={demoStyle}
			{title}
			{...$$restProps}
		></div>
		
		{#if showLabel}
			<div class="spacing-demo-info">
				{#if name}
					<h4 class="spacing-demo-name text-sm font-medium">space-{name}</h4>
				{/if}
				<p class="spacing-demo-size font-mono text-xs">{size}</p>
				{#if pixels}
					<p class="spacing-demo-pixels font-mono text-xs">({pixels})</p>
				{/if}
				{#if usage}
					<p class="spacing-demo-usage text-sm">{usage}</p>
				{/if}
			</div>
		{/if}
	</div>
</div>

<style>
	.spacing-demo-container {
		display: flex;
		align-items: center;
		width: 100%;
	}

	.spacing-demo-visual {
		display: flex;
		align-items: center;
		gap: var(--space-normal);
		width: 100%;
	}

	.spacing-demo {
		background-color: var(--color-primary-600);
		border-radius: var(--border-radius-base);
		transition: all var(--transition-base);
		position: relative;
		clip-path: polygon(0 0, calc(100% - 2px) 0, 100% 2px, 100% 100%, 2px 100%, 0 calc(100% - 2px));
		cursor: pointer;
	}

	.spacing-demo:hover {
		background-color: var(--color-accent-600);
		transform: scale(1.05);
		box-shadow: var(--shadow-sm);
	}

	.spacing-demo-vertical {
		clip-path: polygon(0 0, 100% 0, 100% calc(100% - 2px), calc(100% - 2px) 100%, 0 100%, 0 2px);
	}

	.spacing-demo-info {
		flex: 1;
		min-width: 0;
	}

	.spacing-demo-name {
		margin: 0 0 var(--space-tight) 0;
		color: var(--color-card-foreground);
	}

	.spacing-demo-size {
		margin: 0;
		color: var(--color-accent-600);
	}

	.spacing-demo-pixels {
		margin: 0;
		color: var(--color-primary-600);
	}

	.spacing-demo-usage {
		margin: var(--space-tight) 0 0 0;
		color: var(--color-primary-600);
		line-height: 1.4;
	}
</style> 
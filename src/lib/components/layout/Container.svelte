<script lang="ts">
	interface $$Props {
		maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'none';
		padding?: boolean;
		center?: boolean;
		class?: string;
		children?: any;
	}

	export let maxWidth: $$Props['maxWidth'] = 'xl';
	export let padding: $$Props['padding'] = true;
	export let center: $$Props['center'] = true;
	let className: $$Props['class'] = '';
	export { className as class };

	$: componentClasses = [
		'container',
		`container-${maxWidth}`,
		padding && 'container-padded',
		center && 'container-centered',
		className
	].filter(Boolean).join(' ');
</script>

<div class={componentClasses} {...$$restProps}>
	<slot />
</div>

<style>
	.container {
		width: 100%;
		position: relative;
	}

	.container-centered {
		margin-left: auto;
		margin-right: auto;
	}

	.container-padded {
		padding-left: var(--content-padding);
		padding-right: var(--content-padding);
	}

	/* Max width variants */
	.container-sm {
		max-width: 640px;
	}

	.container-md {
		max-width: 768px;
	}

	.container-lg {
		max-width: 1024px;
	}

	.container-xl {
		max-width: var(--content-max-width);
	}

	.container-full {
		max-width: 100%;
	}

	.container-none {
		max-width: none;
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.container-padded {
			padding-left: 1rem;
			padding-right: 1rem;
		}
	}
</style> 
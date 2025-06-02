<script lang="ts">
	interface $$Props {
		columns?: 1 | 2 | 3 | 4 | 'auto';
		gap?: 'tight' | 'compact' | 'normal' | 'comfortable' | 'loose' | 'spacious';
		responsive?: boolean;
		class?: string;
	}

	export let columns: $$Props['columns'] = 3;
	export let gap: $$Props['gap'] = 'comfortable';
	export let responsive: $$Props['responsive'] = true;
	let className: $$Props['class'] = '';
	export { className as class };

	$: gapClass = `grid-gap-${gap}`;
	$: columnsClass = columns === 'auto' ? 'grid-auto' : `grid-${columns}`;
	$: componentClasses = [
		'grid',
		columnsClass,
		gapClass,
		responsive && 'grid-responsive',
		className
	].filter(Boolean).join(' ');
</script>

<div class={componentClasses} {...$$restProps}>
	<slot />
</div>

<style>
	.grid {
		display: grid;
	}

	/* Column layouts */
	.grid-1 {
		grid-template-columns: 1fr;
	}

	.grid-2 {
		grid-template-columns: repeat(2, 1fr);
	}

	.grid-3 {
		grid-template-columns: repeat(3, 1fr);
	}

	.grid-4 {
		grid-template-columns: repeat(4, 1fr);
	}

	.grid-auto {
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}

	/* Gap variants */
	.grid-gap-tight {
		gap: var(--space-tight);
	}

	.grid-gap-compact {
		gap: var(--space-compact);
	}

	.grid-gap-normal {
		gap: var(--space-normal);
	}

	.grid-gap-comfortable {
		gap: var(--space-comfortable);
	}

	.grid-gap-loose {
		gap: var(--space-loose);
	}

	.grid-gap-spacious {
		gap: var(--space-spacious);
	}

	/* Responsive behavior */
	@media (max-width: 768px) {
		.grid-responsive.grid-2,
		.grid-responsive.grid-3,
		.grid-responsive.grid-4,
		.grid-responsive.grid-auto {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 1024px) and (min-width: 769px) {
		.grid-responsive.grid-4 {
			grid-template-columns: repeat(2, 1fr);
		}
		
		.grid-responsive.grid-3 {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style> 
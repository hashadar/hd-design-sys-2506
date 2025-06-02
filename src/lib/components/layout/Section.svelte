<script lang="ts">
	interface $$Props {
		background?: 'default' | 'muted' | 'primary' | 'accent' | 'none';
		spacing?: 'tight' | 'normal' | 'loose' | 'generous';
		id?: string;
		class?: string;
		children?: any;
	}

	export let background: $$Props['background'] = 'default';
	export let spacing: $$Props['spacing'] = 'loose';
	export let id: $$Props['id'] = undefined;
	let className: $$Props['class'] = '';
	export { className as class };

	$: componentClasses = [
		'section',
		`section-bg-${background}`,
		`section-spacing-${spacing}`,
		className
	].filter(Boolean).join(' ');
</script>

<section class={componentClasses} {id} {...$$restProps}>
	<slot />
</section>

<style>
	.section {
		width: 100%;
		position: relative;
	}

	/* Spacing variants */
	.section-spacing-tight {
		padding-top: var(--space-loose);
		padding-bottom: var(--space-loose);
	}

	.section-spacing-normal {
		padding-top: var(--space-spacious);
		padding-bottom: var(--space-spacious);
	}

	.section-spacing-loose {
		padding-top: var(--space-generous);
		padding-bottom: var(--space-generous);
	}

	.section-spacing-generous {
		padding-top: calc(var(--space-generous) * 2);
		padding-bottom: calc(var(--space-generous) * 2);
	}

	/* Background variants */
	.section-bg-default {
		background-color: var(--color-background);
		color: var(--color-foreground);
	}

	.section-bg-muted {
		background-color: var(--color-muted);
		color: var(--color-foreground);
	}

	.section-bg-primary {
		background-color: var(--color-primary-50);
		color: var(--color-primary-900);
	}

	.section-bg-accent {
		background-color: var(--color-accent-50);
		color: var(--color-accent-900);
	}

	.section-bg-none {
		background: none;
	}

	/* Responsive spacing adjustments */
	@media (max-width: 768px) {
		.section-spacing-tight {
			padding-top: var(--space-normal);
			padding-bottom: var(--space-normal);
		}

		.section-spacing-normal {
			padding-top: var(--space-loose);
			padding-bottom: var(--space-loose);
		}

		.section-spacing-loose {
			padding-top: var(--space-spacious);
			padding-bottom: var(--space-spacious);
		}

		.section-spacing-generous {
			padding-top: var(--space-generous);
			padding-bottom: var(--space-generous);
		}
	}
</style> 
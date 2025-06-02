<script lang="ts">
	interface $$Props {
		title: string;
		description?: string;
		class?: string;
	}

	export let title: $$Props['title'];
	export let description: $$Props['description'] = undefined;
	let className: $$Props['class'] = '';
	export { className as class };

	$: componentClasses = [
		'page-header',
		className
	].filter(Boolean).join(' ');
</script>

<header class={componentClasses} {...$$restProps}>
	<h1 class="page-title">{title}</h1>
	{#if description}
		<p class="page-description">{description}</p>
	{/if}
	
	{#if $$slots.default}
		<div class="page-header-content">
			<slot />
		</div>
	{/if}
</header>

<style>
	.page-header {
		margin-bottom: var(--space-generous);
	}

	.page-title {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: var(--space-compact);
		color: var(--color-foreground);
		background: linear-gradient(135deg, var(--color-primary-700), var(--color-accent-600));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.page-description {
		font-size: 1.125rem;
		color: var(--color-primary-600);
		line-height: 1.6;
		max-width: 48rem;
		margin: 0;
	}

	.page-header-content {
		margin-top: var(--space-comfortable);
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.page-title {
			font-size: 2rem;
		}
	}
</style> 
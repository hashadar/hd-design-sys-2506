<script lang="ts">
	import Button from './Button.svelte';

	interface $$Props {
		code: string;
		language?: string;
		title?: string;
		showCopy?: boolean;
		class?: string;
	}

	export let code: $$Props['code'];
	export let language: $$Props['language'] = 'css';
	export let title: $$Props['title'] = undefined;
	export let showCopy: $$Props['showCopy'] = false;
	let className: $$Props['class'] = '';
	export { className as class };

	$: componentClasses = [
		'code-block',
		className
	].filter(Boolean).join(' ');

	async function copyToClipboard() {
		try {
			await navigator.clipboard.writeText(code);
			// Could add a toast notification here
		} catch (err) {
			console.error('Failed to copy code: ', err);
		}
	}
</script>

<div class={componentClasses} {...$$restProps}>
	{#if title}
		<div class="code-block-header">
			<h4 class="code-block-title">{title}</h4>
			{#if showCopy}
				<Button 
					variant="accent"
					size="sm"
					on:click={copyToClipboard}
				>
					copy
				</Button>
			{/if}
		</div>
	{/if}
	
	<pre class="code-block-content font-mono"><code>{code}</code></pre>
</div>

<style>
	.code-block {
		background: var(--color-card);
		border: var(--border-width-thick) solid var(--color-border);
		border-radius: var(--border-radius-base);
		overflow: hidden;
		clip-path: var(--clip-corner);
		box-shadow: var(--shadow-sm);
	}

	.code-block-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--space-normal) var(--space-comfortable);
		background: var(--color-muted);
		border-bottom: var(--border-width) solid var(--color-border);
	}

	.code-block-title {
		margin: 0;
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-card-foreground);
	}

	.code-block-content {
		margin: 0;
		padding: var(--space-comfortable);
		background: var(--color-muted);
		color: var(--color-card-foreground);
		overflow-x: auto;
		font-size: 0.875rem;
		line-height: 1.5;
		border: none;
		clip-path: none;
		box-shadow: none;
	}

	.code-block-content code {
		background: none;
		padding: 0;
		border: none;
		clip-path: none;
	}
</style> 
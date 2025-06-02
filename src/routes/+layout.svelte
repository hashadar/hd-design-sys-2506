<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { currentTheme, navigationItems, features } from '$lib/stores/config.js';

	// Mobile navigation state
	let mobileNavOpen = false;

	// Get current year for copyright
	const currentYear = new Date().getFullYear();
</script>

<div class="app-layout">
	<!-- Left Navigation Sidebar -->
	<nav class="nav-sidebar" class:open={mobileNavOpen}>
		<!-- Brand/Logo -->
		<div class="nav-brand">
			<h1>{$currentTheme.brandName}</h1>
			<p>{$currentTheme.tagline} - {$currentTheme.description}</p>
		</div>

		<!-- Navigation Menu -->
		<ul class="nav-menu">
			{#each $navigationItems as item (item.href)}
				<li class="nav-item">
					<a
						href={item.href}
						class="nav-link"
						class:active={$page.url.pathname === item.href}
						title={item.description}
					>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>

		<!-- Footer Information -->
		<div class="nav-footer">
			<p><strong><a href="/changelog" class="text-accent">version 1.1.0</a></strong></p>
			<p>
				built with <a href="https://kit.svelte.dev" target="_blank" rel="noopener">SvelteKit</a> &
				<a href="https://www.bits-ui.com" target="_blank" rel="noopener">Bits UI</a>
			</p>
			<p>© {currentYear} {$currentTheme.brandName}</p>
			<p>
				<a href="https://github.com/hashadar" target="_blank" rel="noopener">github</a> •
				<a href="mailto:contact@hashadar.com">contact</a>
			</p>
		</div>
	</nav>

	<!-- Main Content Area -->
	<main class="main-content">
		<slot />
	</main>
</div>

<!-- Mobile Navigation Toggle (hidden by CSS on desktop) -->
<button
	class="mobile-nav-toggle"
	on:click={() => (mobileNavOpen = !mobileNavOpen)}
	aria-label="toggle navigation"
	style="display: none;"
>
	☰
</button>

<style>
	@media (max-width: 768px) {
		.mobile-nav-toggle {
			display: block !important;
			position: fixed;
			top: 1rem;
			left: 1rem;
			z-index: calc(var(--z-sticky) + 1);
			background: var(--color-primary-800);
			color: var(--color-primary-100);
			border: none;
			padding: 0.5rem;
			border-radius: var(--border-radius-base);
			font-size: 1.25rem;
			cursor: pointer;
			transition: all var(--transition-base);
		}

		.mobile-nav-toggle:hover {
			background: var(--color-primary-700);
			transform: scale(1.05);
		}
	}
</style>

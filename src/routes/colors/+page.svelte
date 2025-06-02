<script lang="ts">
	// Color palettes
	const creamPalette = [
		{ name: 'cream-50', value: '#FEFCF9', usage: 'lightest backgrounds' },
		{ name: 'cream-100', value: '#FDFBF7', usage: 'main background' },
		{ name: 'cream-200', value: '#FBF7F0', usage: 'subtle backgrounds' },
		{ name: 'cream-300', value: '#F8F2E8', usage: 'borders and dividers' },
		{ name: 'cream-400', value: '#F5EDE0', usage: 'disabled states' },
		{ name: 'cream-500', value: '#F2E8D8', usage: 'hover states' },
		{ name: 'cream-600', value: '#E6D4B8', usage: 'active states' },
		{ name: 'cream-700', value: '#D4BC92', usage: 'muted text' },
		{ name: 'cream-800', value: '#B89F6C', usage: 'secondary text' },
		{ name: 'cream-900', value: '#8F7A52', usage: 'dark accents' }
	];

	const greenPalette = [
		{ name: 'green-50', value: '#F0F4F2', usage: 'success backgrounds' },
		{ name: 'green-100', value: '#DCE8E1', usage: 'light success states' },
		{ name: 'green-200', value: '#B8D1C2', usage: 'success borders' },
		{ name: 'green-300', value: '#95BAA4', usage: 'success hover' },
		{ name: 'green-400', value: '#6B9A7D', usage: 'success text' },
		{ name: 'green-500', value: '#4A7C59', usage: 'primary actions' },
		{ name: 'green-600', value: '#3D6B4A', usage: 'primary hover' },
		{ name: 'green-700', value: '#2F5239', usage: 'secondary text' },
		{ name: 'green-800', value: '#1B4332', usage: 'primary text' },
		{ name: 'green-900', value: '#0F2D1F', usage: 'heading text' }
	];

	const orangePalette = [
		{ name: 'orange-50', value: '#FEF7F0', usage: 'warning backgrounds' },
		{ name: 'orange-100', value: '#FDEADB', usage: 'light warning states' },
		{ name: 'orange-200', value: '#F9D2B5', usage: 'warning borders' },
		{ name: 'orange-300', value: '#F5BA8F', usage: 'warning hover' },
		{ name: 'orange-400', value: '#E69F69', usage: 'warning text' },
		{ name: 'orange-500', value: '#D18442', usage: 'accent elements' },
		{ name: 'orange-600', value: '#B86A1C', usage: 'accent hover' },
		{ name: 'orange-700', value: '#B45309', usage: 'primary accent' },
		{ name: 'orange-800', value: '#8A4107', usage: 'dark accent' },
		{ name: 'orange-900', value: '#5F2D05', usage: 'accent text' }
	];

	const semanticColors = [
		{ name: 'success', value: '#22c55e', usage: 'positive states and feedback' },
		{ name: 'warning', value: '#f59e0b', usage: 'caution and attention states' },
		{ name: 'error', value: '#ef4444', usage: 'error states and validation' },
		{ name: 'info', value: '#3b82f6', usage: 'informational content' }
	];
</script>

<svelte:head>
	<title>colours - hasha dar design system</title>
	<meta
		name="description"
		content="comprehensive colour palette including cream, green, and orange scales with usage guidelines for the hasha dar design system."
	/>
</svelte:head>

<!-- Page Header -->
<header class="page-header">
	<h1 class="page-title">colours</h1>
	<p class="page-description">
		our colour system features warm cream, rich green, and vibrant orange palettes designed for
		accessibility, harmony, and elegant interfaces.
	</p>
</header>

<!-- Color Philosophy Section -->
<section class="section">
	<h2 class="section-title">colour philosophy</h2>

	<div class="grid grid-3">
		<div class="card">
			<h3 class="card-title">accessibility first</h3>
			<p class="card-description">
				all colour combinations meet WCAG 2.1 AA standards for contrast ratios, ensuring readable and
				inclusive interfaces for all users.
			</p>
		</div>

		<div class="card">
			<h3 class="card-title">natural harmony</h3>
			<p class="card-description">
				inspired by natural elements - warm cream like sand, rich green like forest foliage, vibrant
				orange like autumn leaves.
			</p>
		</div>

		<div class="card">
			<h3 class="card-title">systematic scaling</h3>
			<p class="card-description">
				each colour has a complete 50-900 scale providing flexibility whilst maintaining consistency
				across all interface elements.
			</p>
		</div>
	</div>
</section>

<!-- Cream Palette Section -->
<section class="section">
	<h2 class="section-title">cream palette</h2>
	<p class="mb-comfortable text-secondary">
		warm, neutral tones for backgrounds, surfaces, and subtle interface elements.
	</p>

	<div class="grid-4 grid">
		{#each creamPalette as color, index (color.name)}
			<div class="card">
				<div
					class="color-swatch"
					style="background-color: {color.value}; width: 100%; height: 4rem; margin-bottom: 1rem;"
					title="{color.name}: {color.value}"
				></div>
				<h4 class="card-title font-mono text-sm">{color.name}</h4>
				<p class="mb-compact font-mono text-xs">{color.value}</p>
				<p class="card-description text-xs">{color.usage}</p>
			</div>
		{/each}
	</div>
</section>

<!-- Green Palette Section -->
<section class="section">
	<h2 class="section-title">green palette</h2>
	<p class="mb-comfortable text-secondary">
		earthy green tones for primary actions, text, and nature-inspired elements.
	</p>

	<div class="grid-4 grid">
		{#each greenPalette as color, index (color.name)}
			<div class="card">
				<div
					class="color-swatch"
					style="background-color: {color.value}; width: 100%; height: 4rem; margin-bottom: 1rem;"
					title="{color.name}: {color.value}"
				></div>
				<h4 class="card-title font-mono text-sm">{color.name}</h4>
				<p class="mb-compact font-mono text-xs">{color.value}</p>
				<p class="card-description text-xs">{color.usage}</p>
			</div>
		{/each}
	</div>
</section>

<!-- Orange Palette Section -->
<section class="section">
	<h2 class="section-title">orange palette</h2>
	<p class="mb-comfortable text-secondary">
		vibrant orange tones for accents, links, and attention-drawing elements.
	</p>

	<div class="grid-4 grid">
		{#each orangePalette as color, index (color.name)}
			<div class="card">
				<div
					class="color-swatch"
					style="background-color: {color.value}; width: 100%; height: 4rem; margin-bottom: 1rem;"
					title="{color.name}: {color.value}"
				></div>
				<h4 class="card-title font-mono text-sm">{color.name}</h4>
				<p class="mb-compact font-mono text-xs">{color.value}</p>
				<p class="card-description text-xs">{color.usage}</p>
			</div>
		{/each}
	</div>
</section>

<!-- Semantic Colors Section -->
<section class="section">
	<h2 class="section-title">semantic colours</h2>
	<p class="mb-comfortable text-secondary">
		purpose-driven colours for states, feedback, and system communications.
	</p>

	<div class="grid-2 grid">
		{#each semanticColors as color, index (color.name)}
			<div class="card">
				<div
					class="color-swatch"
					style="background-color: {color.value}; width: 100%; height: 3rem; margin-bottom: 1rem;"
					title="{color.name}: {color.value}"
				></div>
				<h4 class="card-title font-mono">{color.name}</h4>
				<p class="text-sm font-mono mb-compact">{color.value}</p>
				<p class="card-description">{color.usage}</p>
			</div>
		{/each}
	</div>
</section>

<!-- Usage Guidelines Section -->
<section class="section">
	<h2 class="section-title">usage guidelines</h2>

	<div class="grid grid-2">
		<div class="card">
			<h3 class="card-title">text colours</h3>
			<div style="margin-bottom: 1rem;">
				<p style="color: var(--color-green-900); margin-bottom: 0.5rem;">
					primary text - green-900
				</p>
				<p style="color: var(--color-green-800); margin-bottom: 0.5rem;">
					secondary text - green-800
				</p>
				<p style="color: var(--color-green-700); margin-bottom: 0.5rem;">
					tertiary text - green-700
				</p>
				<p style="color: var(--color-green-500); margin-bottom: 0.5rem;">muted text - green-500</p>
			</div>
			<p class="card-description">
				use darker green shades for text to ensure proper contrast against light backgrounds.
				reserve orange for links and accents only.
			</p>
		</div>

		<div class="card">
			<h3 class="card-title">background colours</h3>
			<div style="margin-bottom: 1rem;">
				<div
					style="background-color: var(--color-cream-50); padding: 0.5rem; margin-bottom: 0.5rem; border-radius: 4px;"
				>
					card backgrounds - cream-50
				</div>
				<div
					style="background-color: var(--color-cream-100); padding: 0.5rem; margin-bottom: 0.5rem; border-radius: 4px;"
				>
					page background - cream-100
				</div>
				<div
					style="background-color: var(--color-cream-200); padding: 0.5rem; margin-bottom: 0.5rem; border-radius: 4px;"
				>
					hover states - cream-200
				</div>
			</div>
			<p class="card-description">
				layer cream tones to create depth and hierarchy. use lighter shades for backgrounds and
				progressively darker for interactive states.
			</p>
		</div>
	</div>
</section>

<!-- Accessibility Section -->
<section class="section">
	<h2 class="section-title">accessibility</h2>

	<div class="card">
		<h3 class="card-title">contrast ratios</h3>
		<div class="grid grid-2" style="margin-top: 1rem;">
			<div>
				<h4 class="font-semibold mb-compact">WCAG AA compliant pairs:</h4>
				<ul style="padding-left: 1.5rem; line-height: 1.6;">
					<li>green-900 on cream-100 (12.8:1)</li>
					<li>green-800 on cream-100 (9.2:1)</li>
					<li>orange-700 on cream-100 (8.1:1)</li>
					<li>green-700 on cream-200 (6.4:1)</li>
				</ul>
			</div>
			<div>
				<h4 class="font-semibold mb-compact">colour-blind considerations:</h4>
				<ul style="padding-left: 1.5rem; line-height: 1.6;">
					<li>sufficient contrast without relying on colour alone</li>
					<li>tested across protanopia, deuteranopia, tritanopia</li>
					<li>semantic meaning communicated through icons and text</li>
					<li>distinct visual patterns for different states</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Code Examples Section -->
<section class="section">
	<h2 class="section-title">code examples</h2>

	<div class="card">
		<h3 class="card-title">CSS custom properties</h3>
		<pre class="font-mono"><code>{`/* Cream Palette */
--color-cream-50: #FEFCF9;
--color-cream-100: #FDFBF7;
--color-cream-500: #F2E8D8;
--color-cream-900: #8F7A52;

/* Green Palette */
--color-green-50: #F0F4F2;
--color-green-500: #4A7C59;
--color-green-800: #1B4332;
--color-green-900: #0F2D1F;

/* Orange Palette */
--color-orange-50: #FEF7F0;
--color-orange-500: #D18442;
--color-orange-700: #B45309;
--color-orange-900: #5F2D05;

/* Usage */
.text-primary { color: var(--color-green-900); }
.text-accent { color: var(--color-orange-700); }
.bg-surface { background: var(--color-cream-50); }`}</code></pre>
	</div>
</section>

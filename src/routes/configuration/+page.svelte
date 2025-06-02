<script lang="ts">
	import { PageHeader, Section, Grid, Card, Button, CodeBlock } from '$lib/components/index.js';
	import { siteConfig, updateColors, updateBrand, generatedColors, currentTheme } from '$lib/stores/config.js';

	// Demo color presets
	const colorPresets = [
		{
			name: 'hasha dar (default)',
			description: 'our signature palette with forest green, warm cream, and terracotta accents',
			colors: {
				primary: '#4a7c59',    // Forest green
				secondary: '#f2e8d8',  // Warm cream
				accent: '#d18442',     // Warm orange
				neutral: '#1b4332'     // Deep forest
			}
		},
		{
			name: 'sage mist',
			description: 'a subtle variation with muted sage tones and cooler cream',
			colors: {
				primary: '#5b8a72',    // Slightly muted sage green
				secondary: '#f5f1ea',  // Cooler cream
				accent: '#c17d4a',     // Muted terracotta
				neutral: '#2c4a3d'     // Softer forest
			}
		},
		{
			name: 'deep ocean',
			description: 'a moderate change featuring deep blues and light blue tints',
			colors: {
				primary: '#2c5282',    // Deep blue
				secondary: '#e6f3ff',  // Light blue tint
				accent: '#dd6b20',     // Burnt orange
				neutral: '#1a365d'     // Navy blue
			}
		},
		{
			name: 'violet dusk',
			description: 'a dramatic departure with rich purples and vibrant accents',
			colors: {
				primary: '#6b46c1',    // Rich purple
				secondary: '#faf5ff',  // Light purple tint
				accent: '#e53e3e',     // Vibrant red
				neutral: '#2d3748'     // Slate gray
			}
		}
	];

	// Color inputs for manual adjustment
	let manualColors = {
		primary: $siteConfig.colors.primary,
		secondary: $siteConfig.colors.secondary,
		accent: $siteConfig.colors.accent,
		neutral: $siteConfig.colors.neutral
	};

	// Brand inputs
	let brandSettings = {
		name: $siteConfig.brand.name,
		tagline: $siteConfig.brand.tagline,
		description: $siteConfig.brand.description
	};

	function applyPreset(preset: typeof colorPresets[0]) {
		updateColors(preset.colors);
		manualColors = { ...preset.colors };
	}

	function applyManualColors() {
		updateColors(manualColors);
	}

	function applyBrandSettings() {
		updateBrand(brandSettings);
	}

	// Update local state when store changes
	$: {
		manualColors = {
			primary: $siteConfig.colors.primary,
			secondary: $siteConfig.colors.secondary,
			accent: $siteConfig.colors.accent,
			neutral: $siteConfig.colors.neutral
		};
		brandSettings = {
			name: $siteConfig.brand.name,
			tagline: $siteConfig.brand.tagline,
			description: $siteConfig.brand.description
		};
	}
</script>

<svelte:head>
	<title>configuration - hasha dar design system</title>
	<meta name="description" content="interactive configuration system for customizing the hasha dar design system's colors, branding, and layout in real-time." />
</svelte:head>

<PageHeader
	title="configuration"
	description="interactive configuration system for customizing the design system's colors, branding, and layout in real-time. see instant changes across all components."
/>

<!-- Color Presets Section -->
<Section>
	<h2 class="section-title">color presets</h2>
	<p class="mb-comfortable text-secondary">
		try these predefined color schemes to see instant transformations across the entire design system.
	</p>
	
	<Grid columns={2}>
		{#each colorPresets as preset}
			<Card title={preset.name} variant="default">
				<p class="card-description mb-normal">
					{preset.description}
				</p>
				<div class="color-preview mb-normal">
					{#each Object.entries(preset.colors) as [name, color]}
						<div 
							class="color-swatch-mini" 
							style="background-color: {color};"
							title="{name}: {color}"
						></div>
					{/each}
				</div>
				<Button variant="primary" on:click={() => applyPreset(preset)}>
					apply {preset.name}
				</Button>
			</Card>
		{/each}
	</Grid>
</Section>

<!-- Manual Color Adjustment Section -->
<Section>
	<h2 class="section-title">manual color adjustment</h2>
	<p class="mb-comfortable text-secondary">
		fine-tune each color individually to create your perfect color scheme.
	</p>
	
	<Grid columns={2}>
		<Card title="base colors" variant="default">
			<div class="color-controls">
				{#each Object.entries(manualColors) as [colorName, colorValue]}
					<div class="color-control mb-normal">
						<label for="color-{colorName}" class="color-label">
							{colorName}
						</label>
						<div class="color-input-group">
							<input 
								id="color-{colorName}"
								type="color" 
								bind:value={manualColors[colorName as keyof typeof manualColors]}
								class="color-picker"
							/>
							<input 
								type="text" 
								bind:value={manualColors[colorName as keyof typeof manualColors]}
								class="color-text-input"
								placeholder="#000000"
							/>
						</div>
					</div>
				{/each}
				<Button variant="accent" on:click={applyManualColors}>
					apply changes
				</Button>
			</div>
		</Card>

		<Card title="generated color scales" variant="default">
			<p class="card-description mb-normal">
				these scales are automatically generated from your base colors:
			</p>
			{#each Object.entries($generatedColors) as [colorName, scale]}
				<div class="color-scale mb-loose">
					<h4 class="text-sm font-medium mb-tight">{colorName}</h4>
					<div class="color-scale-row">
						{#each Object.entries(scale) as [shade, color]}
							<div 
								class="color-scale-swatch" 
								style="background-color: {color};"
								title="{shade}: {color}"
							>
								<span class="color-scale-label">{shade}</span>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</Card>
	</Grid>
</Section>

<!-- Brand Settings Section -->
<Section>
	<h2 class="section-title">brand settings</h2>
	<p class="mb-comfortable text-secondary">
		customize the brand identity to match your organization's values and messaging.
	</p>
	
	<Card variant="default">
		<div class="brand-controls">
			<div class="form-group mb-normal">
				<label for="brand-name" class="form-label">brand name</label>
				<input 
					id="brand-name"
					type="text" 
					bind:value={brandSettings.name}
					class="form-input"
					placeholder="your brand name"
				/>
			</div>

			<div class="form-group mb-normal">
				<label for="brand-tagline" class="form-label">tagline</label>
				<input 
					id="brand-tagline"
					type="text" 
					bind:value={brandSettings.tagline}
					class="form-input"
					placeholder="your brand tagline"
				/>
			</div>

			<div class="form-group mb-normal">
				<label for="brand-description" class="form-label">description</label>
				<textarea 
					id="brand-description"
					bind:value={brandSettings.description}
					class="form-textarea"
					placeholder="describe your brand..."
				></textarea>
			</div>

			<Button variant="primary" on:click={applyBrandSettings}>
				update brand
			</Button>
		</div>
	</Card>
</Section>

<!-- Code Examples Section -->
<Section>
	<h2 class="section-title">code examples</h2>
	
	<Card title="CSS custom properties" variant="default">
		<CodeBlock 
			title="current configuration"
			code={`/* Base colors */
--color-primary: ${$siteConfig.colors.primary};
--color-secondary: ${$siteConfig.colors.secondary};
--color-accent: ${$siteConfig.colors.accent};
--color-neutral: ${$siteConfig.colors.neutral};

/* Generated color scales */
${Object.entries($generatedColors).map(([name, scale]) => 
	Object.entries(scale).map(([shade, color]) => 
		`--color-${name}-${shade}: ${color};`
	).join('\n')
).join('\n\n')}`}
			showCopy={true}
		/>
	</Card>
</Section>

<style>
	.color-preview {
		display: flex;
		gap: var(--space-compact);
		margin-bottom: var(--space-normal);
	}

	.color-swatch-mini {
		width: 2rem;
		height: 2rem;
		border-radius: var(--border-radius-sm);
		border: 1px solid var(--color-border);
	}

	.color-controls {
		display: flex;
		flex-direction: column;
		gap: var(--space-normal);
	}

	.color-control {
		display: flex;
		flex-direction: column;
		gap: var(--space-tight);
	}

	.color-label {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-card-foreground);
	}

	.color-input-group {
		display: flex;
		gap: var(--space-compact);
		align-items: center;
	}

	.color-picker {
		width: 3rem;
		height: 2rem;
		padding: 0;
		border: 1px solid var(--color-border);
		border-radius: var(--border-radius-sm);
		cursor: pointer;
	}

	.color-text-input {
		flex: 1;
		padding: var(--space-compact) var(--space-normal);
		border: 1px solid var(--color-border);
		border-radius: var(--border-radius-sm);
		font-family: var(--font-mono);
		font-size: 0.875rem;
		color: var(--color-card-foreground);
		background: var(--color-card);
	}

	.color-scale {
		margin-bottom: var(--space-loose);
	}

	.color-scale-row {
		display: flex;
		gap: var(--space-tight);
		margin-top: var(--space-tight);
	}

	.color-scale-swatch {
		flex: 1;
		height: 2rem;
		border-radius: var(--border-radius-sm);
		border: 1px solid var(--color-border);
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.color-scale-label {
		font-size: 0.75rem;
		color: var(--color-card-foreground);
		text-shadow: 0 0 2px var(--color-card);
	}

	.brand-controls {
		display: flex;
		flex-direction: column;
		gap: var(--space-normal);
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: var(--space-tight);
	}

	.form-label {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-card-foreground);
	}

	.form-input,
	.form-textarea {
		padding: var(--space-compact) var(--space-normal);
		border: 1px solid var(--color-border);
		border-radius: var(--border-radius-sm);
		font-family: var(--font-primary);
		font-size: 0.875rem;
		color: var(--color-card-foreground);
		background: var(--color-card);
	}

	.form-textarea {
		min-height: 6rem;
		resize: vertical;
	}

	.form-input:focus,
	.form-textarea:focus {
		outline: none;
		border-color: var(--color-accent-600);
		box-shadow: 0 0 0 2px var(--color-accent-100);
	}
</style> 
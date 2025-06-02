import { expect, test } from '@playwright/test';

test('design system homepage loads correctly', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle(/hasha dar design system/);
	await expect(page.getByRole('heading', { name: 'hasha dar design system' })).toBeVisible();
});

test('navigation works correctly', async ({ page }) => {
	await page.goto('/');
	
	// Test navigation to different pages
	await page.click('a[href="/typography"]');
	await expect(page).toHaveURL('/typography');
	await expect(page.getByRole('heading', { name: 'typography' })).toBeVisible();
	
	await page.click('a[href="/colors"]');
	await expect(page).toHaveURL('/colors');
	await expect(page.getByRole('heading', { name: 'colours' })).toBeVisible();
});

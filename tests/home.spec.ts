import type { Page } from '@playwright/test';
import { expect, test } from '@playwright/test';
import { strings } from '~/utils/constants';

/**
 * Two things make clicking the name button racy:
 *
 * - The page is server rendered, so the button is in the DOM and clickable
 *   before React has hydrated. A click that lands first is dropped silently.
 * - The button is `position: fixed` at the center of the viewport, so once the
 *   links are on screen they cover it and swallow pointer events. Each attempt
 *   scrolls back to the top so the button is never behind the links overlay.
 */
async function scrollLinksIntoView(page: Page) {
  const name = page.getByTestId('name-button');
  await expect(name).toBeVisible();

  await expect(async () => {
    await page.evaluate(() => window.scrollTo(0, 0));
    await name.click({ timeout: 5_000 });
    await expect(page.locator('.links')).toBeVisible({ timeout: 5_000 });
  }).toPass({ timeout: 30_000 });
}

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the main content', async ({ page }) => {
    // Check if the page loads successfully
    await expect(page).toHaveTitle(/Andrew/);

    // Check if main content is visible
    await expect(page.locator('body')).toBeVisible();
  });

  test('should scroll navigation links into view', async ({ page }) => {
    await scrollLinksIntoView(page);

    // Check for GitHub link
    await page
      .getByRole('link', { name: /GitHub/i })
      .waitFor({ state: 'visible', timeout: 10000 });

    // Check for LinkedIn link
    await page
      .getByRole('link', { name: /LinkedIn/i })
      .waitFor({ state: 'visible', timeout: 10000 });

    // Check for Contact link
    await page
      .getByLabel(strings.aria.contact)
      .waitFor({ state: 'visible', timeout: 10000 });

    // Check for Resume link
    await page
      .getByLabel(strings.aria.resume.open)
      .waitFor({ state: 'visible', timeout: 10000 });
  });

  test('should open resume actions', async ({ page }) => {
    await scrollLinksIntoView(page);

    await page.getByLabel(strings.aria.resume.open).click();

    // Look for resume-related content
    const viewResume = page.getByLabel(strings.aria.resume.view);
    await expect(viewResume).toBeVisible();

    const downloadResume = page.getByLabel(strings.aria.resume.download);
    await expect(downloadResume).toBeVisible();
  });

  test('should be responsive', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('body')).toBeVisible();

    // Test tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator('body')).toBeVisible();

    // Test desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(page.locator('body')).toBeVisible();
  });
});

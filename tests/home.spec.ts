import type { Page } from '@playwright/test';
import { expect, test } from '@playwright/test';
import { strings } from '~/utils/constants';

function delay(ms = 1000) {
  return new Promise<void>((res) => setTimeout(() => res(), ms));
}

async function scrollLinksIntoView(page: Page) {
  const name = page.getByRole('button').first();
  await expect(name).toBeVisible();
  await name.click();
  await delay();
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
    await page.evaluate(() => {
      window.scrollBy(0, 720); // Scroll down by 500 pixels
    });

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
    await page.evaluate(() => {
      window.scrollBy(0, 1200); // Scroll down by 1200 pixels
    });

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

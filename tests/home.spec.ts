import { expect, test } from '@playwright/test';
import { strings } from '~/utils/constants';

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

    // Check for GitHub link
    const githubLink = page.getByRole('link', { name: /GitHub/i });
    await expect(githubLink).toBeVisible();

    // Check for LinkedIn link
    const linkedinLink = page.getByRole('link', { name: /LinkedIn/i });
    await expect(linkedinLink).toBeVisible();

    // Check for LinkedIn link
    const contactLink = page.getByLabel(strings.aria.contact);
    await expect(contactLink).toBeVisible();

    // Check for LinkedIn link
    const resumeButton = page.getByLabel(strings.aria.resume.open);
    await expect(resumeButton).toBeVisible();
  });

  test('should open resume actions', async ({ page }) => {
    await page.evaluate(() => {
      window.scrollBy(0, 1200); // Scroll down by 500 pixels
    });

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

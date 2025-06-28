import { expect, test } from '@playwright/test';

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

  test('should have navigation links', async ({ page }) => {
    // Check for GitHub link
    const githubLink = page.getByRole('link', { name: /GitHub/i });
    await expect(githubLink).toBeVisible();

    // Check for LinkedIn link
    const linkedinLink = page.getByRole('link', { name: /LinkedIn/i });
    await expect(linkedinLink).toBeVisible();
  });

  test('should have resume section', async ({ page }) => {
    await page.getByLabel('View Andrew Angelles contact links').click();
    await page.getByLabel(`View Andrew Angelle's resume as a pdf`).click();

    // Look for resume-related content
    const resumeSection = page
      .locator(
        '[data-testid="resume-section"], .pdf-links-container, [class*="pdf-links-container"]',
      )
      .first();
    await expect(resumeSection).toBeVisible();
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

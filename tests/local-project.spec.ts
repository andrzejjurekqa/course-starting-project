import { test, expect } from "@playwright/test";

test('Go to project', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.locator('#title').fill('New Project');
    await page.locator('#description').fill('New Project');
    await page.locator('#people').fill('3');
    await page.getByRole('button').click();

    await expect(page.locator('#active-projects-list')).toContainText('New Project');

    await expect(page.locator('#finished-projects-list')).toContainText('New Project');

    await expect(page.locator('#active-projects-list')).toContainText('New Project');
});
import { test, expect } from "@playwright/test";

test('Go and drag and drop', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.locator('#title').fill('New Project');
    await page.locator('#description').fill('New Project');
    await page.locator('#people').fill('3');
    await page.getByRole('button').click();

    await expect(page.locator('#active-projects-list')).toContainText('New Project');
    await page.getByRole('heading', { name: 'New Project' }).dragTo(page.locator('#finished-projects-list'))
    await expect(page.locator('#finished-projects-list')).toContainText('New Project');
    await page.getByRole('heading', { name: 'New Project' }).dragTo(page.locator('#active-projects-list'))
    await expect(page.locator('#active-projects-list')).toContainText('New Project');
});

test.only('Go and do some bugs', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.getByRole('button').click();
    await page.on('dialog', async dialog => {
        await expect(dialog.message()).toContain('Invalid input, please try again!');
        await dialog.accept();
    });
    await page.locator('#title').fill('New Project');
    await page.getByRole('button').click();
    await page.locator('#description').fill('New Project');
    await page.getByRole('button').click();
});
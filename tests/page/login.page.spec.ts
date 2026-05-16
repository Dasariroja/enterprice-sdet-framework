import { test, expect } from '@playwright/test';
import { URL } from '../../test-setting';

test('Login page', async ({ page }) => {
  await page.goto(URL);
  await expect(page).toHaveTitle(/Swag Labs/);
  await page.locator('[data-test="username"]').click();
  await page.getByText('Swag Labs').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
});

test.skip('test', async ({ page }) => {
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="inventory-sidebar-link"]').click();
  await page.locator('[data-test="about-sidebar-link"]').click();
  await page.goto('https://www.saucedemo.com/inventory.html');
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="reset-sidebar-link"]').click();
  await page.getByRole('button', { name: 'Close Menu' }).click();
  await page.getByText('Swag Labs').click();
  await page.goto('https://www.saucedemo.com/inventory.html');
});

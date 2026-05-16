import { test, expect } from '@playwright/test';
import { password, URL, username } from '../../test-setting';
import { LoginPage } from '../../pages/LoginPage';

test('Login page', async ({ page }) => {
  await page.goto(URL);
  await expect(page).toHaveTitle(/Swag Labs/);

  const loginPage = new LoginPage(page);
  await loginPage.login(username, password);
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

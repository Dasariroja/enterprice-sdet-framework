import { expect, test } from '@playwright/test';

test('accessibility', async ({ page }) => {
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
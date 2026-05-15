import { expect, test } from '@playwright/test';

test.skip('accessibility', async ({ page }) => {
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
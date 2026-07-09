//  chat gpt generate

import { test, expect } from '@playwright/test';

test('Search flights from Portland to Rome and validate 5 flights are displayed', async ({ page }) => {
  // 1. Navigate to BlazeDemo
  await page.goto('https://blazedemo.com');

  // 2. Search for flights from Portland to Rome
  await page.selectOption('select[name="fromPort"]', 'Portland');
  await page.selectOption('select[name="toPort"]', 'Rome');

  await page.locator('input[type="submit"]').click();

  // 3. Validate landing page URL
  await expect(page).toHaveURL(/reserve\.php/);

  // Validate that 5 flights are displayed
  const flightRows = page.locator('table tbody tr');
  await expect(flightRows).toHaveCount(5);
});
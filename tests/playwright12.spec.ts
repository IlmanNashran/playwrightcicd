// ----------using codegen
import { test, expect } from '@playwright/test';


test('TestCase12', async ({ page }) => {
  await page.goto('https://blazedemo.com/');
  await page.locator('select[name="fromPort"]').selectOption('Boston');
  await page.locator('select[name="toPort"]').selectOption('London');
  await page.getByRole('button', { name: 'Find Flights' }).click();
  await page.getByRole('cell', { name: 'Virgin America' }).first().click();
  await page.getByRole('cell', { name: '43', exact: true }).click();
  await page.getByRole('row', { name: 'Choose This Flight 43 Virgin' }).getByRole('button').click();
  await page.getByRole('textbox', { name: 'Name', exact: true }).click();
  await page.getByRole('textbox', { name: 'Name', exact: true }).fill('adasdasda');
  await page.getByRole('textbox', { name: 'Address' }).click();
  await page.getByRole('textbox', { name: 'Address' }).fill('2131');
  await page.getByText('Remember me').click();
  await page.getByText('Name on Card').click();
  await page.getByRole('heading', { name: 'Your flight from TLV to SFO' }).click();
  await page.getByText('Travel The World home Your').click();
});

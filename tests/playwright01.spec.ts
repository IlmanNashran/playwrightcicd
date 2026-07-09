//-------------My first playwright Spec File ----------

import { test, expect } from '@playwright/test';    
//test for test the page ,expect for validation of the page

//nak test nama google.com
test("TestCase1", async ({ page }/**fixture */) => {
    await page.goto("https://www.google.com/") //navigate to google.com
    await expect(page).toHaveTitle(/Google/) //validate the title of the page
    await page.waitForTimeout(2000) //wait for 2 seconds
})
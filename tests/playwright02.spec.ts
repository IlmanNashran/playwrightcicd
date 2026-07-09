//-------------Validating TextBox Existence & Visibility ----------

import { test, expect } from '@playwright/test';    


test("TestCase2", async ({ page }) => {
    await page.goto("https://www.google.com/") //navigate to google.com
    let textbox = await page.locator("css=#APjFqb") //locate the text box
    await textbox.highlight() //highlight the text box
    await expect(textbox).toBeEnabled() //validate the text box is enabled
    await expect(textbox).toBeVisible() //validate the text box is visible

    await page.waitForTimeout(3000) //wait for 3 seconds
})
//-------------Interaction with the frame ----------

import { test, expect } from '@playwright/test';    



test("TestCase4", async ({ page }) => {
    await page.goto("https://www.jqueryui.com/spinner/") //navigate to jQuery UI Spinner page
    await page.waitForTimeout(2000)

    const frame = await page.frameLocator(".demo-frame") //locate the frame
    await frame.locator(".ui-spinner-button").first().click() //click on the up button of the spinner
    await page.waitForTimeout(2000) //wait for 2 seconds

    await expect(frame.locator("#spinner")).toHaveAttribute("aria-valuenow", "1") //validate the value of the spinner is 1  

})


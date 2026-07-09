//-------------Interaction with browser Popup ----------

import { test, expect } from '@playwright/test';    

//aria-label="GitHub repository"
//  <span data-component="text" class="prc-Button-Label-FWkx3">Code</span>

test("TestCase4", async ({ page }) => {
    await page.goto("https://www.playwright.dev/") //navigate to Playwright website
    await page.locator("a[aria-label='GitHub repository']").click() //click on the GitHub link
    let popup = await page.waitForEvent("popup") //wait for the popup to open
    await popup.waitForLoadState()
    await popup.waitForTimeout(3000) //wait for 3 seconds

    //validate code button is visible in the popup using text Code
    await expect(popup.locator("h1.heading-element")).toBeVisible() //validate the octicon is visible
    await popup.close()

    await page.waitForTimeout(3000) //wait for 3 seconds

})


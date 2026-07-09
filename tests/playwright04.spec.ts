//-------------Mouse Move simulation ----------

import { test, expect } from '@playwright/test';    

//    a[role='button'].navbar__link
//   //li/a[text()='Java']

//    .navbar__title text
//<b class="navbar__title text--truncate">Playwright</b>  campoung 


test("TestCase4", async ({ page }) => {
 await page.goto("https://www.playwright.dev/") //navigate to Playwright website
 await page.locator("a[role='button']").hover()
 await page.waitForTimeout(3000) //wait for 3 seconds
 await expect(page.locator(".navbar__title")).toHaveText("Playwright") //validate the text of the element

 await page.locator("//li/a[text()='Java']").click()
 await page.waitForLoadState("domcontentloaded") //wait for the page to load
 await page.waitForTimeout(3000) //wait for 3 seconds

 await expect(page.locator(".navbar__title")).toHaveText("Playwright for Java") //validate the text of the element
})
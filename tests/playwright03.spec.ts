//-------------Validating search functionality ----------

import { test, expect } from '@playwright/test';    


test("TestCase2", async ({ page }) => {
    await page.goto("https://www.amazon.com/") //navigate to amazon.com
    //locate the dropdown and select Electronics from the dropdown
    await page.locator("#searchDropdownBox").selectOption({label:'Electronics'}) //select Electronics from the dropdown
    //search the text box and enter the value
    await page.locator("#twotabsearchtextbox").fill("hp laptop")
    //click the search button
    await page.locator("#nav-search-submit-button").click() 

    await page.waitForTimeout(3000) //wait for 3 seconds
    
    //take screenshot of the page
    await page.screenshot({path:"amazonresult.png"}) 

})
//----- Moudel 6 lab  -----

//https://blazedemo.com/

import { test, expect } from '@playwright/test'

test("TestCase7", async ({page})=>{
    await page.goto("https://blazedemo.com/") //navigate to blazedemo.com
    await page.waitForTimeout(2000) //wait for 2 seconds


    await page.locator("select[name='fromPort']").selectOption({label:'Boston'}) //select Boston from the dropdown
    await page.waitForTimeout(2000) //wait for 2 seconds


    await page.locator("select[name='toPort']").selectOption({label:'London'}) //select London from the dropdown
    await page.waitForTimeout(2000) //wait for 2 seconds


    await page.locator("input[type='submit']").click() //click on the search flight button
    await page.waitForTimeout(2000) //wait for 2 seconds


    await expect(page.locator("table.table tbody tr")).toHaveCount(5) //validate 5 flights are displayed
    
})




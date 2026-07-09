// ----------using POM
import { test, expect } from '@playwright/test';
import HomepagePOM from '../pages/BlazeDemoHomepagePOM';
import ResultpagePOM from '../pages/BlazeDemoResultpagePOM';  
import PurchasepagePOM from '../pages/BlazeDemoPurchasepagePOM';  
import ConfirmationpagePOM from '../pages/BlazeDemoConfirmationpagePOM';

test('TestCase13', async ({ page }) => {
  await page.goto('https://blazedemo.com/'); 
  const homepage = new HomepagePOM(page);
  // await page.pause()

  await homepage.getFromCityListbox().selectOption('Boston');
  await homepage.getToCityListbox().selectOption('London');
  await homepage.getFindFlightsButton().click();

  const resultPage = new ResultpagePOM(page);
  await resultPage.getFlightButton(1).click(); // Click the first flight button

  await page.waitForTimeout(2000); // Wait for 2 seconds to observe the result

  const purchasePage = new PurchasepagePOM(page);
  await purchasePage.getNameTextbox().fill('John Doe');
  await purchasePage.getAddressTextbox().fill('123 Main St');
  await purchasePage.getCityTextbox().fill('New York');
  await purchasePage.getStateTextbox().fill('NY');
  await purchasePage.getZipCodeTextbox().fill('10001');
  await purchasePage.getCardTypeListbox().selectOption('Visa');
  await purchasePage.getCreditCardNumberTextbox().fill('4111111111111111');
  await purchasePage.getCreditCardMonthTextbox().fill('12');
  await purchasePage.getCreditCardYearTextbox().fill('2025');
  await purchasePage.getNameOnCardTextbox().fill('John Doe');
  await purchasePage.getRememberMeCheckbox().check();
  await purchasePage.getPurchaseFlightButton().click();

  await page.waitForTimeout(2000); // Wait for 2 seconds to observe the result

  const confirmationPage = new ConfirmationpagePOM(page);
  const confirmationHeading = await confirmationPage.getConfirmationHeading().textContent();
  await page.waitForTimeout(2000); // Wait for 2 seconds to observe the result

  
});

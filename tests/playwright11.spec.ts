import { test, expect } from '@playwright/test';

const testData = {
	url: 'https://blazedemo.com/',
	titles: {
		home: 'BlazeDemo',
		purchaseUrl: 'purchase.php',
		confirmationUrl: 'confirmation.php',
		confirmationHeading: 'Thank you for your purchase today!'
	},
	defaults: {
		fromPort: 'Paris',
		toPort: 'Buenos Aires',
		optionCount: 7
	},
	route: {
		fromPort: 'Boston',
		toPort: 'London',
		resultsHeading: 'Flights from Boston to London:'
	},
	passenger: {
		name: 'John Doe',
		address: '123 Main Street',
		city: 'Boston',
		state: 'MA',
		zipCode: '02110'
	},
	card: {
		type: 'Visa',
		number: '4111111111111111',
		month: '12',
		year: '2028',
		nameOnCard: 'John Doe'
	},
	validation: {
		statusPattern: 'PendingCapture|Completed|Confirmed'
	}
};

test('search flights from Boston to London on BlazeDemo', async ({ page }) => {
	// Open BlazeDemo home page.
	await page.goto(testData.url);

	// Validate home page title.
	await expect(page).toHaveTitle(new RegExp(testData.titles.home));

	// Validate default selected cities in both listboxes.
	await expect(page.locator('select[name="fromPort"] option:checked')).toHaveText(testData.defaults.fromPort);
	await expect(page.locator('select[name="toPort"] option:checked')).toHaveText(testData.defaults.toPort);

	// Validate option count in both listboxes.
	await expect(page.locator('select[name="fromPort"] option')).toHaveCount(testData.defaults.optionCount);
	await expect(page.locator('select[name="toPort"] option')).toHaveCount(testData.defaults.optionCount);

	// Select Boston as departure city.
	await page.locator('select[name="fromPort"]').selectOption({ label: testData.route.fromPort });

	// Select London as destination city.
	await page.locator('select[name="toPort"]').selectOption({ label: testData.route.toPort });

	// Submit the search request.
	await page.getByRole('button', { name: 'Find Flights' }).click();

	// Validate that results page heading shows the expected route.
	await expect(page.locator('h3')).toHaveText(testData.route.resultsHeading);

	// Validate that at least one flight result row is available.
	const flightRows = page.locator('table.table tbody tr');
	await expect(flightRows.first()).toBeVisible();

	// Validate that each result has a "Choose This Flight" button.
	const chooseFlightButton = page.getByRole('button', { name: 'Choose This Flight' }).first();
	await expect(chooseFlightButton).toBeVisible();

	// Choose the first available flight.
	await chooseFlightButton.click();
	await expect(page).toHaveURL(new RegExp(testData.titles.purchaseUrl));

	// Fill the purchase form.
	await page.locator('input[name="inputName"]').fill(testData.passenger.name);
	await page.locator('input[name="address"]').fill(testData.passenger.address);
	await page.locator('input[name="city"]').fill(testData.passenger.city);
	await page.locator('input[name="state"]').fill(testData.passenger.state);
	await page.locator('input[name="zipCode"]').fill(testData.passenger.zipCode);
	await page.locator('select[name="cardType"]').selectOption({ label: testData.card.type });
	await page.locator('input[name="creditCardNumber"]').fill(testData.card.number);
	await page.locator('input[name="creditCardMonth"]').fill(testData.card.month);
	await page.locator('input[name="creditCardYear"]').fill(testData.card.year);
	await page.locator('input[name="nameOnCard"]').fill(testData.card.nameOnCard);

	// Submit purchase and validate confirmation details.
	await page.getByRole('button', { name: 'Purchase Flight' }).click();
	await expect(page).toHaveURL(new RegExp(testData.titles.confirmationUrl));
	await expect(page.getByRole('heading', { level: 1 })).toHaveText(testData.titles.confirmationHeading);
	await expect(page.locator('td:has-text("Id") + td')).toHaveText(/\S+/);
	await expect(page.locator('td:has-text("Status") + td')).toHaveText(new RegExp(testData.validation.statusPattern));
});
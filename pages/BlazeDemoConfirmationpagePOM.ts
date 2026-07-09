export default class ConfirmationPagePOM {
	page: any;

	constructor(page: any) {
		this.page = page;
	}

	getConfirmationHeading() {
		return this.page.getByRole('heading', { level: 1 });
	}

	getIdValue() {
		return this.page.locator('td:has-text("Id") + td');
	}

	getStatusValue() {
		return this.page.locator('td:has-text("Status") + td');
	}

	getAmountValue() {
		return this.page.locator('td:has-text("Amount") + td');
	}

	getCardNumberValue() {
		return this.page.locator('td:has-text("Card Number") + td');
	}

	getExpirationValue() {
		return this.page.locator('td:has-text("Expiration") + td');
	}

	getAuthCodeValue() {
		return this.page.locator('td:has-text("Auth Code") + td');
	}

	getDateValue() {
		return this.page.locator('td:has-text("Date") + td');
	}
}

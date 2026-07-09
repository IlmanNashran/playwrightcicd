export default class PurchasePagePOM {
	page: any;

	constructor(page: any) {
		this.page = page;
	}

	getNameTextbox() {
		return this.page.locator('input[name="inputName"]');
	}

	getAddressTextbox() {
		return this.page.locator('input[name="address"]');
	}

	getCityTextbox() {
		return this.page.locator('input[name="city"]');
	}

	getStateTextbox() {
		return this.page.locator('input[name="state"]');
	}

	getZipCodeTextbox() {
		return this.page.locator('input[name="zipCode"]');
	}

	getCardTypeListbox() {
		return this.page.locator('select[name="cardType"]');
	}

	getCreditCardNumberTextbox() {
		return this.page.locator('input[name="creditCardNumber"]');
	}

	getCreditCardMonthTextbox() {
		return this.page.locator('input[name="creditCardMonth"]');
	}

	getCreditCardYearTextbox() {
		return this.page.locator('input[name="creditCardYear"]');
	}

	getNameOnCardTextbox() {
		return this.page.locator('input[name="nameOnCard"]');
	}

	getRememberMeCheckbox() {
		return this.page.locator('input[name="rememberMe"]');
	}

	getPurchaseFlightButton() {
		return this.page.getByRole('button', { name: 'Purchase Flight' });
	}
}

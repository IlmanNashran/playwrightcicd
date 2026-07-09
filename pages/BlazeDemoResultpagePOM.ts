
export default class ResultpagePOM {
    page: any;

    constructor(page: any) {
        this.page = page;
    }

    //rather then create method for each button, you can create a generic method to click any button by its text


    getFlightButton(btnIndex: number) {
        return this.page.locator(`//tbody/tr[${btnIndex}]/td/input`);
    }
}
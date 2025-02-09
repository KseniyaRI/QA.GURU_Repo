export class MainPage {
    constructor (page) {
        this.page = page;
        this.signupButton = page.getByRole('link', { name: 'Sign up' });
    }
    async gotoRegister() {
        await this.signupButton.click();
    }
    async open(URL_UI) {
        await this.page.goto(URL_UI);
    }
}
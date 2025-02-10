export class MainPage {
    constructor (page) {
        this.page = page;
        this.signupButton = page.getByRole('button', { name: 'Sign up' });
        this.profileButton = page.getByText(username);
        this.loginButton = page.getByRole('button', {name: 'Login'});
        this.homeButton = page.getByRole('button', {name: 'Home'});
        this.settingsButton = page.getByRole('button', {name: 'Settings'})
        this.logoutButton = page.getByRole('button', {name: 'Logout'});
        this.profileNameField = page.getByRole('navigation');
    }

    async gotoRegister() {
        await this.signupButton.click();
    }

    async gotoLogin() {
        await this.loginButton.click();
    }

    async logout() {
        await this.profileButton.click();
        await this.logoutButton.click();
    }

    async gotoSettings() {
        await this.profileButton.click();
        await this.profileNameField.click();
        await this.settingsButton.click();
    }

    async gotoHome() {
        await this.homeButton.click();
    }

    //переход по ссылке, указанной в constURL.js
    async open(URL_UI) {
        await this.page.goto(URL_UI);
    }
}
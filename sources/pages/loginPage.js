export class LoginPage {
    constructor (page) {
        this.page = page;
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.emailField = page.getByPlaceholder('Email');
        this.passwordField = page.getByPlaceholder('Password'); 
        }

        // вход с измененным паролем
    async login(email, newPassword) {
        await this.loginButton.click();
        await this.emailField.click();
        await this.emailField.fill(email);
        await this.passwordField.click();
        await this.passwordField.fill(newPassword);
        await this.loginButton.click();
    }

        //переход по ссылке, указанной в constURL.js
    async open(URL_UI) {
        await this.page.goto(URL_UI);
    }
}

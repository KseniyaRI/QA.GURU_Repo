export class LoginPage {
    constructor (page) {
        this.page = page;
        this.loginHeaderButton = page.getByRole('link', { name: 'Login' }); //кнопка LogIn в шапке сайта
        this.emailField = page.getByPlaceholder('Email');
        this.newPassword = page.getByPlaceholder('Password');
        this.loginCheckButton = page.getByRole('button', { name: 'Login' }); //кнопка LogIn на странице с полями email/password
        };

        // вход с измененным паролем
        async login(email, password) {
            await this.loginHeaderButton.click();
            await this.emailField.click();
            await this.emailField.fill(email);
            await this.newPassword.click();
            await this.newPassword.fill(password);
            await this.loginCheckButton.click();
        };
        };
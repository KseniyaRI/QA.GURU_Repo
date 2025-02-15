export class RegisterPage {
    constructor (page) {
        this.page = page;
        this.redisterButton = page.getByRole('link', { name: 'Sign up' });
        this.usernameField = page.getByPlaceholder('Your Name');
        this.emailField = page.getByPlaceholder('Email');
        this.passwordField = page.getByPlaceholder('Password');
        this.signupButton = page.getByRole('button', { name: 'Sign up' });
        };

    async register(username, email, password) {
        await this.redisterButton.click();
        await this.usernameField.click();
        await this.usernameField.fill(username);
        await this.emailField.click();
        await this.emailField.fill(email);
        await this.passwordField.click();
        await this.passwordField.fill(password);
        await this.signupButton.click();
    };
};

export class MainPage {
    constructor (page) {
        this.page = page;
        this.signupButton = page.getByRole('link', { name: 'Sign up' });
        this.loginHeaderButton = page.getByRole('button', { name: 'Login' }); //кнопка LogIn в шапке сайта
    };

    //переход по ссылке, указанной в constURL.js
    async open(URL_UI) {
        await this.page.goto(URL_UI);
    };

    async gotoRegister() {
        await this.signupButton.click();
    };
};
export class changePasswordPage {
    constructor (page) {
        this.page = page;
        this.editPasswordField = page.getByRole('textbox', { name: 'Password' }); //поле ввода нового пароля
        this.updateSettingsButton = page.getByRole('button', { name: 'Update Settings' }); //кнопка изменения пароля
        }

    async changePassword(newPassword) {
        await this.editPasswordField.click();
        await this.editPasswordField.fill(newPassword);
        await this.updateSettingsButton.click();
    }
}
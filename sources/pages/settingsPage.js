export class SettingsPage {
    constructor(page, username) {
        this.page = page;
        this.profileNameField = page.getByText(username);
        this.settingsButton = page.getByRole('link', { name: 'Settings' });
        this.newPasswordField = page.getByPlaceholder('Password');
        this.updateSettingsButton = page.getByRole('button', { name: 'Update Settings' });
        this.logoutButton = page.getByRole('link', { name: 'Logout' });
      };
    
    async gotoOpenDropDownMenu() {
      await this.profileNameField.click();  
  };

    async gotoUpdatePasswordSetting() {
      await this.settingsButton.click();
  };
    
    async gotoUserLogout() {
      await this.logoutButton.click();
  };

    async updatePassword(valuePassword) {
    await this.gotoOpenDropDownMenu();
    await this.gotoUpdatePasswordSetting();
    await this.newPasswordField.click();
    await this.newPasswordField.fill(valuePassword);
    await this.updateSettingsButton.click();
  };

    async logout() {
      await this.gotoOpenDropDownMenu();
      await this.gotoUserLogout();
  };
};
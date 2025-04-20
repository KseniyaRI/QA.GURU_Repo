import { test, expect } from '@playwright/test'; 
import { MainPage, RegisterPage, YourFeedPage, SettingsPage, LoginPage } from '../sources/pages/index.js';
import { UserBuilder, NewPasswordBuilder } from '../sources/helpers/builder/index.js';
import { URL_UI } from '../sources/constURL/constURL.js';

const userBuilder = new UserBuilder()
      .addUsername()
      .addEmail()
      .addPassword()
      .generateUser();

const newPasswordBuilder = new NewPasswordBuilder()
      .addNewPassword()
      .generateNewPassword();

test.describe('Регистрация пользователя перед публикацией статьи', () => {
  test.beforeEach(async ({ page }) => {
      const mainPage = new MainPage(page);
      const registerPage = new RegisterPage(page);
      
      await mainPage.open(URL_UI);
      await mainPage.gotoRegister();
      await registerPage.register(userBuilder.username, userBuilder.email, userBuilder.password);
  });

test('Пользователь может залогиниться в системе с новым паролем', async ({page}) => {
    const settingsPage = new SettingsPage(page, userBuilder.username);
    await settingsPage.updatePassword(newPasswordBuilder.value);
    await settingsPage.logout();

    const loginPage = new LoginPage(page);
    await loginPage.login(userBuilder.email, newPasswordBuilder.value);

    const yourFeedPage = new YourFeedPage(page, userBuilder.username);

    await expect(yourFeedPage.profileNameField).toContainText(userBuilder.username);
    });
});
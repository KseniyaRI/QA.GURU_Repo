import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { MainPage } from '../sources/pages/mainPage.js';
import { RegisterPage } from '../sources/pages/registerPage.js';
import { SettingsPage } from '../sources/pages/settingsPage.js';
import {URL_UI} from '../sources/constURL/constURL.js';

// создание пользователя
const user = {
  username: faker.person.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password({ length: 10 })
};

// создание нового пароля
const newPassword = {
    valuePassword: faker.internet.password({ length: 10 })
};

test.describe('Регистрация пользователя перед публикацией статьи', () => {
  test.beforeEach(async ({ page }) => {
      const mainPage = new MainPage(page);
      const registerPage = new RegisterPage(page);
      
      await mainPage.open(URL_UI);
      await mainPage.gotoRegister();
      await registerPage.register(user.username, user.email, user.password);
  });

  test('Пользователь может изменить пароль', async ({page}) => {
    const settingsPage = new SettingsPage(page, user.username);
    await settingsPage.updatePassword(newPassword.valuePassword);

    await expect(page.getByPlaceholder('Password')).not.toHaveValue('');
    await expect(settingsPage.updateSettingsButton).not.toBeVisible();
  });
});
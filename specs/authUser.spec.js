import { test, expect } from '@playwright/test';
import { MainPage, RegisterPage, YourFeedPage } from '../sources/pages/index.js';
import { URL_UI } from '../sources/constURL/constURL.js';
import { UserBuilder } from '../sources/helpers/builder/index.js';

const userBuilder = new UserBuilder()
    .addUsername()
    .addEmail()
    .addPassword()
    .generateUser();

test('Пользователь может авторизоваться с указанием уникального логина и пароля', async ({page}) => {
  const mainPage = new MainPage(page);
  const registerPage = new RegisterPage(page);
  const yourFeedPage = new YourFeedPage(page, userBuilder.username);

  await mainPage.open(URL_UI); // переход по ссылке, указанной в constURL.js
  await mainPage.gotoRegister(); 
  await registerPage.register(userBuilder.username, userBuilder.email, userBuilder.password);

  await expect(yourFeedPage.profileNameField).toContainText(userBuilder.username);
});

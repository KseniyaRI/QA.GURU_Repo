import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { MainPage } from '../../sources/pages/mainPage.js';
import { RegisterPage } from '../../sources/pages/registerPage.js';
import { YourFeedPage } from '../../sources/pages/yourFeedPage.js';
import { URL_UI } from '../../sources/constURL/constURL.js';

//создание пользователя
const user = {
  username: faker.person.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password({ length: 10 })
};

test('Пользователь может авторизоваться с указанием уникального логина и пароля', async ({page}) => {
  const mainPage = new MainPage(page);
  const registerPage = new RegisterPage(page);
  const yourFeedPage = new YourFeedPage(page, user.username);

  await mainPage.open(URL_UI); // переход по ссылке, указанной в constURL.js
  await mainPage.gotoRegister(); 
  await registerPage.register(user.username, user.email, user.password);

  await expect(yourFeedPage.profileNameField).toBeVisible();
  //await expect(yourFeedPage.profileNameField).toContainText(user.username);
});

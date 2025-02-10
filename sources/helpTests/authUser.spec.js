import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { MainPage } from '../pages/mainPage';
import { RegisterPage } from '../pages/registerPage';
import { YourFeedPage } from '../pages/yourFeedPage';
import {URL_UI} from '../sources/constURL/constURL';

/* 
import { ChangePasswordPage } from '../sources/pages/changePasswordPage';
import { LoginPage } from '../sources/pages/loginPage';
import { CreateArticlePage } from '../sources/pages/createArticlePage';
import { AddCommentPage } from '../sources/pages/addCommentPage';
*/

test('Пользователь может авторизоваться с указанием уникального логина и пароля', async ({page}) => {
  const user = {
    username: faker.person.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 10 })
  }

  const mainPage = new MainPage(page);
  const registerPage = new RegisterPage(page);
  const yourFeedPage = new YourFeedPage(page, username);
  
  /*
  const changePasswordPage = new ChangePasswordPage(page);
  const loginPage = new LoginPage(page);
  const createArticlerPage = new CreateArticlerPage(page);
  const addCommentPage = new AddCommentPage(page);
  */    

  await mainPage.open(URL_UI);   //переход по ссылке, указанной в constURL.js
  await mainPage.gotoRegister();   //переход на страницу регистрации нового пользователя
  await registerPage.register(username, email, password);   //непосредственно регистрация нового пользователя

  await expect(yourFeedPage.username).toBeVisible();
  await expect(yourFeedPage.username).toContainText(username);
  
});

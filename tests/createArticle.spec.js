import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { MainPage } from '../sources/sources/pages/mainPage.js';
import { RegisterPage } from '../sources/sources/pages/registerPage.js';
import { YourFeedPage } from '../pages/yourFeedPage.js';
import { CreateArticlePage } from '../sources/pages/createArticlePage.js';
import {URL_UI} from '../sources/constURL/constURL.js';

const user = {
  username: faker.person.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password({ length: 10 })
};

test.describe('Регистрация пользователя перед публикацией статьи', () => {
  test.beforeEach(async ({ page }) => {
      const mainPage = new MainPage(page);
      const registerPage = new RegisterPage(page);

      await mainPage.open(URL_UI);
      await mainPage.gotoRegister();
      await registerPage.register(username, email, password);
  });

test('Пользователь может создать статью с уникальным заголовком', async ({page}) => {
    const article = {
        articleTitle:  faker.book.title(),
        articleDescription: faker.lorem.text(),
        articleBody: faker.lorem.text()
    };

    const createArticlePage = new CreateArticlePage(page);

    await createArticlePage.gotoCreateArticle();
    await createArticlePage.createArticle(article.articleTitle, article.articleDescription, article.articleBody);

    await expect(articlerPage.articleTitle).toBeVisible();
    await expect(articlerPage.articleTitle).toContainText(article.articleTitle);
  });
});

import { test, expect } from '@playwright/test';
import { MainPage, RegisterPage, YourFeedPage, CreateArticlePage, ArticlePage } from '../sources/pages/index.js';
import { URL_UI } from '../sources/constURL/constURL.js';
import { UserBuilder, ArticleBuilder } from '../sources/helpers/builder/index.js';

const userBuilder = new UserBuilder()
      .addUsername()
      .addEmail()
      .addPassword()
      .generateUser();

const articleBuilder = new ArticleBuilder()
      .addTitle()
      .addDescription()
      .addBody()
      .generateArticle();

test.describe('Регистрация пользователя перед публикацией статьи', () => {
  test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);
  const registerPage = new RegisterPage(page);
  const yourFeedPage = new YourFeedPage(page, userBuilder.username);

  await mainPage.open(URL_UI);
  await mainPage.gotoRegister();
  await registerPage.register(userBuilder.username, userBuilder.email, userBuilder.password);
  });

  test('Пользователь может создать статью с уникальным заголовком', async ({page}) => {
    const createArticlePage = new CreateArticlePage(page);
    const articlePage = new ArticlePage(page, articleBuilder.title, articleBuilder.body);
    
    await createArticlePage.createArticle(articleBuilder.title, articleBuilder.description, articleBuilder.body);
    
    await expect(articlePage.publishArticleTitle).toBeVisible();
    await expect(articlePage.publishArticleBody).toBeVisible();
  });
});
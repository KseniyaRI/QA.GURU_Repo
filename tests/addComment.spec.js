import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { MainPage } from '../sources/pages/mainPage.js';
import { RegisterPage } from '../sources/pages/registerPage.js';
import { CreateArticlePage } from '../sources/pages/createArticlePage.js';
import { ArticlePage } from '../sources/pages/articlePage.js';
import {URL_UI} from '../sources/constURL/constURL.js';

// создание пользователя
const user = {
  username: faker.person.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password({ length: 10 })
};

// создание статьи
const article = {
  articleTitle: faker.string.alpha(10),
  articleDescription: faker.lorem.sentence(1),
  articleBody: faker.lorem.paragraphs(5)
};

 //  создание коментария к статье
 const comment = {
  commentBody: faker.lorem.sentence(3),
};

test.describe('Регистрация пользователя перед публикацией статьи', () => {
  test.beforeEach(async ({ page }) => {
      const mainPage = new MainPage(page);
      const registerPage = new RegisterPage(page);
      
      await mainPage.open(URL_UI);
      await mainPage.gotoRegister();
      await registerPage.register(user.username, user.email, user.password);
  }); 

  test('Добавление комментария к созданной статье', async ({page}) => {
      const createArticlePage = new CreateArticlePage(page, article.articleTitle, article.articleBody);
      await createArticlePage.gotoCreateArticle();
      await createArticlePage.createArticle(article.articleTitle, article.articleDescription, article.articleBody);
      
      const articlePage = new ArticlePage(page, article.articleTitle, article.articleBody);
      
      await articlePage.addArticleComment(comment.commentBody);
      
  // одна команда для проверки всех элементов, указанных в articlePage.js
      await articlePage.verifyAllElementsArticlePage();
  });
});
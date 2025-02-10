import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { RegisterPage } from '../sources/pages/registerPage';
import { CreateArticlePage } from '../sources/pages/createArticlePage';
import { AddCommentPage } from '../sources/pages/addCommentPage';
import { URL_UI } from '../sources/constURL';

test.describe('Регистрация пользователя и создание им статьи', () => {
    test.beforeEach(async ({page}) => {
        const mainPage = new MainPage(page);
        const registerPage = new RegisterPage(page);
        const yourFeedPage = new YourFeedPage(page, username);

        await mainPage.open(URL_UI);
        await mainPage.gotoRegister();
        await registerPage.register(username, email, password);

        await createArticlePage.addComment(createArticlePage.articleBody).toBeVisible();
        await expect(createArticlePage.articleBody).toContainText(articleBody);
    });
    
    test('Добавление комментария к созданной статье', async ({page}) => {
    const addCommentPage = new AddCommentPage(page, articleBody);
    
    
});
});
import { expect } from '@playwright/test';

//если статья успешно создалась, значит articleTitle – уникальный
//используем уникальный articleTitle и помним, что поля на странице могут быть изменены/удалены

export class ArticlePage {
    constructor(page, articleTitle, articleBody) {
        this.page = page;
        this.articleTitleField = page.getByText(articleTitle);
        this.articleBodyField = page.getByText(articleBody);
        this.articleCommentField = page.getByPlaceholder('Write a comment...');
        this.postCommentButton = page.getByRole('button', { name: 'Post Comment' });
    };

    async gotoAddArticleComment() {
        await this.articleCommentField.click();
    };
    
    async addArticleComment(articleComment) {
        await this.articleCommentField.click();
        await this.articleCommentField.fill(articleComment);
        await this.postCommentButton.click();
};

   // прячем проверку всех элементов (если хотя бы один не пройдет – упадет ошибка)
    async verifyAllElementsArticlePage() {
        await Promise.all([
            expect(this.articleTitleField).toBeVisible(),
            expect(this.articleBodyField).toBeVisible(),
            expect(this.articleCommentField).toBeVisible(),
            expect(this.postCommentButton).toBeVisible()
        ]);
};
};
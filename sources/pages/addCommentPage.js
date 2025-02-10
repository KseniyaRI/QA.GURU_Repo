export class AddCommentPage {
    constructor (page) {
        this.page = page;
        this.articleCommentField = page.getByRole('textbox', { name: 'Write a comment...' });
        this.publishArticleButton = page.getByRole('button', { name: 'Post Comment' });
    }

async createArticle(articleTitle, articleDescription, articleBody) {
    await this.newArticleButton.click();
    await this.articleTitleField.click();
    await this.articleTitleField.fill(articleTitle);
    await this.articleDescriptionField.click();
    await this.articleDescriptionField.fill(articleDescription);
    await this.articleBodyField.click();
    await this.articleBodyField.fill(articleBody);
    await this.publishArticleButton.click();
}

async addArticleComment(articleComment) {
    await this.articleCommentField.click();
    await this.articleCommentField.fill(articleComment);
    await this.postCommentButton.click();
}
}
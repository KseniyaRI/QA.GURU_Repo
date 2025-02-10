export class CreateArticlePage {
    constructor (page) {
        this.page = page;
        this.newArticleButton = page.getByRole('link', { name: ' New Article' });
        this.articleTitleField = page.getByRole('textbox', { name: 'Article Title' });
        this.articleDescriptionField = page.getByRole('textbox', { name: 'What\'s this article about?' });
        this.articleBodyField = page.getByRole('textbox', { name: 'Write your article (in' });
        this.publishArticleButton = page.getByRole('button', { name: 'Publish Article' });
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
}
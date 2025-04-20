export class CreateArticlePage {
    constructor(page) {
        this.page = page;
        this.newArticleButton = page.getByRole('link', { name: 'New Article' });
        this.articleTitleField = page.getByRole('textbox', { name: 'Article Title' });
        this.articleDescriptionField = page.getByRole('textbox', { name: 'What\'s this article about?' });
        this.articleBodyField = page.getByRole('textbox', { name: 'Write your article' });
        this.publishArticleButton = page.getByRole('button', { name: 'Publish Article' });
    };

    async gotoCreateArticle() {
        await this.newArticleButton.click();
    };
    
    async createArticle(title, description, body) {
        await this.gotoCreateArticle();
        await this.articleTitleField.click();
        await this.articleTitleField.fill(title);
        await this.articleDescriptionField.click();
        await this.articleDescriptionField.fill(description);
        await this.articleBodyField.click();
        await this.articleBodyField.fill(body);
        await this.publishArticleButton.click();
    };
};


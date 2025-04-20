export class ArticlePage {
    constructor(page, title, body, commentText) {
        this.page = page
        this.publishArticleTitle = page.getByText(title)
        this.publishArticleBody = page.getByText(body)
        this.commentTextField = page.locator("//div[@class = 'card']");
        this.articleCommentField = page.getByPlaceholder('Write a comment...')
        this.postCommentButton = page.getByRole('button', { name: 'Post Comment' })
    }

    async gotoAddArticleComment() {
        await this.articleCommentField.click();
    }
    
    async addArticleComment(text) {
        await this.articleCommentField.click()
        await this.articleCommentField.fill(text)
        await this.postCommentButton.click()
    }
};
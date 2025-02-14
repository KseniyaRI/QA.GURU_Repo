//если статья успешно создалась, значит articleTitle – уникальный
//используем уникальный articleTitle и помним, что поля на странице могут быть изменены/удалены

export class ArticlePage {
    constructor(page, articleTitle, articleBody, commentBody) {
        this.page = page;
        this.articleTitleField = page.getByText(articleTitle);
        this.articleBodyField = page.getByText(articleBody);
        this.commentBodyField = page.getByText(commentBody);
        this.articleCommentField = page.getByPlaceholder('Write a comment...');
        this.postCommentButton = page.getByRole('button', { name: 'Post Comment' });
    };

    async gotoAddArticleComment() {
        await this.articleCommentField.click();
    };
    
    async addArticleComment(commentBody) {
        await this.articleCommentField.click();
        await this.articleCommentField.fill(commentBody);
        await this.postCommentButton.click();
    };
};
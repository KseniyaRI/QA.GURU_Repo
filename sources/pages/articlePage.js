//если статья успешно создалась, значит articleTitle – уникальный
//используем уникальный articleTitle, так как поля добавления комментариев и проч. могут быть изменены/удалены

export class ArticlePage {
    constructor(page, articleTitle) {
        this.page = page;
        this.articleTitleField = page.getByText(articleTitle);
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
};
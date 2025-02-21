export class YourFeedPage {
    constructor(page, username) {
        this.page = page;
        this.profileNameField = page.getByText(username);
        this.yourFeedButton = page.getByRole('button', { name: 'Your Feed' });
        this.newArticleButton = page.getByRole('link', { name: 'New Article' });
        this.homeButton = page.getByRole('link', { name: 'Home' });
    };
};
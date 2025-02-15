import { expect } from '@playwright/test';

//если пользователь успешно создан, значит username – уникальный
//используем уникальный username и помним, что поля на странице могут быть изменены/удалены

export class YourFeedPage {
    constructor(page, username) {
        this.page = page;
        this.profileNameField = page.getByText(username);
        this.yourFeedButton = page.getByRole('button', { name: 'Your Feed' });
        this.newArticleButton = page.getByRole('link', { name: 'New Article' });
        this.homeButton = page.getByRole('link', { name: 'Home' });
    };
};
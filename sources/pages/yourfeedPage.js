//если пользователь успешно создан, значит username – уникальный
//используем уникальный username, так как поля на странице могут быть изменены/удалены

export class YourFeedPage {
    constructor(page, username) {
        this.page = page;
        this.profileNameFeild = page.getByText(username);
        this.yourFeedButton = page.getByRole('button', { name: 'Your Feed' });
    };
  };

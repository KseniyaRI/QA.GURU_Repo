// содание пользователя
import { faker } from '@faker-js/faker';

export class UserBuilder {
    addUsername() {
        this.userUsername = faker.person.firstName();
        return this;        
    }
    addEmail() {
        this.userEmail = faker.internet.email();
        return this;
    }
    addPassword() {
        this.userPassword = faker.internet.password({ length: 10 });
        return this;        
    }
    generateUser() {
        return {
            username: this.userUsername,
            email: this.userEmail,
            password: this.userPassword
        }
    }
}

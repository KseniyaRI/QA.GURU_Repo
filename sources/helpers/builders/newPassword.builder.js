// создание нового пароля
import { faker } from '@faker-js/faker';

export class NewPasswordBuilder {
    addNewPassword() {
        this.valuePassword = faker.internet.password({ length: 10 });
        return this;        
    };
    generateNewPassword() {
        return {
            value: this.valuePassword
        }
    }
}
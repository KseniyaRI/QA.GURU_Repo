// создание комментария к статье
import { faker } from '@faker-js/faker';

export class CommentBuilder {
    addComment() {
        this.commentText = faker.lorem.sentence(3);
        return this;        
    };
    generateComment() {
        return {
            text: this.commentText
        }
    }
}

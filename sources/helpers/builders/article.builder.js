// создание статьи
import { faker } from '@faker-js/faker';

export class ArticleBuilder {
    addTitle() {
        this.articleTitle = faker.string.alpha(10);
        return this;        
    }
    addDescription() {
        this.articleDescription = faker.lorem.sentence(1);
        return this;
    }
    addBody() {
        this.articleBody = faker.lorem.paragraphs(5);
        return this;        
    }
    generateArticle() {
        return {
            title: this.articleTitle,
            description: this.articleDescription,
            body: this.articleBody
        };
    }
}

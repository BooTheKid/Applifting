const { faker } = require('@faker-js/faker');

export class Forms {
    constructor(page){
        this.page = page;
        this.name = page.locator('input[name="name"]');
        this.email = page.locator('#footer-form input[name="email"]');
        this.message = page.locator('textarea[name="message"]');
        this.checkbox = page.getByLabel('I have read and understand');
    }

    getInTouch = async () => {
    
    const randomName = faker.person.fullName(); 
    const randomEmail = faker.internet.email();
    const randomMessage = faker.string.alphanumeric(5);

    await this.name.fill(randomName);
    await this.email.fill(randomEmail);
    await this.message.fill(randomMessage);
    await this.checkbox.check();
};


}
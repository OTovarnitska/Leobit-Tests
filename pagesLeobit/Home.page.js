
const { BasePage } = require('./Base.page');

export class HomePage extends BasePage {

    get mainHomePageText() 
        { return this.page.locator('.top-banner h1'); 
    }

    get freeConsultationButton() {
        return this.page.getByRole('link', { name: 'free consultation' })
    }

    async getMainHomePageText() {
        return this.mainHomePageText.textContent();
    }

    async clickOnFreeConsultation() {
        await this.freeConsultationButton.click();
    }
}

const { BasePage } = require('./Base.page');

export class ServicesPage extends BasePage{

    get breadCrumbServices() {
        return this.page.locator('[class="breadcrumb-item active"]');
    };

    get breadCrumbHome() {
        return this.page.getByRole('link', { name: 'Home' });
    };

    get pageTitleServices() {
        return this.page.locator('[class="title topblk__title"]');
    };

    get getExpertsConsultButton() {
        return this.page.locator('[data-type="top-banner-button"]')  
    };

    async getBreadCrumbServicesText() {
        return this.breadCrumbServices.textContent();
    };
    
    async getServicesPageTitleText() {
        return this.pageTitleServices.textContent();
    };

    async returnToHomePage() {
        return this.breadCrumbHome.click();
    };

    async clickOnGetExpertConsult() {
        await this.getExpertsConsultButton.click();
    }
}
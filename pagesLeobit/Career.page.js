const { BasePage } = require('./Base.page');

export class CareerPage extends BasePage{

    get breadCrumbCareer() {
        return this.page.getByLabel('breadcrumb').getByRole('link', { name: 'Career' });
    };

    get breadCrumbCareerWelcome() {
        return this.page.locator('[class="breadcrumb-item active"]');
    };

    get breadCrumbHome() {
        return this.page.getByRole('link', { name: 'Home' });
    };

    get pageTitleCareer() {
        return this.page.locator('.hero-header'); 
    };

    async getBreadCrumbCareerText() {
        return this.breadCrumbCareer.textContent();
    };

    async getBreadCrumbCareerWelcomeText() {
        return this.breadCrumbCareerWelcome.textContent();
    }
    
    async getCareerPageTitleText() {
        return this.pageTitleCareer.textContent();
    }

    async returnToHomePage() {
        return this.breadCrumbHome.click();
    }
}
const { BasePage } = require('./Base.page');

export class TechnologiesPage extends BasePage{

    get breadCrumbTechnologies() {
        return this.page.locator('[class="breadcrumb-item active"]');
    };

    get breadCrumbHome() {
        return this.page.getByRole('link', { name: 'Home' });
    };

    get pageTitleTechnologies() {
        return this.page.locator('[class="title topblk__title"]'); 
    };

    get getExpertsConsultButton() {
        return this.page.locator('[data-type="top-banner-button"]')  
    };

    async clickOnGetExpertConsult() {
        await this.getExpertsConsultButton.click();
    }

    async getMainHomePageText() {
        return this.mainHomePageText.textContent();
    }

    async getBreadCrumbTechnologiesText() {
        return this.breadCrumbTechnologies.textContent();
    }
    
    async getTechnologiesPageTitleText() {
        return this.pageTitleTechnologies.textContent();
    }

    async returnToHomePage() {
        return this.breadCrumbHome.click();
    }
}
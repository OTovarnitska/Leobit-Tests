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
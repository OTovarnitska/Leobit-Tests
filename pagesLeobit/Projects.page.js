const { BasePage } = require('./Base.page');

export class ProjectsPage extends BasePage{

    get breadCrumbProjects() {
        return this.page.locator('[class="breadcrumb-item active"]');
    };

    get breadCrumbHome() {
        return this.page.getByRole('link', { name: 'Home' });
    };

    get pageTitleProjects() {
        return this.page.locator('[class="title topblk__title"]'); 
    };

    get requestProjectEstButton() {
        return this.page.locator('[data-type="top-banner-button"]')  
    };

    async clickOnrequestProjectEstButton() {
        await this.requestProjectEstButton.click();
    }

    async getBreadCrumbProjectsText() {
        return this.breadCrumbProjects.textContent();
    }
    
    async getProjectsPageTitleText() {
        return this.pageTitleProjects.textContent();
    }

    async returnToHomePage() {
        return this.breadCrumbHome.click();
    }
}
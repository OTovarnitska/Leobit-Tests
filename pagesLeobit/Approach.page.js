const { BasePage } = require('./Base.page');

export class ApproachPage extends BasePage{

    get breadCrumbApproach() {
        return this.page.locator('[class="breadcrumb-item active"]');
    };

    get breadCrumbHome() {
        return this.page.getByRole('link', { name: 'Home' });
    };

    get pageTitleApproach() {
        return this.page.locator('.hero-header'); 
    };

    get getAConsultationButton() {
        return this.page.locator('[onclick="location.href=\'#footer\'"]') 
    };

    async clickOngetAConsultation() {
        await this.getAConsultationButton.click();
    }

    async getBreadCrumbApproachText() {
        return this.breadCrumbApproach.textContent();
    }
    
    async getApproachPageTitleText() {
        return this.pageTitleApproach.textContent();
    }

    async returnToHomePage() {
        return this.breadCrumbHome.click();
    }
}
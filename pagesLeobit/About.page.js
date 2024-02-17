const { BasePage } = require('./Base.page');

export class AboutPage extends BasePage{

    get breadCrumbAbout() {
        return this.page.locator('[class="breadcrumb-item active"]');
    };

    get breadCrumbHome() {
        return this.page.getByRole('link', { name: 'Home' });
    };

    get pageTitleAbout() {
        return this.page.locator('.hero-header'); 
    };

    async getBreadCrumbAboutText() {
        return this.breadCrumbAbout.textContent();
    }
    
    async getAboutPageTitleText() {
        return this.pageTitleAbout.textContent();
    }

    async returnToHomePage() {
        return this.breadCrumbHome.click();
    }
}
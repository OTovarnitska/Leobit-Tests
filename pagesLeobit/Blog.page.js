const { BasePage } = require('./Base.page');

export class BlogPage extends BasePage{

    get breadCrumbBlog() {
        return this.page.locator('[class="breadcrumb-item active"]');
    };

    get breadCrumbHome() {
        return this.page.getByRole('link', { name: 'Home' });
    };

    get pageTitleBlog() {
        return this.page.locator('.head__title'); 
    };

    
    get contactUsButton() {
        return this.page.locator('.side-button');
    };

    async clickOnContactUs() {
        await this.contactUsButton.click();
    }

    async getBreadCrumbBlogText() {
        return this.breadCrumbBlog.textContent();
    };
    
    async getBlogPageTitleText() {
        return this.breadCrumbBlog.textContent();
    };

    async returnToHomePage() {
        return this.breadCrumbHome.click();
    };
}
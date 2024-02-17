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
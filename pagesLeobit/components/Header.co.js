import { BasePage } from "../Base.page";
const { expect } = require('@playwright/test');

export class Header extends BasePage{

    get header()
        { return this.page.locator('.header-content'); 
    };

    get menu() {
        return this.page.locator('#mega-menu-mega_menu_navigation');
    }

    get servicesMenu() {
        return this.page.getByRole('link', { name: 'Services' }).first();
    }

    get industriesLink() {
        return this.page.locator('a[href="/industries/"]').first()
    }
    
    get solutionsLink() {
        return this.page.locator('a[href="https://leobit.com/solution/"]').first()
    }

    get expertiseMenu() {
        return this.page.getByRole('link', { name: 'Expertise' }).first();
    }

    get technologiesMenu() {
        return this.page.getByRole('link', { name: 'Technologies' }).first();;
    }

    get projectsMenu() {
        return this.page.getByRole('link', { name: 'Projects' }).first();;
    }

    get approachMenu() {
        return this.page.getByRole('link', { name: 'Approach' }).first();;
    }

    get aboutMenu() {
        return this.page.getByRole('link', { name: 'About' }).first();;
    }

    get careerMenu() {
        return this.page.getByRole('link', { name: 'Career' }).first();;
    }

    get blogMenu() {
        return this.page.getByRole('link', { name: 'Blog' }).first();;
    }

    get expandedMenu() {
        return this.page.locator('[aria-expanded]');
    }
    
    /*async waitForMenuExpands() {
        await this.waitForSelector(expandedMenu)
    }*/

    async clickOnServicesMenu() {
        await this.servicesMenu.dblclick();
    }

    async clickOnExpertiseMenu() {
        await this.expertiseMenu.dblclick();
    }

    async clickOnIndustriesLink() {
        await this.industriesLink.dblclick();
    }

    async clickOnSolutionsLink() {
        await this.solutionsLink.dblclick();
    }

    async clickOnTechnologiesMenu() {
        await this.technologiesMenu.click();
    }

    async clickOnProjectsMenu() {
        await this.projectsMenu.click();
    }

    async clickOnApproachMenu() {
        await this.approachMenu.click();
    }

    async clickOnAboutMenu() {
        await this.aboutMenu.click();
    }

    async clickOnCareerMenu() {
        await this.careerMenu.click();;
    }

    async clickOnBlogMenu() {
        await this.blogMenu.click();;
    }

    async hoverOnServicesMenu() {
        await this.servicesMenu.hover();
    }

    async hoverOnExpertiseMenu() {
        await this.expertiseMenu.hover();
    }

    async hoverOnTechnologiesMenu() {
        await this.technologiesMenu.hover();
    }

    async hoverOnApproachMenu() {
        await this.approachMenu.hover();
    }

    async hoverOnAboutMenu() {
        await this.aboutMenu.hover();
    }
    
}
    
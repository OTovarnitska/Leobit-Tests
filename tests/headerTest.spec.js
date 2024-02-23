import { expect } from '@playwright/test';
import { test } from '../fixture';

test.describe('Basic navigation test', () => {
    test.beforeEach('Navigate to Home page', async ({ page, homePage }) => {
      await page.goto('/');
      expect (await homePage.getMainHomePageText()).toBe('web and .net software development');
    });

    test('Should expand Service menu, navigate to Service page and back to Home page', async ({page, header, servicesPage}) => {
        await header.hoverOnServicesMenu();        
        await header.clickOnServicesMenu();
        //expect (await header.servicesMenu.getAttribute('aria-expanded')).toBe('true');
        await expect(page).toHaveURL('./services/');
        expect (await servicesPage.getServicesPageTitleText()).toBe('Services');
        expect (await servicesPage.getBreadCrumbServicesText()).toBe('Services');
        await servicesPage.returnToHomePage();
        await expect(page).toHaveURL('./')
    });

    test('Should expand Expertise menu and navigate to Expertise page', async ({page, header}) => {
        await header.hoverOnExpertiseMenu();
        //expect (await header.ExpertiseMenu.getAttribute('aria-expanded')).toBe('true');
        await header.clickOnExpertiseMenu();
        await expect(page).toHaveURL('./#');
    });

    test('Should navigate to Industries page and back to Home page', async ({page, header, industriesPage}) => {
        await header.hoverOnExpertiseMenu();
        await header.clickOnIndustriesLink()
        await expect(page).toHaveURL('./industries/');
        expect (await industriesPage.getIndustriesPageTitleText()).toBe('INDUSTRIES');
        expect (await industriesPage.getBreadCrumbIndustriesText()).toBe('Industries');
        await industriesPage.returnToHomePage();
        await expect(page).toHaveURL('./')
    });

    test('Should navigate to Solutions page and back to Home page', async ({page, header, solutionsPage }) => {
        await header.hoverOnExpertiseMenu();
        await header.clickOnSolutionsLink()
        await expect(page).toHaveURL('./solution/');
        expect (await solutionsPage.getSolutionsPageTitleText()).toBe('  SOLUTIONS');
        expect (await solutionsPage.getBreadCrumbSolutionsText()).toBe('Solution');
        await solutionsPage.returnToHomePage();
        await expect(page).toHaveURL('./')
    });

    test('Should navigate to Technologies page and back to Home page', async ({page, header, technologiesPage}) => {
        await header.hoverOnTechnologiesMenu();
        await header.clickOnTechnologiesMenu()
        await expect(page).toHaveURL('./technologies/');
        expect (await technologiesPage.getTechnologiesPageTitleText()).toBe('Technologies');
        expect (await technologiesPage.getBreadCrumbTechnologiesText()).toBe('Technologies');
        await technologiesPage.returnToHomePage();
        await expect(page).toHaveURL('./')
    });

    test('Should navigate to Approach page and back to Home page', async ({page, header, approachPage}) => {
        await header.hoverOnApproachMenu();
        await header.clickOnApproachMenu()
        await expect(page).toHaveURL('./approach/');
        expect (await approachPage.getApproachPageTitleText()).toBe('Approach');
        expect (await approachPage.getBreadCrumbApproachText()).toBe('Approach');
        await approachPage.returnToHomePage();
        await expect(page).toHaveURL('./')
    });

    test('Should navigate to About page and back to Home page', async ({page, header, aboutPage}) => {
        await header.hoverOnAboutMenu();
        await header.clickOnAboutMenu();
        await expect(page).toHaveURL('./about/');
        expect (await aboutPage.getAboutPageTitleText()).toBe(' ABOUT LEOBIT');
        expect (await aboutPage.getBreadCrumbAboutText()).toBe('About');
        await aboutPage.returnToHomePage();
        await expect(page).toHaveURL('./')
    });

    test('Should navigate to Projects page and back to Home page', async ({page, header, projectsPage}) => {
        await header.clickOnProjectsMenu();
        await expect(page).toHaveURL('./projects/');
        expect (await projectsPage.getProjectsPageTitleText()).toBe('Our Projects');
        expect (await projectsPage.getBreadCrumbProjectsText()).toBe('Projects');
        await projectsPage.returnToHomePage();
        await expect(page).toHaveURL('./')
    });

    test('Should navigate to Career page and back to Home page', async ({page, header, careerPage}) => {
        await header.clickOnCareerMenu();
        await expect(page).toHaveURL('./career/');
        expect (await careerPage.getCareerPageTitleText()).toBe('WELCOME TOLEOBIT');
        expect (await careerPage.getBreadCrumbCareerText()).toBe('Career');
        expect (await careerPage.getBreadCrumbCareerWelcomeText()).toBe('Welcome to Leobit');
        await careerPage.returnToHomePage();
        await expect(page).toHaveURL('./')
    });

    test('Should navigate to Blog page and back to Home page', async ({page, header, blogPage}) => {
        await header.clickOnBlogMenu();
        await expect(page).toHaveURL('./blog/');
        expect (await blogPage.getBlogPageTitleText()).toBe('Blog');
        expect (await blogPage.getBreadCrumbBlogText()).toBe('Blog');
        await blogPage.returnToHomePage();
        await expect(page).toHaveURL('./')
    });
});



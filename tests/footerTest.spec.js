import { expect } from '@playwright/test';
import { test } from '../fixture';

test.describe('Leave contact details test', () => {

    test.beforeEach('Navigate to Home page', async ({ page, homePage }) => {
      await page.goto('/');
      expect (await homePage.getMainHomePageText()).toBe('web and .net software development');
    });

    test('Navigate to footer block via Contact Us', async ({ page, header, footer }) => {
      await header.clickOnContactUsButton();
      await expect(page).toHaveURL('./#footer');
      expect(await footer.consultingButton.evaluate(button => button.classList.contains('active'))).toBe(true)
    })

    test('Navigate to footer block from Home page', async ({ page, homePage, footer }) => {
      await homePage.clickOnFreeConsultation();
      await expect(page).toHaveURL('./#footer');
      expect(await footer.consultingButton.evaluate(button => button.classList.contains('active'))).toBe(true)
    })

    test('Navigate to footer block from Services page', async ({ page, servicesPage}) => {
      await servicesPage.clickOnGetExpertConsult();
      await expect(page).toHaveURL('./#footer');
    })

    test('Navigate to footer block from Industries page', async ({ page, industriesPage}) => {
      await industriesPage.clickOnGetExpertConsult();
      await expect(page).toHaveURL('./#footer');
    })

    test('Navigate to footer block from Solutions page', async ({ header, page, solutionsPage}) => {
      await header.hoverOnExpertiseMenu();
      await header.clickOnSolutionsLink();
      await solutionsPage.clickOngetFreeQuate();
      await expect(page).toHaveURL('./solution/#footer');
    })

    test('Navigate to footer block from Technologies page', async ({ page, technologiesPage }) => {
      await technologiesPage.clickOnGetExpertConsult();
      await expect(page).toHaveURL('./#footer');
    })

    test('Navigate to footer block from Projects page', async ({ page, projectsPage }) => {
      await projectsPage.clickOnrequestProjectEstButton();
      await expect(page).toHaveURL('./#footer');
    })
    
    test('Navigate to footer block from Approach page', async ({ header, page, approachPage}) => {
      await header.clickOnApproachMenu();
      await approachPage.clickOngetAConsultation();
      await expect(page).toHaveURL('./approach/#footer');
    })

    test('Navigate to footer block from About page', async ({ header, page, aboutPage}) => {
      await header.clickOnAboutMenu();
      await aboutPage.clickOngetAConsultation();
      await expect(page).toHaveURL('./about/#footer');
    })

    test('Navigate to footer block from Blog page', async ({ header, page, blogPage}) => {
      await header.clickOnBlogMenu();
      await blogPage.clickOnContactUs();
      await expect(page).toHaveURL('./blog/#footer');
    })

    test('Submit contact details', async ({ page, footer }) => {
      await footer.otherButton.click();
      await footer.fillInCustomerData('test name', 'test company', 'test@test.com', 'testing data submit on Contact form');
      await footer.addFileButton.setInputFiles('./testData/LeoTest.docx');
      expect(await footer.addFileLabel.evaluate(label => label.classList.contains('is-loading'))).toBe(true);
      await page.waitForSelector('.file-chosen')
      expect (await footer.getFileUploaded()).toContain('LeoTest.docx');
      await footer.submitRequestButton.click();
      await footer.cubeLoader.getAttribute("style", "display: flex; opacity: 1;");
      await footer.cubeLoader.getAttribute("style", "display: none; opacity: 0;");
      expect( await footer.successSentText).toHaveAttribute("style", "display: block;");  
    }) 

    test('Attaching file of invalid format', async ({ footer }) => {
      await footer.addFileButton.setInputFiles('./testData/test.txt');
      expect(await footer.invalidFileText()).toContain('Invalid file format')
    }) 

    test('Submitting form with empty Name', async ({ footer }) => {
      await footer.fillInCustomerData('', 'test company', 'test@test.com', 'testing data submit on Contact form');
      await footer.submitRequestButton.click();
      expect(await footer.getFieldValidInfo()).toContain('Required field!')
    }) 

    test('Submitting form with empty Company name', async ({ footer }) => {
      await footer.fillInCustomerData('test', '', 'test@test.com', 'testing data submit on Contact form');
      await footer.submitRequestButton.click();
      expect(await footer.getFieldValidInfo()).toContain('Required field!')
    }) 

    test('Submitting form with empty Email', async ({ footer }) => {
      await footer.fillInCustomerData('test', 'Company test', '', 'testing data submit on Contact form');
      await footer.submitRequestButton.click();
      expect(await footer.getFieldValidInfo()).toContain('Required field!')
    }) 

    test('Submitting form with empty Additional info', async ({ footer }) => {
      await footer.fillInCustomerData('test', 'Company test', 'test@test.com', '');
      await footer.submitRequestButton.click();
      expect(await footer.getFieldValidInfo()).toContain('Required field!')
    }) 

    test('Submitting with invalid Email', async ({ footer }) => {
      await footer.fillInCustomerData('test', 'Company test', 'test', 'testing data submit on Contact form');
      await footer.submitRequestButton.click();
      expect(await footer.getFieldValidInfo()).toContain('Please enter a valid e-mail address!')
    }) 

});

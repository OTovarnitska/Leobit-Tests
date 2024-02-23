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
    test('Navigate to footer block via Free Consultation', async ({ page, homePage, footer }) => {
      await homePage.clickOnFreeConsultation();
      await expect(page).toHaveURL('./#footer');
      expect(await footer.consultingButton.evaluate(button => button.classList.contains('active'))).toBe(true)
    })

    test('Submit contact details', async ({ page, footer }) => {
      await footer.otherButton.click();
      await footer.fillInCustomerData('test name', 'test company', 'test@test.com', 'testing data submit on Contact form');
      await footer.addFileButton.setInputFiles('testData\LeoTest.docx');
      expect (await footer.getFileUploaded()).toBe('LeoTest.docx');
      await footer.submitRequestButton.click()
      expect( await footer.successSentText).toBeVisible();  
    }) 

});

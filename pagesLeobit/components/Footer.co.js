import { BasePage } from "../Base.page";

export class Footer extends BasePage {

    get footer()
        { return this.page.locator('.footer'); 
    };
    
    get fullName()
        { return this.page.getByLabel('Full name ')
    };

    get companyName()
        { return this.page.getByLabel('Company name ').first()
    };

    get businessEmail()
        { return this.page.getByLabel('Business e-mail ')
    };

    get briefDescription()
        { return this.page.getByLabel('Brief description of business need ').first()
    };

    get consultingButton()
        { return this.page.getByText('consulting', { exact: true }).first()
    };

    get devTeamButton()
         { return this.page.getByText('development team', { exact: true }).first()
    }; 

    get softwareSolutionButton()
        { return this.page.getByText('software solution', { exact: true }).first()
    }

    get partnershipButton()
        { return this.page.getByText('partnership', { exact: true }).first()
    };

    get otherButton()
        { return this.page.getByText('other', { exact: true }).first()
    };

    get submitRequestButton()
        { return this.page.getByRole('button', { name: 'send request' })
    };

    get addFileButton()
        { return this.page.locator('label').filter({ hasText: 'add file' }).first()
    }

    get fileUploadedLabel()
        { return this.page.locator('.filename').first()
    };

    get successSentText()
        { return this.page.locator('.footer-form-success').first()
    };

    get submitRequestButton()
        { return this.page.locator('input.button.send-request[type="submit"]')
    }; 

    async fillInCustomerData (fullName, companyName, businessEmail, briefDescription) {
        await this.fullName.fill(fullName);
        await this.companyName.fill(companyName);
        await this.businessEmail.fill(businessEmail);
        await this.briefDescription.fill(briefDescription);
    };

    async getFileUploaded() {
        return this.fileUploadedLabel.textContent();
    }

}

import { BasePage } from "../Base.page";
import { page } from 'playwright';

export class Footer extends BasePage {

    get footer()
        { return this.page.locator('.footer').first(); 
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
    get addFileLabel()
        { return this.page.locator('.footer-add-file').first()
    }

    get fileUploadedLabel()
        { return this.page.locator('span.filename[data-default="add file"]').first()
    };

    get successSentText()
        { return this.page.locator('.footer-form-success')
    };

    get submitRequestButton()
        { return this.page.locator('input.button.send-request[type="submit"]')
    }; 

    get cubeLoader()
        { return this.page.locator('.cube-loader').first()
    }; 

    get invalidFile()
        { return this.page.locator('.alert-danger').first()
    }; 

    get fieldRequired()
        { return this.page.locator('.requiredError').first()
    };

    async fillInCustomerData (fullName, companyName, businessEmail, briefDescription) {
        await this.fullName.fill(fullName);
        await this.companyName.fill(companyName);
        await this.businessEmail.fill(businessEmail);
        await this.briefDescription.fill(briefDescription);
    };

    async getFieldValidInfo() {
        return this.fieldRequired.textContent();
    }

    async getFileUploaded() {
        return this.fileUploadedLabel.textContent();
    }

    async invalidFileText() {
        return this.invalidFile.textContent();
    }
}

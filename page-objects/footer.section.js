const { expect, Page } = require('@playwright/test');

export class FooterSection {
       /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page) {
        this.page = page;
        this.internationalBtn = page.getByText("International");
        this.backToTopBtn = page.getByText("Back to top");
        this.changeLocationHeader = page.getByText("Change Location");
        this.closeModalBtn = page.getByRole('button', { name: 'Close' });
    }


    async clickBackToTopBtn() {
        await this.backToTopBtn.click;
    }
}
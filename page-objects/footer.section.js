const { expect, Page } = require('@playwright/test');

export class FooterSection {
       /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page) {
        this.page = page;
        this.internationalBtn = page.getByTestId('footer:marketSitesCta');
        this.changeLocationHeader = page.getByText("Change Location");
        this.closeModalBtn = page.getByRole('button', { name: 'Close' });
    }

    async checkSocialLinks() {
        await expect(this.page.getByLabel('Facebook')).toHaveAttribute('href', 'https://www.facebook.com/Volvo');
        await expect(this.page.getByLabel('Instagram')).toHaveAttribute('href', 'http://instagram.com/volvocars');
        await expect(this.page.getByLabel('Twitter')).toHaveAttribute('href', 'https://twitter.com/volvocars');
        await expect(this.page.getByLabel('YouTube')).toHaveAttribute('href', 'https://www.youtube.com/user/VolvoCarsNews');
    }

    async checkFooterLinks() {
        await expect(this.page.getByRole('link', { name: 'Cookies' })).toHaveAttribute('href', 'https://www.volvocars.com/intl/v/legal/cookies');
        await expect(this.page.getByRole('link', { name: 'Legal'})).toHaveAttribute('href', 'https://www.volvocars.com/intl/v/legal/legal');
        await expect(this.page.getByRole('link', { name: 'Privacy'})).toHaveAttribute('href', 'https://www.volvocars.com/intl/legal?path=privacy/privacy-customer-privacy-policy');
        await expect(this.page.getByRole('link', { name: 'Social Media'})).toHaveAttribute('href', 'https://www.volvocars.com/intl/v/legal/social-media');
        await expect(this.page.getByRole('link', { name: 'Tell Us'})).toHaveAttribute('href', 'https://www.volvocars.com/intl/v/legal/tell-us-reporting-line');
    }
}
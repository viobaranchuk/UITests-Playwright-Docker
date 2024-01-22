const { expect } = require('@playwright/test');

export class CookiesModalPage {

    /**
   * @param {import('@playwright/test').Page} page
   */
   
    constructor(page) {
        this.page = page;
        this.cookiesBunner = page.locator('#onetrust-banner-sdk');
        this.acceptCookiesBtn = page.locator('#onetrust-accept-btn-handler');
        this.cookieSettingsBtn = page.locator('#onetrust-pc-btn-handler');
        this.rejectAllBtn = page.locator('onetrust-reject-all-handler');
    }

    async acceptCookies() {
        await this.acceptCookiesBtn.click();
        await expect(this.cookiesBunner).not.toBeVisible();
    }


    // async acceptCookies() {
    //     await this.acceptCookiesBtn.click();
    //     expect(this.cookiesBunner).not.toBeVisible;
    // }

    // async rejectAllCookies() {
    //     await this.rejectAllBtn.click();
    // }

    // async openCookieSettings() {
    //     await this.cookieSettingsBtn.click();
    // }

}
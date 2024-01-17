
const { BasePage } = require("./base.page");
const { expect, Page } = require("@playwright/test");


export class SafetyPage extends BasePage{
  /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page){
        super(page);
    }

    // addBaseUrl in configFile and remove all path from here
    async goto() {
        await this.page.goto("https://www.volvocars.com/intl/v/safety/highlights");
    } 
}


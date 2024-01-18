const { expect, Page } = require("@playwright/test");
const { FooterSection } = require("./footer.section");
const { CookiesModalPage } = require("./cookies.modal");
const { HeaderSection } = require("./header.section");

export class BasePage {
    constructor(page) {
        this.page = page;
        this.cookieModal = new CookiesModalPage(page);
        this.header = new HeaderSection(page);
        this.footer = new FooterSection(page);
    }

}

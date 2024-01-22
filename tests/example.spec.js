const { test, expect } = require('@playwright/test');
const { SafetyPage } = require("../page-objects/safety.page");

test.beforeEach("Page Object Model", async ({ page }) => {
    const safetyPage = new SafetyPage(page);
    await safetyPage.goto();
    await safetyPage.acceptCookies();
});

test('Highlights page test', async ({ page }) => {
    const safetyPage = new SafetyPage(page);
//'Header checks'
//does not work in chrome sandbox
    await safetyPage.header.clickNavigationButtonByText('Our Cars');
    await safetyPage.closeExpandedPanel();
    await safetyPage.header.clickNavigationButtonByText('Shop');
    await safetyPage.closeExpandedPanel();
    await safetyPage.header.clickNavigationButtonByText('Owners');
    await safetyPage.closeExpandedPanel();
    await safetyPage.header.clickNavigationButtonByText('About us');
    await safetyPage.closeExpandedPanel();
});

test('Hightlits page content checks', async ({ page }) => {
    const safetyPage = new SafetyPage(page);
    await safetyPage.checkHeroImage1();
    await safetyPage.checkHeroImage2();
    await safetyPage.checkStatementText();
    await safetyPage.checkSliderIconTitles();
    await safetyPage.checkModelIntoTexts();
    await safetyPage.checkMediaHighlights();
    await safetyPage.checkLocalSubmenuLinks();
    await safetyPage.checkProductListCarousel();
    await safetyPage.checkDisclaimer();
});

test('Footer checks', async ({ page }) => {
    const safetyPage = new SafetyPage(page);
    await safetyPage.footer.checkSocialLinks();
    await safetyPage.footer.checkFooterLinks();
    await safetyPage.footer.internationalBtn.click();
    await safetyPage.closeExpandedPanel();
});

test('Navigation Bars comparison', async ({ page }) => {  
    const safetyPage = new SafetyPage(page);
    await safetyPage.header.clickNavigationButtonByText('Our Cars');
    await expect(page).toHaveScreenshot('OurCars-fullpage.png'), 
      { fullPage: true };
    await safetyPage.closeExpandedPanel();
    await safetyPage.footer.internationalBtn.click();
    await expect(page).toHaveScreenshot('International-fullpage.png'),
      { fullPage: true };
});
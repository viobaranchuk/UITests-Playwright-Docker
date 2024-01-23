const { test, expect } = require('@playwright/test');
const { SafetyPage } = require("../page-objects/safety.page");

test.beforeEach("Accept cookies on Safety-Highlights page", async ({ page }) => {
    const safetyPage = new SafetyPage(page);
    await safetyPage.goto();
    await safetyPage.acceptCookies();
});

//does not work with local test run because of chrome sandbox restrictions
test('Header navigation bar is expanded', async ({ page }) => {
    const safetyPage = new SafetyPage(page);
    await safetyPage.header.clickNavigationButtonByText('Our Cars');
    await safetyPage.closeExpandedPanel();
    await safetyPage.header.clickNavigationButtonByText('Shop');
    await safetyPage.closeExpandedPanel();
    await safetyPage.header.clickNavigationButtonByText('Owners');
    await safetyPage.closeExpandedPanel();
    await safetyPage.header.clickNavigationButtonByText('About us');
    await safetyPage.closeExpandedPanel();
});

test('Hightlits page content verification', async ({ page }) => {
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

test('Footer links verification', async ({ page }) => {
    const safetyPage = new SafetyPage(page);
    await safetyPage.footer.checkSocialLinks();
    await safetyPage.footer.checkFooterLinks();
});

test('Header Navigation Bar visual comparison', async ({ page }) => {  
    const safetyPage = new SafetyPage(page);
    await safetyPage.header.clickNavigationButtonByText('Our Cars');
    await expect.soft(page).toHaveScreenshot('OurCars-fullpage.png'), 
      { fullPage: true };
    await safetyPage.closeExpandedPanel();
});

test('Footer International Bar visual comparison', async ({ page }) => {
    const safetyPage = new SafetyPage(page);
    await safetyPage.footer.internationalBtn.click();
    await expect.soft(page).toHaveScreenshot('International-fullpage.png'),
      { fullPage: true };
    await safetyPage.closeExpandedPanel();
});
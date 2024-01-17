 const { test, expect } = require('@playwright/test');
// const { test } = require("./pages");
const { SafetyPage } = require("../page-objects/safety.page");


// test.describe('header tests',  (page) => {
//   let safetyPage;

//   test.beforeEach(async () => {
//     safetyPage = new SafetyPage(page);
//     await safetyPage.goto();
//     await safetyPage.cookieModal.acceptCookiesBtn.click();
//     expect(safetyPage.cookieModal.cookiesBunner()).not.toBe;
//   });

//   test.only('navigation ouer cars', async () => {
//     await safetyPage.header.ourCarsBtn.click();
//     expect(safetyPage.header.ourCarsExpandedSectiion().isVisible);
//   });

// });


  // const browserOptions = {
  //   headless: false,
  //   acceptInsecureCerts: true,
  //   permissions: ['scripting'],
  //   chromeOptions: {
  //     args: [
  //       "--no-sandbox",
  //       "--disable-dev-shm-usage",
  //       "--disable-infobars",
  //       "--window-size=1920,1080",
  //     ],
  //   },
  // }
  
// });

test("Page Object Model", async ({ page, browser }) => {
    const safetyPage = new SafetyPage(page);
    await safetyPage.goto();
    await safetyPage.cookieModal.acceptCookies();
    await expect(safetyPage.cookieModal.cookiesBunner).not.toBeVisible();
    await page.waitForLoadState('domcontentloaded');
    await expect(safetyPage.header.mainLogo).toHaveAttribute('href', 'https://www.volvocars.com/intl');
  
    
    //check all menu buttons
    await safetyPage.header.ourCarsBtn.click();
    await safetyPage.header.carsMenuCloseBtn.click();
    await page.waitForTimeout(3000);
 
}
);

test.only("Without POM", async ({ page }) => {
  await page.goto('https://www.volvocars.com/intl/v/safety/highlights');
  await page.waitForLoadState('domcontentloaded');
  await page.locator('#onetrust-accept-btn-handler').click();
  await page.getByRole('button', { name: 'Our Cars' }).click();
  await expect(page.getByTestId('nav:topNavCarMenu')).toBeVisible;
  await page.getByLabel('Main Navigation').getByRole('button', {name: "Our Cars"});
  await page.waitForLoadState('domcontentloaded');
  await expect(page.getByTestId('nav:carMenuCloseIcon')).toBeVisible;
  await page.getByTestId('nav:carMenuCloseIcon').click();
  await expect(page.getByRole('button', {name: 'Safe Space Technology'})).toHaveAttribute('aria-selected', 'true');
  await expect((page.getByTestId('SpringCarouselArrow:right'))).toBeVisible();
  await expect(page.getByTestId('Hero-1').getByTestId('hero:image'))
  .toHaveAttribute('src', 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/safety/safety-highlights-hero1.jpg?iar=0');
  
  
  await page.getByRole('button', {name: 'Our most acclaimed lifesaver'}).click();
  
  await page.getByRole('button', {name: 'Safe Space Technology'}).click();
  // await expect(page.getByTestId('sliderWithIcons:card1'))
  await page.getByRole('button', {name: 'Data-based research'}).click();
  // await expect(page.getByTestId('sliderWithIcons:card3')).toBeVisible();
  await page.pause();

  await expect(page.getByTestId('localSubMenu:links:culture&vision')).toHaveAttribute('href','/intl/v/safety/culture-vision');
  await expect(page.getByTestId('localSubMenu:links:features')).toHaveAttribute('href', '/intl/v/safety/features');
  await expect(page.getByTestId('localSubMenu:links:childsafety')).toHaveAttribute('href', '/intl/v/safety/child-safety');
  await expect(page.getByTestId('localSubMenu:links:research')).toHaveAttribute('href', '/intl/v/safety/research');
  await expect(page.getByTestId('localSubMenu:links:heritage')).toHaveAttribute('href', '/intl/v/safety/heritage');

    // await safetyPage.footer.internationalBtn.click();
    await page.pause();
    // await expect(safetyPage.footer.changeLocationHeader).toBeVisible;
    // await safetyPage.footer.closeModalBtn.click();

   //footer social media links
    await expect(page.getByLabel('Facebook')).toHaveAttribute('href', 'https://www.facebook.com/Volvo');
    await expect (page.getByLabel('Instagram')).toHaveAttribute('href', 'http://instagram.com/volvocars');
    await expect (page.getByLabel('Twitter')).toHaveAttribute('href', 'https://twitter.com/volvocars');
    await expect (page.getByLabel('YouTube')).toHaveAttribute('href', 'https://www.youtube.com/user/VolvoCarsNews');

    await expect (page.getByRole('link', { name: 'Cookies' })).toHaveAttribute('href', 'https://www.volvocars.com/intl/v/legal/cookies');
    await expect (page.getByRole('link', { name: 'Legal'})).toHaveAttribute('href', 'https://www.volvocars.com/intl/v/legal/legal');
    await expect (page.getByRole('link', { name: 'Privacy'})).toHaveAttribute('href', 'https://www.volvocars.com/intl/legal?path=privacy/privacy-customer-privacy-policy');
    await expect (page.getByRole('link', { name: 'Social Media'})).toHaveAttribute('href', 'https://www.volvocars.com/intl/v/legal/social-media');
    await expect (page.getByRole('link', { name: 'Tell Us'})).toHaveAttribute('href', 'https://www.volvocars.com/intl/v/legal/tell-us-reporting-line');
    
});
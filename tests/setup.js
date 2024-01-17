// const base = require('@playwright/test');
// const { SafetyPage } = require('../page-objects/SafetyPage');


// exports.test = base.test.extend({
//     safetyPage: async ({ page }, use) => {
//         const safetyPage = new SafetyPage(page);
//         await safetyPage.goto();
//         await safetyPage.cookieModal.acceptCookiesBtn();

//         use(safetyPage);
//     }
// })
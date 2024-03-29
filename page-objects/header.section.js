const { expect} = require('@playwright/test');
export class HeaderSection {
     /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page) {
        this.page = page;
        this.sideNavBtn = page.getByLabel('Menu');
        this.expandedMenuList = page.getByTestId("nav:sideNavigation");
        this.ourCarsSectiion = page.getByTestId('nav:carMenuDesktop');
        this.carsMenuCloseBtn = page.getByTestId('nav:carMenuCloseIcon');
        this.shopExpandedSection = page.locator('#site-nav-cars-menu-section-panel-1');
        this.mainLogo = page.getByRole('link', { name: 'Volvo Homepage' });  
    }

    async clickNavigationButtonByText(menuText) {
        await this.page.getByRole('button', { name: menuText }).click();
    }
}
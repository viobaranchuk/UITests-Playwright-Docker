
const { BasePage } = require("./base.page");
const { expect, Page } = require("@playwright/test");

export class SafetyPage extends BasePage{
  /**
   * @param {import('@playwright/test').Page} page
   * 
   */

    constructor(page){
        super(page);
        this.pagePath = "/intl/v/safety/highlights";
        this.pageTitle = "Safety - Highlights | Volvo Cars";
        this.heading = page.getByRole('heading', { name: 'Safety' });
        this.closeBtn = page.getByRole('button', { name: 'Close' });
        this.textStatement = page.getByTestId('TextStatement-1');
        this.localSubmenu = page.getByTestId('localSubMenu');
        this.heroImage1 = page.getByTestId('Hero-1').getByTestId('hero:image');
        this.heroImage2 = page.getByTestId('Hero-2').getByTestId('hero:image');
        this.modelIntro2 = page.getByTestId('ModelIntro-2');
        this.modelIntro3 = page.getByTestId('ModelIntro-3');
        this.modelIntro4 = page.getByTestId('ModelIntro-4');
        this.sliderIcon1 = page.getByTestId('sliderWithIcons:title1');
        this.sliderIcon2 = page.getByTestId('sliderWithIcons:title2');
        this.sliderIcon3 = page.getByTestId('sliderWithIcons:title3');
        this.modelIntro5 = page.getByTestId('ModelIntro-5');
        this.productListCarousel = page.getByTestId('productListCarousel');
        this.disclaimer = page.getByTestId('Disclaimer-1');
        
    };

    modelIntro2Text = "Volvo Cars has been a leader in automotive safety for decades, caring about the world we live in and the people around us. With our Safe Space Technology which includes all the standard safety features in a Volvo car, we help to keep you safe and make you feel safe.";
    modelIntro3Text = "We aim to pioneer safe and intelligent technology solutions in mobility to protect what is important to people in their everyday lives.";
    modelIntro4text = "Zero collisionsThe next level of safety relies on advanced technology. Therefore, we constantly strive to raise safety levels towards our new vision, which is an ambition to have no collisions at all.";
    modelIntro5Text = "Our learning never ends...";
    textStatement1 = "We focus on safety so you can drive with peace of mind";
    textMediaHighlights0 = "The evolution of safetyBy combining state-of-the-art hardware and software for our collision avoidance technology, we expect to further raise the level of safety inside and around our future cars.";
    textMediaHighlights1 = "Steering towards autonomous drivingThe next frontier in safety advancements will come with the development of unsupervised autonomous driving technology. Guided by our safety heritage and vision of zero collisions, we aim to spearhead that development.";
    disclaimerText = "Volvo Cars’ safety features complement safe driving practices and are not intended to enable or encourage distracted, aggressive, or otherwise  unsafe or illegal driving. Ultimately, the driver is responsible for the safe operation of the vehicle at all times. Described features may be optional and  availability may vary from one country to another";

    async goto() {
        await this.page.goto(this.pagePath);   
    } 

    async isLoaded() {
        expect(this.heading).toBeVisible()
    }

    async acceptCookies() {
        await this.cookieModal.acceptCookies();
        await this.isLoaded();
    }

    async closeExpandedPanel() {
        await this.closeBtn.click();
        await expect(this.header.expandedMenuList).not.toBeVisible();
    }

    async checkLocalSubmenuLinks() {
        await expect.soft(this.page.getByTestId('localSubMenu:links:highlights')).toHaveAttribute('href', '/intl/v/safety/highlights');
        await expect.soft(this.page.getByTestId('localSubMenu:links:culture&vision')).toHaveAttribute('href', '/intl/v/safety/culture-vision');
        await expect.soft(this.page.getByTestId('localSubMenu:links:features')).toHaveAttribute('href', '/intl/v/safety/features');
        await expect.soft(this.page.getByTestId('localSubMenu:links:childsafety')).toHaveAttribute('href', '/intl/v/safety/child-safety');
        await expect.soft(this.page.getByTestId('localSubMenu:links:research')).toHaveAttribute('href', '/intl/v/safety/research');
        await expect.soft(this.page.getByTestId('localSubMenu:links:heritage')).toHaveAttribute('href', '/intl/v/safety/heritage');
    }

    async checkHeroImage1() {
        await expect(this.heroImage1)
        .toHaveAttribute('src', 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/safety/safety-highlights-hero1.jpg?iar=0');
        await expect(this.heroImage1).toBeVisible();
    }
    async checkHeroImage2() {
        await expect(this.heroImage2)
        .toHaveAttribute('src', 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/safety/safety-highlights-hero2.jpg?iar=0');
        await expect(this.heroImage2).toBeVisible();
    }

    async checkStatementText() {
        await expect(this.textStatement).toContainText(this.textStatement1);
    }

    async checkSliderIconTitles() {
        await expect.soft(this.sliderIcon1).toHaveAttribute('aria-label', 'Safe Space Technology');
        await expect.soft(this.sliderIcon2).toHaveAttribute('aria-label','Our most acclaimed lifesaver');
        await expect.soft(this.sliderIcon3).toHaveAttribute('aria-label', 'Data-based research');
    }

    async checkModelIntoTexts() {
        await expect.soft(this.modelIntro2).toContainText(this.modelIntro2Text);
        await expect.soft(this.modelIntro3).toContainText(this.modelIntro3Text);
        await expect.soft(this.modelIntro4).toContainText(this.modelIntro4text);
        await expect.soft(this.modelIntro5).toContainText(this.modelIntro5Text);
    }

    async checkMediaHighlights() {
        await expect.soft(this.page.getByTestId('media-highlight-0:image')).toHaveAttribute('alt', 'A man driving a car looking straight ahead.');
        await expect.soft(this.page.getByTestId('media-highlight-0')).toContainText(this.textMediaHighlights0);
        await expect.soft(this.page.getByTestId('media-highlight-1:image')).toHaveAttribute('alt', 'A time-delay shot of what looks like a trail of red tail lamps on an icy road.');
        await expect.soft(this.page.getByTestId('media-highlight-1')).toContainText(this.textMediaHighlights1);
    }

    async checkProductListCarousel() {
        await expect(this.page.getByTestId('productListCarousel:title')).toHaveText('All recharge models');
        const itemsAmount  = await this.page.getByTestId('productListCarouselItem:category').count();      
        expect(itemsAmount).toBe(11);
    }

    async checkDisclaimer() {
        await expect.soft(this.disclaimer).toBeVisible();
        await expect.soft(this.disclaimer).toContainText(this.disclaimerText);
    }
}
exports.BasePage = class BasePage {

    /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page){
        this.page = page
        this.lblSignIn = page.locator("xpath=//h2[.='Sign in']");
    }

    async launchBrowser(){
        await this.page.goto("http://192.168.171.68:20000/");
    }
}
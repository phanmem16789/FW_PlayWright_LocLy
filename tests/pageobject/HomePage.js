const { BasePage } = require("./BasePage");

exports.HomePage = class HomePage extends BasePage{
    
    /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page){
        this.page = page;
    }
}
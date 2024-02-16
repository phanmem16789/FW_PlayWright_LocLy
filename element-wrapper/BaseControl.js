
exports.BaseControl = class BaseControl {
    // @param {import('@playwright/test').Page} page
    /**
     * 
     * @param locator
     */
    constructor(locator){
        this.locator = locator;
    }


}
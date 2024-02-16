const { test, expect } = require('@playwright/test');
const { BasePage } = require('../pageobject/BasePage');
const { LoginPage } = require('../pageobject/LoginPage');


test.describe('user login successfully', () =>{
    let loginPage;
    let basePage;

    test.beforeEach(async ({ page }) =>{
        basePage = new BasePage(page);
        loginPage = new LoginPage(page);
        await basePage.launchBrowser();
    })

    test('login', async () => {
        await loginPage.login("ma10@vp.com", "P@ssW0rd!@#");
    })
})
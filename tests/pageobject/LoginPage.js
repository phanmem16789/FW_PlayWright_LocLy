const { BasePage } = require("./BasePage");

exports.LoginPage = class LoginPage extends BasePage{

    /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page){
        super(page);
        this.txtUsername = page.locator('xpath=//input[@id=\'usernameInput\']');
        this.txtPassword = page.locator('xpath=//input[@id=\'passwordInput\']');
        this.btnSignIn = page.getByRole('button', { name: 'Sign in'});
    }

    async enterUsername(username){
        await this.txtUsername.fill(username);
    }

    async enterPassword(password){
        await this.txtPassword.fill(password);
    }

    async clickSignInButton(){
        await this.btnSignIn.click();
    }

    async login(username, password){
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickSignInButton();
    }
}
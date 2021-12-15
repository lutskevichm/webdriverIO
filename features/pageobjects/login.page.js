const Page = require('./page');
const logger = require('./../config/logger.config');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $("*[name='loginForm:j_username']");
    }

    get inputPassword() {
        return $("*[name='loginForm:j_password']");
    }

    get btnSubmit() {
        return $("*[name='loginForm:submitForm']");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, password) {
        await this.inputUsername.setValue(username);
        logger.info(`Username "${username}" is entered`);
        await this.inputPassword.setValue(password);
        logger.info(`Password "${password}" is entered`);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('ipb-app');
    }
}

module.exports = new LoginPage();
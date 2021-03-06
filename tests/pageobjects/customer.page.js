const Page = require('./page');
const logger = require('../config/logger.config');
const webdriverio = require('webdriverio');
let client = webdriverio;

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CustomerPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputFirstName() {
        return $("*[id='crmForm:generalInfo_firstName']");
    }

    get inputLastName() {
        return $("*[id='crmForm:generalInfo_lastName']");
    }

    get inputState() {
        return $("*[id='crmForm:addressInfo_0_stateProvCd']");
    }

    get inputCity() {
        return $("*[id='crmForm:addressInfo_0_city']");
    }

    get inputPostalCode() {
        return $("*[id='crmForm:addressInfo_0_postalCode']");
    }

    get inputAddressLine1() {
        return $("*[id='crmForm:addressInfo_0_addressLine1']");
        logger.error('Issue with address');
    }

    get btnSaveAndExit() {
        return $("*[id='topSaveAndExitLink']");
        logger.error('Customer is not saved');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to create customer
     */
    async fillName(firstname, lastname) {
        await this.inputFirstName.setValue(firstname);
        await this.inputLastName.setValue(lastname);
        logger.debug(`First name "${firstname}" and Last name "${lastname}" are entered`);
        await browser.execute('window.scrollTo(0, 200)');
    }

    async fillAddress(state, city, postalcode, addressline1) {
        client = await this.inputState;
        await client.scrollIntoView();
        await this.inputState.addValue(state);
        logger.debug(`State "${state}" is entered`);
        await browser.waitUntil(
            async () => (await this.inputState.getValue()) === state, {
                timeout: 5000,
                timeoutMsg: 'state is entered'
            }
        );
        await this.inputCity.click();
        await this.inputCity.setValue(city);
        logger.debug(`City "${city}" is entered`);
        await browser.waitUntil(
            async () => (await this.inputCity.getValue()) === city, {
                timeout: 5000,
                timeoutMsg: 'city is entered'
            }
        );
        await this.inputAddressLine1.doubleClick();
        await this.inputAddressLine1.setValue(addressline1);
        client = await this.inputAddressLine1;
        client.keys('Enter');
        logger.debug(`AddressLine1 "${addressline1}" is entered`);
        await browser.waitUntil(
            async () => (await this.inputAddressLine1.getValue()) === addressline1, {
                timeout: 5000,
                timeoutMsg: 'address line is entered'
            }
        );
        await browser.pause(5000);
        await this.inputPostalCode.doubleClick();
        await browser.pause(1000);
        await this.inputPostalCode.setValue(postalcode);
        logger.debug(`Zip code "${postalcode}" is entered`);
        await browser.waitUntil(
            async () => (await this.inputPostalCode.getValue()) === postalcode, {
                timeout: 13000,
                timeoutMsg: 'postal code is entered'
            }
        );
        await browser.pause(1000);
    }

    async saveAndExit() {
        await browser.execute("arguments[0].style.backgroundColor = '" + "blue" + "'", await this.btnSaveAndExit);
        await this.btnSaveAndExit.doubleClick();
        logger.debug(`Save and Exit button is clicked`);
        await browser.pause(1000);
        await browser.waitUntil(
            async () => (await $("*[id='customerHeaderContent']").isExisting()), {
                timeout: 13000
            }
        );
    }
}

module.exports = new CustomerPage();
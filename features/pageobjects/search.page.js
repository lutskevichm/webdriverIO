const Page = require('./page');
const logger = require('./../config/logger.config');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    get searchExtendedBtn() {
        return $("*[name='topQuickSearchForm:searchExtendedBtn']");
    }

    get createAccountBtnAlway() {
        return $("*[name='searchForm:createAccountBtnAlway']");
    }

    get createIndCustomer() {
        return $("*[id='searchForm:customerType:0']");
    }

    get confirmCreation() {
        return $("*[id='searchForm:yes']");
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to start Individual Customer creation
     */
    async createNewInd() {
        logger.info(`Search button is clicked`);
        await this.searchExtendedBtn.click();
        logger.info(`Create Customer button is clicked`);
        await this.createAccountBtnAlway.click();
        logger.info(`Individual Customer is selected`);
        await this.createIndCustomer.click();
        logger.info(`Customer creation is confirmed`);
        await this.confirmCreation.click();
    }
}

module.exports = new SearchPage();
const Page = require('./page');

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
        await this.searchExtendedBtn.click();
        await this.createAccountBtnAlway.click();
        await this.createIndCustomer.click();
        await this.confirmCreation.click();
    }
}

module.exports = new SearchPage();
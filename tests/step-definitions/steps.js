const {
    Given,
    When,
    Then
} = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const SearchPage = require('../pageobjects/search.page');
const CustomerPage = require('../pageobjects/customer.page');

const pages = {
    login: LoginPage
};

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password);
});

Then(/^I should navigate to Main page$/, async () => {
    await browser.waitUntil(
        async () => (await $("*[id='logoutForm:userDetails']").isExisting()), {
            timeout: 7000,
            timeoutMsg: 'tab is correct'
        }
    );
});

Then(/^I should navigate to Customer page$/, async () => {
    await browser.waitUntil(
        async () => (await $("*[id='customerMainTab:customerFirstTabsList:0:linkLabel']").isExisting()), {
            timeout: 7000,
            timeoutMsg: 'tab is correct'
        }
    );
});

When(/^I initiate Customer creation$/, async () => {
    await SearchPage.createNewInd();
});

When(/^I fill Customer (\w+) and (.+)$/, async (firstname, lastname) => {
    await CustomerPage.fillName(firstname, lastname);
});


When(/^I add address (\w+) and (\w+) and (\w+) and (.+)$/, async (state, city, postalcode, addressline1) => {
    await CustomerPage.fillAddress(state, city, postalcode, addressline1);
});

When(/^I save customer$/, async () => {
    await CustomerPage.saveAndExit();
});

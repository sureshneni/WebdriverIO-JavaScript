const loginPage = require('../pageobjects/login.po')
const testData = require('../config/test.config');
const { assert } = require('chai');
const { config } = require('../../wdio.conf');


describe("Login page tests", function() {

    it("Test user navigates to application", function() {
        browser.url('/');
        browser.pause(5000);
    })

    it("Test user login success", function() {
        loginPage.userLogin(testData.QA_APP_USERNAME, testData.QA_APP_PASSWORD)
        browser.pause(5000);
    })

    it("Verify Login page title", function() {
        var title = loginPage.getPageTitle();
        console.log("title: "+title);
        assert.equal(title, testData.QA_LOGIN_PAGE_TITLE)
    })

})
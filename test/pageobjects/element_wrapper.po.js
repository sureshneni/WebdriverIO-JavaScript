

class ElementWrapper {

    /**
     * This methodClick() clicks on the locator passes to this method.
     * @param {locator} element 
     */
    doClick(element) {
        element.waitForDisplayed();
        element.click();
    }

    /**
     * 
     * @param {locator} element 
     * @param {text to enetr in input field} inputText 
     */
    doSendText(element, inputText) {
        element.waitForDisplayed();
        element.setValue(inputText);
    }

    /**
     * 
     * @param {locator} element 
     */
    doGetText(element) {
        element.waitForDisplayed();
        return element.getText();
    }

    /**
     * This method will read current page title and return.
     * 
     * */
    doGetPageTitle() {
        console.log("browser.getTitle(): "+browser.getTitle())
        return browser.getTitle();
    }

    /**
     * 
     *This method closed the current session window.
     *
     */
    doCloseBrowser() {
        browser.closeWindow();
    }

    /**
     * method used to check wether element is enabled or not
     * returns true if element is enabled else returns false.
     * @param {locator} element 
     */
    doIsEnabled(element) {
        element.waitForDisplayed();
        return element.isEnabled();
    }
}

module.exports = new ElementWrapper();
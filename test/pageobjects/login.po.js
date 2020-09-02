
const wrapper = require('../pageobjects/element_wrapper.po');
const config = require('../config/test.config');

class LoginPage {

    get username() { return $('#username') }
    get password() { return $('#password') }
    get loginBtn() { return $('#loginBtn > i18n-string') }

    userLogin(uname, pwd) {
        //user enters username, password and click login button
        wrapper.doSendText(this.username, uname);
        wrapper.doSendText(this.password, pwd);
        wrapper.doClick(this.loginBtn);
    }

    getPageTitle() {
        return wrapper.doGetPageTitle();
    }

}

module.exports = new LoginPage();
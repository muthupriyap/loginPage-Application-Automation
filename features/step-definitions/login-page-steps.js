const {Given, Then, When} = require('cucumber');
const {baseURL, titleFromURL, browser } = require('../../config')
var assert = require('cucumber-assert');
const selector = require('../common/selector');
const helper = require('../common/browser');
// To Launch browser
const { Builder } = require('selenium-webdriver');
const driver = new Builder().forBrowser(browser).build();
const { BeforeAll, AfterAll } = require('cucumber')

// Browser Maximize
BeforeAll('Window Maximize', async function () {
    await driver.manage().window().maximize()
})

Given('the website visitor land on the QA experience page', async function () {
    await driver.get(baseURL)
    let getTitle = await driver.getTitle();
    assert.equal(getTitle, titleFromURL);
});

Then('the website visitor should able to see the login page successfully', async function () {
    await helper(driver).waitAndLocateByXpath(selector.loginScreen);
    let getCurrentWebUrl = await driver.getCurrentUrl();
    let webPageAppUrl = `${baseURL}login`;
    assert.equal(getCurrentWebUrl, webPageAppUrl)
});

Then(/^the website visitor enters the emailaddress "([^"]*)"$/, async function (email) {
    await helper(driver).waitAndLocateByXpath(selector.loginScreen);
    let emailFieldValidation = await helper(driver).findElement(selector.validatingEmailField).getText();
    assert.equal(emailFieldValidation, `${selector.userName}`)
    await helper(driver).findElement(selector.emailInput).sendKeys(email);
});

Then(/^the website visitor enters the password "([^"]*)"$/, async function (password) {
    let passwordFieldValidation = await helper(driver).findElement(selector.validatingPasswordField).getText();
    assert.equal(passwordFieldValidation, `${selector.passwordField}`)
    await helper(driver).findElement(selector.passwordInput).sendKeys(password);
});

When('the website visitor clicks on the login button', async function () {
    await helper(driver).waitAndLocateByXpath(selector.loginButton);
    let loginText = await helper(driver).findElement(selector.loginButton).getText();
    assert.equal(loginText, `${selector.loginField}`)
    await helper(driver).findElement(selector.loginButton).click();
});

Then('website visitor should navigate to the logged-in page successfully', async function () {
    await helper(driver).waitAndLocateByXpath(selector.successfulLogin);
    let textHeading = await helper(driver).findElement(selector.successfulLogin).getText();
    assert.equal(textHeading, selector.confirmationMessage);
});

When(/^the website visitor should able to see an email field "([^"]*)"$/, async function (InlineError) {
    let inlineValidation = await helper(driver).findElement(selector.inlineError).getText();
    assert.equal(inlineValidation, `${InlineError}`)
});

When(/^the website visitor should able to see an password field "([^"]*)"$/, async function (InlineError) {
    let inlineValidation = await helper(driver).findElement(selector.inlineError).getText();
    assert.equal(inlineValidation, `${InlineError}`)
});

Then(/^the website visitor enters invalid emailaddress "([^"]*)"$/, async function (email) {
    await helper(driver).waitAndLocateByXpath(selector.loginScreen);
    let emailFieldValidation = await helper(driver).findElement(selector.validatingEmailField).getText();
    assert.equal(emailFieldValidation, `${selector.userName}`)
    await helper(driver).findElement(selector.emailInput).sendKeys(email);
    await helper(driver).findElement(selector.inlineError);
});

Then(/^the website visitor enters invalid password "([^"]*)"$/, async function (password) {
    let passwordFieldValidation = await helper(driver).findElement(selector.validatingPasswordField).getText();
    assert.equal(passwordFieldValidation, `${selector.passwordField}`)
    await helper(driver).findElement(selector.passwordInput).sendKeys(password);
    await helper(driver).findElement(selector.inlineError);
});

When(/^the website visitor should able to an error in both fields "([^"]*)"$/, async function (InlineError) {
    let inlineValidation = await helper(driver).findElement(selector.inlineError).getText();
    assert.equal(inlineValidation, `${InlineError}`)
});

Then('website visitor should navigate to the logged-in page', async function () {
    let journeyConfirmation = await helper(driver).findElement(selector.confirmationLogged).getText();
    assert.Equal(journeyConfirmation, `${selector.confirmationMessage}`)
});

// browser close
AfterAll('end', async function () {
    await driver.quit();
});



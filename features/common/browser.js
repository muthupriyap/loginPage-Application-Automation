const {By, until} = require('selenium-webdriver');
const { timeout } = require ('../../config');

function browser(driver){

//function to get the element wait until

    function waitAndLocateByXpath(selector){
            return driver.wait(until.elementLocated(By.xpath(selector)), timeout); 
    }
    
//function to get the find the element
    function findElement(selector){
        try {
            return driver.findElement(By.xpath(selector), timeout);
        } catch (error) {
            return assert.ok(false,`--> Error Description: Unable to find the element for xPath, ${error}`);
        }      
    }
    return {
        waitAndLocateByXpath, findElement
    };
}
module.exports = browser;
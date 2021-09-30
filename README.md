Project Name:  

    This is login Application functionality project using cucumber.js

Page Name: `https://login.dev.qa-experience.com/login`

Prerequesites:

Node.js

NPM

cucumber-js

Major Packages:

cucumber - Cucumber.js is the JavaScript implementation of Cucumber and runs on the maintained Node.js versions.

Selenium webdriver - Webdriver for JavaScript

chromedriver - To interacts with chrome browser

cucumber-html-reporter - Generate Cucumber HTML report using bootstrap

cucumber-assert - It allows assertions in cucumber.js without extra-long stacktraces when an assertion fails

Directory Structure

Login_Functionality

├── README.md


└── e2e

    |
    ├── config.js
    
    |── cucumber.js
    
    │── index.js
    
    |── package.json
    
    ├── features
    
    │   └── login_page.feature
    
    |   └── common
    
    |       ├── browser.js
    
    |       ├── selector.js
    
    |   └── step_definitions
    
    |       ├── login_page.js
    
    └── Report
            

Install and Run

1. Install all the packages using `npm install @dependency names`

2. Run the tests using the command `npm test`


Report

/report/cucumber_report.html





**Project Name**  

    This is login Application functionality project using cucumber.js

Page Name: `https://login.dev.qa-experience.com/login`

**Prerequesites**

1. [Node.js](https://nodejs.org/en/)
2. [NPM](https://www.npmjs.com/)
3. [cucumber-js](https://www.npmjs.com/package/cucumber)

**Major Packages**
```gherkin
1. cucumber - Cucumber.js is the JavaScript implementation of Cucumber and runs on the maintained Node.js versions.
2. Selenium webdriver - Webdriver for JavaScript
3. chromedriver - To interacts with chrome browser
4. cucumber-html-reporter - Generate Cucumber HTML report using bootstrap
5.cucumber-assert - It allows assertions in cucumber.js without extra-long stacktraces when an assertion fails
```

**Directory Structure**

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
            

**Install and Run**

```js

1. Install all the packages using `npm i`

2. Run the tests using the command `npm test`
```

**Report**

/report/cucumber_report.html





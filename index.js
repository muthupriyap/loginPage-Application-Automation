var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    jsonFile: 'report/cucumber_report.json',
    output: 'report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "App Version":"0.3.2",
        "Test Environment": "QA Experience Environment",
        "Page Name": "https://login.dev.qa-experience.com/",
        "Browser": "Chrome",
        "Platform": "Mac OS",
        "Parallel": "Scenarios",
        "Executed": "Remote"  
    }
};

reporter.generate(options);
    
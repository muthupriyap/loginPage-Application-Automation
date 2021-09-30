Feature: Login sign in
  As a QA user
  I want to be able to sign in to qa experience portal

Scenario Outline: A user signing in with valid email and valid password should sign in successfully and the user identity should be visible on the page
    Given the website visitor land on the QA experience page 
    Then the website visitor should able to see the login page successfully
    Then the website visitor enters the emailaddress "<email>"
    Then the website visitor enters the password "<password>"
    When the website visitor clicks on the login button
    Then website visitor should navigate to the logged-in page successfully

Examples:
|email                 |password |
|test@qa-experience.com|Password1|


Scenario Outline: A user signing in with invalid email and valid password able to see an inline error message
    Given the website visitor land on the QA experience page 
    Then the website visitor should able to see the login page successfully
    Then the website visitor enters the emailaddress "<email>"
    Then the website visitor enters the password "<password>"
    When the website visitor should able to see an email field "<InlineError>"

Examples:
|email                 |password |InlineError  | 
|priyatest             |Password1|Error message|

Scenario Outline: A user signing in with valid email and invalid password able to see an inline error message
    Given the website visitor land on the QA experience page 
    Then the website visitor should able to see the login page successfully
    Then the website visitor enters the emailaddress "<email>"
    Then the website visitor enters the password "<password>"
    When the website visitor should able to see an password field "<InlineError>"

Examples:
|email                             |password |InlineError  | 
|test@qa-experience.com            |123      |Error message|

Scenario Outline: A user signing in enters invalid email and invalid password able to see an inline error messages
    Given the website visitor land on the QA experience page 
    Then the website visitor should able to see the login page successfully
    Then the website visitor enters invalid emailaddress "<email>"
    When the website visitor should able to see an email field "<InlineError>"
    Then the website visitor enters invalid password "<password>"
    When the website visitor should able to see an password field "<InlineError>"

Examples:
|email |password |InlineError  | 
|.     |123      |Error message|

#unhappy Path for catch error
Scenario Outline: A user signing in with valid email and valid password unable to find the elements
    Then the website visitor should able to see the login page successfully
    Then the website visitor enters the emailaddress "<email>"
    Then the website visitor enters the password "<password>"
    When the website visitor clicks on the login button
    Then website visitor should navigate to the logged-in page

Examples:
|email                 |password |
|test@qa-experience.com|Password1|

  
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "  As user, I want to to be able to login into zerobank under different roles with username and password.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify that warning message is displayed when password is not correct",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@negative_test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"wrong_username\" username and \"wrong_password\" password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that \"Login and/or password are wrong.\" message is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_verifies_that_message_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that warning message is displayed when username or password are blank",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@negative_test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"\" username and \"\" password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that \"Login and/or password are wrong.\" message is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_verifies_that_message_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
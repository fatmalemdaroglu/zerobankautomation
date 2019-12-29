Feature: Login
  As user, I want to to be able to login into zerobank under different roles with username and password.


  @positive_test
  Scenario: Login with valid credentials
    Given user is on the login page
    Then user logs in as user
    And user verifies that "Account Summary" page subtitle is displayed


  @negative_test
  Scenario: Verify that warning message is displayed when password is not correct
    Given user is on the login page
    Then user enters "wrong_username" username and "wrong_password" password
    And user verifies that "Login and/or password are wrong." message is displayed

  @negative_test
  Scenario: Verify that warning message is displayed when username or password are blank
    Given user is on the login page
    Then user enters "" username and "" password
    And user verifies that "Login and/or password are wrong." message is displayed
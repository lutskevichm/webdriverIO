Feature: Login

@smoke @regression
  Scenario Outline: As a user, I can log into the App
    Given I am on the login page
    When I login with <username> and <password>
    Then I should navigate to Main page

    Examples:
      | username  | password  | 
      | qa        | qa        | 


   


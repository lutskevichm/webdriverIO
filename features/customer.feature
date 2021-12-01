Feature: Customer Creation
 
  Scenario Outline: As a user, I can create a Customer

    Given I am on the login page
    When I login with <username> and <password>
    When I initiate Customer creation
    When I fill Customer <firstname> and <lastname>
    When I add address <state> and <city> and <postalcode> and <addressline1>
    When I save customer
    Then I should navigate to Customer page

    Examples:
      | username  | password  | firstname | lastname  | state | city      | postalcode| addressline1  |
      | qa        | qa        | qa2       | qa2       | AK    | New_York  | 12345     | some_address  |

   


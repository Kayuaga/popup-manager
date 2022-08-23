Feature: Popup Manager

  @popupManager
  Scenario: As a user, I want to open Foo popup
    Given I am opening "Main Page"
    Given I am on the "Main Page"
    Then "Click me button" is displayed
    When I click "Click me button"
    Then "Foo popup" is displayed

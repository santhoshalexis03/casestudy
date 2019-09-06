
Feature: Login Page
  I want to use this template for logging into 

 
  Scenario Outline: login
    Given the login page
    And give the username as "<username>"
    
    And give the password as "<password>"
    
    And click on the login button
    Then next page is displayed

 
    Examples: 
      | username   |password    |
      | santhosh   |password123 |
      | santhoswh  |passwo1rd123|
      | santhosh1  |passwor1d123|
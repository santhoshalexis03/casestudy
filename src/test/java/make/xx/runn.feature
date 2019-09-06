Feature: testcase
  To test the testmeapp


  Scenario Outline: signup test
    Given home page is displayed
    And sign up button is clicked
    And enter the user as "<user name>"
    And enter the first as "<first name>"
    And enter the last as "<last name>"
    And enter the pass as"<password>"
    And enter the confirm as "<confirm password>"  
    And enter the gender as"<gender>"
    And enter the email as "<email>"
    And enter the mobile as"<mobile number>"
    And enter the dob as"<dob>"
    And enter the address as"<address>"
    And enter the answer as"<answer>"
    And click on Register button
    Then Home page is displayed
    Examples:
     |user name |first name| last name |password   |confirm password |gender|email         |mobile number|dob        |address   |answer   | 
     |santhosxh  |santhosh  |alexis     |Password123|Password123      |male  |san@gmail.com |9876543422   |03/09/1997 |Coimbatore|Udumalpet|
     

  

    

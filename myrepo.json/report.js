$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:make/xx/runn.feature");
formatter.feature({
  "name": "testcase",
  "description": "  To test the testmeapp",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "signup test",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "home page is displayed",
  "keyword": "Given "
});
formatter.step({
  "name": "sign up button is clicked",
  "keyword": "And "
});
formatter.step({
  "name": "enter the user as \"\u003cuser name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enter the first as \"\u003cfirst name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enter the last as \"\u003clast name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enter the pass as\"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enter the confirm as \"\u003cconfirm password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enter the gender as\"\u003cgender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enter the email as \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enter the mobile as\"\u003cmobile number\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enter the dob as\"\u003cdob\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enter the address as\"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enter the answer as\"\u003canswer\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click on Register button",
  "keyword": "And "
});
formatter.step({
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user name",
        "first name",
        "last name",
        "password",
        "confirm password",
        "gender",
        "email",
        "mobile number",
        "dob",
        "address",
        "answer"
      ]
    },
    {
      "cells": [
        "santhosxh",
        "santhosh",
        "alexis",
        "Password123",
        "Password123",
        "male",
        "san@gmail.com",
        "9876543422",
        "03/09/1997",
        "Coimbatore",
        "Udumalpet"
      ]
    }
  ]
});
formatter.scenario({
  "name": "signup test",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "home page is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "dgg.home_page_is_displayed1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign up button is clicked",
  "keyword": "And "
});
formatter.match({
  "location": "dgg.sign_up_button_is_clicked()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the user as \"santhosxh\"",
  "keyword": "And "
});
formatter.match({
  "location": "dgg.enter_the_user_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the first as \"santhosh\"",
  "keyword": "And "
});
formatter.match({
  "location": "dgg.enter_the_first_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the last as \"alexis\"",
  "keyword": "And "
});
formatter.match({
  "location": "dgg.enter_the_last_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the pass as\"Password123\"",
  "keyword": "And "
});
formatter.match({
  "location": "dgg.enter_the_pass_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the confirm as \"Password123\"",
  "keyword": "And "
});
formatter.match({
  "location": "dgg.enter_the_confirm_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the gender as\"male\"",
  "keyword": "And "
});
formatter.match({
  "location": "dgg.enter_the_gender_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the email as \"san@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "dgg.enter_the_email_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the mobile as\"9876543422\"",
  "keyword": "And "
});
formatter.match({
  "location": "dgg.enter_the_mobile_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the dob as\"03/09/1997\"",
  "keyword": "And "
});
formatter.match({
  "location": "dgg.enter_the_dob_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the address as\"Coimbatore\"",
  "keyword": "And "
});
formatter.match({
  "location": "dgg.enter_the_address_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the answer as\"Udumalpet\"",
  "keyword": "And "
});
formatter.match({
  "location": "dgg.enter_the_answer_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Register button",
  "keyword": "And "
});
formatter.match({
  "location": "dgg.click_on_Register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "dgg.home_page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("classpath:make/xx/runn2.feature");
formatter.feature({
  "name": "Login Page",
  "description": "  I want to use this template for logging into ",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "give the username as \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "give the password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click on the login button",
  "keyword": "And "
});
formatter.step({
  "name": "next page is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "santhosh",
        "password123"
      ]
    },
    {
      "cells": [
        "santhoswh",
        "passwo1rd123"
      ]
    },
    {
      "cells": [
        "santhosh1",
        "passwor1d123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "apptest2.the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "give the username as \"santhosh\"",
  "keyword": "And "
});
formatter.match({
  "location": "apptest2.give_the_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "give the password as \"password123\"",
  "keyword": "And "
});
formatter.match({
  "location": "apptest2.give_the_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "apptest2.click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "next page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "apptest2.next_page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "apptest2.the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "give the username as \"santhoswh\"",
  "keyword": "And "
});
formatter.match({
  "location": "apptest2.give_the_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "give the password as \"passwo1rd123\"",
  "keyword": "And "
});
formatter.match({
  "location": "apptest2.give_the_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "apptest2.click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "next page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "apptest2.next_page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "apptest2.the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "give the username as \"santhosh1\"",
  "keyword": "And "
});
formatter.match({
  "location": "apptest2.give_the_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "give the password as \"passwor1d123\"",
  "keyword": "And "
});
formatter.match({
  "location": "apptest2.give_the_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "apptest2.click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "next page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "apptest2.next_page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("classpath:make/xx/ssss.feature");
formatter.feature({
  "name": "Login Page",
  "description": "  I want to use this template for logging into ",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the login page displayed",
  "keyword": "Given "
});
formatter.step({
  "name": "give username as \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "give password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click  the login button",
  "keyword": "And "
});
formatter.step({
  "name": "next page  displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "click the search bar",
  "keyword": "And "
});
formatter.step({
  "name": "enter the \"head\" in it",
  "keyword": "And "
});
formatter.step({
  "name": "from the suggestion select \"headphone\"",
  "keyword": "And "
});
formatter.step({
  "name": "click on search button",
  "keyword": "And "
});
formatter.step({
  "name": "click on add to cart button",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "santhosh",
        "password123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the login page displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "pkk3.the_login_page_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "give username as \"santhosh\"",
  "keyword": "And "
});
formatter.match({
  "location": "pkk3.give_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "give password as \"password123\"",
  "keyword": "And "
});
formatter.match({
  "location": "pkk3.give_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click  the login button",
  "keyword": "And "
});
formatter.match({
  "location": "pkk3.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "next page  displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "pkk3.next_page_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the search bar",
  "keyword": "And "
});
formatter.match({
  "location": "pkk3.click_the_search_bar()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#myInput\"}\n  (Session info: chrome\u003d76.0.3809.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027CDC2-D-4919N62\u0027, ip: \u002710.237.17.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.132, chrome: {chromedriverVersion: 76.0.3809.126 (d80a294506b4..., userDataDir: C:\\Users\\TRAINI~1.29\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:58225}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 2b76ae76d6365d26a73988b87fc1e193\n*** Element info: {Using\u003dcss selector, value\u003d#myInput}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat make.xx.pkk3.click_the_search_bar(pkk3.java:44)\r\n\tat ✽.click the search bar(classpath:make/xx/ssss.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "enter the \"head\" in it",
  "keyword": "And "
});
formatter.match({
  "location": "pkk3.enter_the_in_it(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "from the suggestion select \"headphone\"",
  "keyword": "And "
});
formatter.match({
  "location": "pkk3.from_the_suggestion_select(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "pkk3.click_on_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on add to cart button",
  "keyword": "And "
});
formatter.match({
  "location": "pkk3.click_on_add_to_cart_button()"
});
formatter.result({
  "status": "skipped"
});
});
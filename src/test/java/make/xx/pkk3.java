package make.xx;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class pkk3 {
	WebDriver driver;
	@Given("the login page displayed")
	public void the_login_page_displayed() {
		System.setProperty("webdriver.chrome.driver","C:\\san\\drivers\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
		
		 driver.get("http://10.232.237.143:443/TestMeApp/");
		 driver.findElement(By.cssSelector("#header > div:nth-child(1) > div > div > div.col-sm-8 > div > ul > li:nth-child(1) > a")).click();
	}

	@Given("give username as {string}")
	public void give_username_as(String a) {
		driver.findElement(By.cssSelector("#userName")).click();
		driver.findElement(By.cssSelector("#userName")).sendKeys(a);
	}

	@Given("give password as {string}")
	public void give_password_as(String b) {
		driver.findElement(By.cssSelector("#password")).sendKeys(b);
	}

	@Given("click  the login button")
	public void click_the_login_button() {
		driver.findElement(By.xpath("//input[@value='Login']")).click();
	}

	@Then("next page  displayed")
	public void next_page_displayed() {
	    
	}

	@Then("click the search bar")
	public void click_the_search_bar() {
		driver.findElement(By.cssSelector("#myInput")).click();
	}

	@Then("enter the {string} in it")
	public void enter_the_in_it(String c) throws InterruptedException {
		driver.findElement(By.cssSelector("#myInput")).sendKeys(c);
		Thread.sleep(5000);
	}

	
	

	@Then("click on search button")
	public void click_on_search_button() {
		driver.findElement(By.cssSelector("body > div.col-md-12.col-sm-12.col-xs-12 > form > input[type=submit]")).click();
	}

	@Then("click on add to cart button")
	public void click_on_add_to_cart_button() {
		driver.findElement(By.cssSelector("body > section > div > div > div.col-sm-9 > div > div > div > div:nth-child(3) > center > a")).click();
	}


}





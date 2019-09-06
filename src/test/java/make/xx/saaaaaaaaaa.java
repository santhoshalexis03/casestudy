package make.xx;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;

public class saaaaaaaaaa {
	
	WebDriver driver ;
	
	@Given("home page is being displayed")
	public void home_page_is_being_displayed() {
		
		System.setProperty("webdriver.chrome.driver","C:\\san\\drivers\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		 driver.get("http://10.232.237.143:443/TestMeApp/");
	}

	@Given("click on search details bar")
	public void click_on_search_details_bar() {
		
		driver.findElement(By.id("myInput")).click();
	}

	@Given("enter the product name as {string}")
	public void enter_the_product_name_as(String c) {
		
		driver.findElement(By.id("myInput")).sendKeys(c);
	   
	}

	@Given("click finddetails option")
	public void click_finddetails_option() {
	    driver.findElement(By.cssSelector("body > div.col-md-12.col-sm-12.col-xs-12 > form > input[type=submit]")).click();
	    
	}

	@Given("the add to cart button is clicked")
	public void the_add_to_cart_button_is_clicked() {
		
		driver.findElement(By.cssSelector("body > section > div > div > div.col-sm-9 > div > div > div > div:nth-child(3) > center > a")).click();
		
	   
	}

	@Given("the  login page is displayed")
	public void the_login_page_is_displayed() {
	   System.out.println("login page is displayed");
	}


}

	
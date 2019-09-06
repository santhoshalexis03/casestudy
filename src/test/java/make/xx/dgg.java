package make.xx;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class dgg {
	WebDriver driver;
	@Given("home page is displayed")
	public void home_page_is_displayed1() {
		System.setProperty("webdriver.chrome.driver","C:\\san\\drivers\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		 driver.get("http://10.232.237.143:443/TestMeApp/");
	}

	@Given("sign up button is clicked")
	public void sign_up_button_is_clicked() {
		driver.findElement(By.partialLinkText("SignUp")).click();
	}
	   
	

	@Given("enter the user as {string}")
	public void enter_the_user_as(String a) {
		driver.findElement(By.id("userName")).sendKeys(a);
	}

	@Given("enter the first as {string}")
	public void enter_the_first_as(String b) {
		driver.findElement(By.id("firstName")).sendKeys(b);
	}

	@Given("enter the last as {string}")
	public void enter_the_last_as(String c) {
		driver.findElement(By.id("lastName")).sendKeys(c);
	}

	@Given("enter the pass as{string}")
	public void enter_the_pass_as(String d) {
		driver.findElement(By.id("password")).sendKeys(d);
	}

	@Given("enter the confirm as {string}")
	public void enter_the_confirm_as(String e) {
		driver.findElement(By.id("pass_confirmation")).sendKeys(e);
	}

	@Given("enter the gender as{string}")
	public void enter_the_gender_as(String string) {
		driver.findElement(By.xpath("//input[@value='Male']")).click();
	}

	@Given("enter the email as {string}")
	public void enter_the_email_as(String f) {
		driver.findElement(By.id("emailAddress")).sendKeys(f);
	}

	@Given("enter the mobile as{string}")
	public void enter_the_mobile_as(String g) {
		driver.findElement(By.id("mobileNumber")).sendKeys(g);
	}

	@Given("enter the dob as{string}")
	public void enter_the_dob_as(String h) {
		driver.findElement(By.cssSelector("#dob")).click();
		driver.findElement(By.cssSelector("#dob")).sendKeys(h);
	   
	}

	@Given("enter the address as{string}")
	public void enter_the_address_as(String i) {
		driver.findElement(By.cssSelector("#address")).sendKeys(i);
	}

	@Given("enter the answer as{string}")
	public void enter_the_answer_as(String j) {
		Select a=new Select(driver.findElement(By.id("securityQuestion")));
		  a.selectByIndex(1);
		  driver.findElement(By.id("answer")).sendKeys(j);
	  
	}

	@Given("click on Register button")
	public void click_on_Register_button() {
		 driver.findElement(By.name("Submit")).click();
	}

	@Then("Home page is displayed")
	public void home_page_is_displayed() {
		System.out.println("Home page is displayed");
	    
	}


}
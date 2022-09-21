describe("MouseHover", function()
{
    it("MouseHoverTest", function()
    {
        browser.waitForAngularEnabled(false);
        browser.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        browser.manage().window().maximize();
        browser.sleep(3000);
        browser.element(by.xpath("//input[@name='username']")).sendKeys("Admin");
        browser.sleep(3000);
        browser.element(by.xpath("//input[@name='password']")).sendKeys("admin123");
        browser.element(by.xpath("//button[text()=' Login ']")).click();
        browser.sleep(3000);

        var admin=browser.element(by.xpath("//span[text()='Admin']"));
        browser.sleep(3000);
        browser.switchTo().frame(1);
        var usermgt=browser.element(by.xpath("//span[text()='User Management ']"));
        browser.sleep(3000);
        var user=browser.element(by.xpath("//a[text()='Users']"));

        browser.actions().mouseMove(admin).click().mouseMove(usermgt).click().mouseMove(user).click().perform();

        
    })
})
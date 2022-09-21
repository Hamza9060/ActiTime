describe("EmpLoginTest", function()
{
    it("EmpLogin", function()
    {
        browser.ignoreSynchronization=true;
        browser.get("https://demo.actitime.com/login.do");
        expect(browser.getCurrentUrl()).toBe('https://demo.actitime.com/login.do');
        browser.manage().window().maximize();
        browser.sleep(3000);
        browser.element(by.xpath("//input[@id='username']")).sendKeys("admin");
        browser.element(by.xpath("//input[@name='pwd']")).sendKeys("manager");
        browser.sleep(3000);
        browser.element(by.xpath("//div[text()='Login ']")).click();
        browser.sleep(3000);
        var userName=browser.element(by.xpath("//a[@class='userProfileLink username ']"));
        expect(userName.getText()).toBe('John Doe');

        var logout=browser.element(by.id("logoutLink"));
        expect(logout.isPresent()).toBe(true);
        logout.click();
        browser.sleep(3000);
    })
})
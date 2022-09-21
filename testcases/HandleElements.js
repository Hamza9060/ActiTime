describe("mySuite", function() {
    it("Facebook Test", function() {
        //browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization=true;
        browser.get('https://www.facebook.com/login/');
        browser.sleep(3000);
        browser.manage().window().maximize();
        expect(browser.getCurrentUrl()).toBe('https://www.facebook.com/login/');
        expect(true).toBe(true);

        element(by.xpath("//input[@id='email']")).sendKeys("9060686910");
        element(by.xpath("//input[@id='pass']")).sendKeys("hba_786");
        element(by.xpath("//button[@id='loginbutton']")).click();
    })
})
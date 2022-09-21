describe("ActiTime Demo", function()
{
    beforeAll(function()
    {
        browser.ignoreSynchronization=true;
        browser.get("https://demo.actitime.com/login.do");
        browser.manage().window().maximize();
        expect(browser.getTitle()).toBe("actiTIME - Login");

    })
    beforeEach(function()
    {
        browser.manage().timeouts().implicitlyWait(10000)
        browser.element(by.xpath("//input[@id='username']")).sendKeys("admin")
        browser.element(by.xpath("//input[@name='pwd']")).sendKeys("manager")
        browser.element(by.xpath("//a[@id='loginButton']")).click()
        console.log('Login Successful')
    })
    it("Create user", function()
    {
        element(by.xpath("//div[@id='container_users']")).click()
        element(by.xpath("//div[text()='New User']")).click()
        browser.sleep(2000);
        element(by.xpath("//input[@id='createUserPanel_firstNameField']")).sendKeys("Hamza")
        element(by.xpath("//input[@id='createUserPanel_lastNameField']")).sendKeys("Aslam")
        element(by.xpath("//input[@id='createUserPanel_emailField']")).sendKeys("abc@gmail.com")
        element(by.xpath("//div[text()='-- department not assigned --']")).click()
        element(by.xpath("//div[@class='itemsContainer']/div[5]")).click()
        element(by.xpath("//div[text()='Save & Send Invitation']")).click()
        element(by.xpath("//span[text()='Close']")).click()
        console.log('User Created Successfully')
    })
    it("Create Task", function()
    {
        element(by.xpath("//div[@id='container_tasks']")).click()
        element(by.xpath("//div[text()='Add New']")).click()
        element(by.xpath("//div[@class='item createNewCustomer']")).click()
        element(by.xpath("//input[@class='inputFieldWithPlaceholder newNameField inputNameField']")).sendKeys("Hamza")
        browser.sleep(2000)
        element(by.xpath("//div[@class='greyButton cancelBtn']")).click()
        browser.switchTo().alert().accept();
    })
    afterEach(function()
    {
        browser.sleep(2000);
        browser.element(by.xpath("//a[text()='Logout']")).click();
        console.log('Logout successful');
    })
    afterAll(function()
    {
        console.log('Exit the application')
    })
})
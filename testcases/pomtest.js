let actitimedemo = require('../pages/ActiTimeDemo.js')
describe("ActiTime", function()
{
    it("ActiTimeLoginTest", function()
    {
        browser.ignoreSynchronization=true;
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(3000);
        actitimedemo.openURL("https://demo.actitime.com/login.do");
        actitimedemo.loginPage("admin","manager");
        browser.sleep(3000);
        actitimedemo.verifyUser("John Doe");
    });

    it("CreateUser", function()
    {
        actitimedemo.createUser("Hamza","Aslam","abc@gmail.com");
    });

    it("CreateTask", function()
    {
        actitimedemo.createTask("Hamza");
    });
})
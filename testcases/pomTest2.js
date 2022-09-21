let orangehrm=require("../pages/orangehrm.js")

describe("mySuite", function()
{
    it("TC1", function()
    {
        browser.ignoreSynchronization=true;
        orangehrm.openUrl("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        browser.manage().timeouts().implicitlyWait(3000);
        browser.sleep(2000);
        orangehrm.setUsername("Admin");
        orangehrm.setPassword("admin123");
        orangehrm.loginButton();
        orangehrm.logoutBtn();
    })
})

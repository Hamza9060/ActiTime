let orangehrm=function()
{
    let txtUsername=element(by.xpath("//input[@name='username']"));
    let txtPassword=element(by.xpath("//input[@name='password']"));
    let btnClick=element(by.xpath("//button[text()=' Login ']"));
    let logout1=element(by.xpath("//p[@class='oxd-userdropdown-name']"));
    let logout2=element(by.xpath("//a[text()='Logout']"));

    this.openUrl=function(url)
    {
        browser.get(url);
    }

    this.setUsername=function(username)
    {
        txtUsername.sendKeys(username);
    }

    this.setPassword=function(password)
    {
        txtPassword.sendKeys(password);
    }

    this.loginButton=function()
    {
        btnClick.click();
    }

    this.logoutBtn=function()
    {
        logout1.click();
        logout2.click();
    }

};

module.exports=new orangehrm();
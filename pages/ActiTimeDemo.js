let actitimedemo=function()
{
     let txtusername=element(by.id("username"));
     let txtpassword=element(by.name("pwd"));
     let btnlogin=element(by.id("loginButton"));

     let clickUser=element(by.xpath("//div[@id='container_users']"));
     let clickNew=element(by.xpath("//div[text()='New User']"));
     let fname=element(by.xpath("//input[@id='createUserPanel_firstNameField']"));
     let lname=element(by.xpath("//input[@id='createUserPanel_lastNameField']"));
     let mail=element(by.xpath("//input[@id='createUserPanel_emailField']"));
     let dropdown=element(by.xpath("//div[text()='-- department not assigned --']"));
     let dropselect=element(by.xpath("//div[@class='itemsContainer']/div[5]"));
     let save=element(by.xpath("//div[text()='Save & Send Invitation']"));
     let close=element(by.xpath("//span[text()='Close']"));

     let clickTast=element(by.xpath("//div[@id='container_tasks']"));
     let addNew=element(by.xpath("//div[text()='Add New']"));
     let addCust=element(by.xpath("//div[@class='item createNewCustomer']"));
     let custName=element(by.xpath("//input[@class='inputFieldWithPlaceholder newNameField inputNameField']"));
     let clickCancel=element(by.xpath("//div[@class='greyButton cancelBtn']"));


     this.openURL=function(url)
     {
        browser.get(url);
     }

     this.loginPage=function(username,password)
     {
      txtusername.sendKeys(username);
      txtpassword.sendKeys(password);
      btnlogin.click();
     }

     this.verifyUser=function(user)
     {
        expect(browser.element(by.xpath("//a[@class='userProfileLink username ']")).getText()).toBe(user);
     }

     this.createUser=function(firstName,lastName,email)
     {
         clickUser.click();
         clickNew.click();
         browser.sleep(2000);
         fname.sendKeys(firstName);
         lname.sendKeys(lastName);
         mail.sendKeys(email);
         dropdown.click();
         dropselect.click();
         save.click();
         close.click();
     }

     this.createTask=function(cname)
     {
      clickTast.click();
      browser.sleep(2000);
      addNew.click();
      browser.sleep(2000);
      addCust.click();
      custName.sendKeys(cname);
      browser.sleep(2000);
      clickCancel.click();
      browser.sleep(2000);
      browser.switchTo().alert().accept();
     }
};

module.exports=new actitimedemo();
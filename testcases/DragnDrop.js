describe("DragAndDrop", function()
{
    it("DrapnDropTest", function()
    {
        browser.get("https://codef0rmer.github.io/angular-dragdrop/#!/");
        expect(browser.getTitle()).toBe("Drag and Drop for AngularJS");
        browser.manage().window().maximize();
        browser.sleep(3000);
        var src=browser.element(by.model('list1'));
        var dest=browser.element(by.model('list2'));
        browser.actions().dragAndDrop(src,dest).perform();
        browser.sleep(3000);
    })
})
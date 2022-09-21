describe("expectdemo", function()
{
    it("expecttest", function()
    {
        let x=10;
        //expect(x).toBe(10);
        //expect(x).not.toBe(20);
        
        let arr=[10,20,30];
        //expect(arr).not.toBe([10,20,30]);
        //expect(arr).toEqual([10,20,30]);

        //expect(arr).toBeNull();
        //expect(arr).not.toBeNull();
        //expect(arr).toContain(20);
        //expect(arr).not.toContain(20);

       // expect(x).toBeGreaterThan(2);
       //expect(x).toBeGreaterThanOrEqual(10);
       //expect(x).toBeLessThan(2);
       expect(x).not.toBeNaN();

    })
})
describe("Calculator", function() {

    beforeEach(function() {
        calculator = new Calculator();
    });

    describe("at initialisation", function() {
        it("has a height value", function() {
            expect(calculator.height).toEqual(0)
        })
    })


})
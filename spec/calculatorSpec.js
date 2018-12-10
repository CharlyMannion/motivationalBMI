describe("Calculator", function() {

    beforeEach(function() {
        calculator = new Calculator();
    });

    describe("at initialisation", function() {
        it("has a height value", function() {
            expect(calculator.height).toEqual(0)
        })
        it("has a weight value", function() {
            expect(calculator.weight).toEqual(0)
        })
    })

    describe("the function to set the height value", function() {
        it("sets the height to the given value", function(){
            calculator.setHeight(171);
            expect(calculator.height).toEqual(171)
        })
    })

    describe("the function to set the weight value", function() {
        it("sets the height to the given value", function(){
            calculator.setWeight(40);
            expect(calculator.weight).toEqual(40)
        })
    })


})
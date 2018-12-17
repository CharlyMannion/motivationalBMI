describe("WeightCalculator", function() {

    beforeEach(function() {
        weightCalculator = new WeightCalculator();
    });

    describe("at initialisation", function() {
        it("has a height value", function() {
            expect(weightCalculator.height).toEqual(0)
        })
        it("has a BMI value", function() {
            expect(weightCalculator.BMI).toEqual(0)
        })
    })

    // describe("the function to set the height value", function() {
    //     it("sets the height to the given value", function(){
    //         calculator.setHeight(1.71);
    //         expect(calculator.height).toEqual(1.71)
    //     })
    // })

    // describe("the function to set the weight value", function() {
    //     it("sets the height to the given value", function(){
    //         calculator.setWeight(42);
    //         expect(calculator.weight).toEqual(42)
    //     })
    // })

    // describe("the function to calculate the BMI", function() {
    //     it("calculates the BMI from the height and weight", function() {
    //         calculator.setHeight(1.71);
    //         calculator.setWeight(42);
    //         calculator.calculateBMI();
    //         expect(calculator.BMI).toEqual('14.36')
    //     })
    // })


})
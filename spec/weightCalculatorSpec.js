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

    describe("the function to set the height value", function() {
        it("sets the height to the given value", function(){
            weightCalculator.setHeight(1.71);
            expect(weightCalculator.height).toEqual(1.71)
        })
    })

    describe("the function to set the BMI value", function() {
        it("sets the BMI to the given value", function(){
            weightCalculator.setBMI(15);
            expect(weightCalculator.BMI).toEqual(15)
        })
    })

    describe("the function to calculate the weight", function() {
        it("calculates the desired weight target from the height and the BMI", function() {
            weightCalculator.setHeight(1.71);
            weightCalculator.setBMI(15);
            weightCalculator.calculateWeight();
            expect(weightCalculator.weight).toEqual('43.86')
        })
    })


})
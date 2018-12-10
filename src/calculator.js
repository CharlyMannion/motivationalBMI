function Calculator() {
    this.height = 0
    this.weight = 0
    this.BMI = 0
}

Calculator.prototype.setHeight = function(givenHeight) {
    this.height = givenHeight
}

Calculator.prototype.setWeight = function(givenWeight) {
    this.weight = givenWeight
}

Calculator.prototype.calculateBMI = function() {
    var heightSquared = Math.pow(this.height, 2)
    console.log(heightSquared)
    var fullBMI = this.weight / heightSquared
    this.BMI = fullBMI.toFixed(2)
    console.log(this.BMI)
}
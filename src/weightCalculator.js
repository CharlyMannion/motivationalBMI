function WeightCalculator() {
    this.height = 0
    this.BMI = 0
    this.weight = 0
}

WeightCalculator.prototype.setHeight = function(givenHeight) {
    this.height = givenHeight
}

WeightCalculator.prototype.setBMI = function(givenBMI) {
    this.BMI = givenBMI
}

WeightCalculator.prototype.calculateWeight = function() {
    var heightSquared = Math.pow(this.height, 2)
    var fullWeight = this.BMI * heightSquared
    this.weight = fullWeight.toFixed(2)
    return this.weight
}
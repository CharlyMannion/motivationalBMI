function Calculator() {
    this.height = 0
    this.weight = 0
}

Calculator.prototype.setHeight = function(givenHeight) {
    this.height = givenHeight
}

Calculator.prototype.setWeight = function(givenWeight) {
    this.weight = givenWeight
}
$( document ).ready(function() {
    var calculator = new Calculator();

    $("#calculateBMI").on('click', (function(e){
        e.preventDefault();
        var inputHeight = $('#formInputHeight').val();
        calculator.setHeight(inputHeight);
        $("#inputedHeight").text(inputHeight);
        var inputWeight = $('#formInputWeight').val();
        calculator.setWeight(inputWeight);
        $("#inputedWeight").text(calculator.weight);
        calculator.calculateBMI();
        $("#result").text(calculator.BMI);
    }));

    $('#resetPage').click(function() {
        location.reload();
    });

});
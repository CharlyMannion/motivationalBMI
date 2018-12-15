$( document ).ready(function() {
    var calculator = new Calculator();

    $("#submit").on('click', (function(){
        var inputHeight = $('#formInputHeight').val();
        var inputWeight = $('#formInputWeight').val();
        calculator.setHeight(inputHeight);
        calculator.setWeight(inputWeight);
        calculator.calculateBMI();
        $("#result").text(calculator.BMI);
    }));

    // $("#cerealOptions").hide();
    // $("#cerealOptions").text(menu.displayCerealOptions());

    $('#resetPage').click(function() {
        location.reload();
    });

});
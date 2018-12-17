// function UpdateUi(calculator){

//     $("#inputedHeight").text(calculator.height); 
//     $("#inputedWeight").text(calculator.weight);
//     $("#result").text(calculator.BMI);

//   }

$( document ).ready(function() {
    var calculator = new Calculator();

    // UpdateUi(calculator);

    // $("#inputedHeight").text(calculator.height); 
    // $("#inputedWeight").text(calculator.weight);
    // $("#result").text(calculator.BMI);

    $("#calculateBMI").on('click', (function(){
        var inputHeight = $('#formInputHeight').val();
        calculator.setHeight(inputHeight);
        $("#inputedHeight").text(inputHeight);
        var inputWeight = $('#formInputWeight').val();
        calculator.setWeight(inputWeight);
        $("#inputedWeight").text(calculator.weight);
        calculator.calculateBMI();
        $("#result").text(calculator.BMI);
        // UpdateUi(calculator);
    }));

    $('#resetPage').click(function() {
        location.reload();
    });

});
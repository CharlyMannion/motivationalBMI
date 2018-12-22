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

    $("#calculateBMI").on('click', (function(e){
        e.preventDefault();
        var inputHeight = $('#formInputHeight').val();
        calculator.setHeight(inputHeight);
        console.log(calculator.height);
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
function UpdateUi(calculator){

    $("#inputedHeight").text(calculator.height); 
    $("#inputedWeight").text(calculator.weight);
    $("#result").text(calculator.BMI);
  
  }

$( document ).ready(function() {
    var calculator = new Calculator();

    $("#inputedHeight").text(calculator.height);
    $("#inputedWeight").text(calculator.weight);
    $("#result").text(calculator.BMI);

    // $("#submitHeight").on('click', (function(){
    //     var inputHeight = $('#formInputHeight').val();
    //     calculator.setHeight(inputHeight);
    //     $("#inputedHeight").text(calculator.height);
    //     UpdateUi(calculator);
    // }));

    // $("#submitWeight").on('click', (function(){
    //     var inputedWeight = $('#formInputWeight').val();
    //     calculator.setWeight(inputWeight);
    //     $("#inputedWeight").text(calculator.weight);
    //     UpdateUi(calculator);
    // }));

    $("#calculateBMI").on('click', (function(){
        var inputHeight = $('#formInputHeight').val();
        calculator.setHeight(inputHeight);
        $("#inputedHeight").text(calculator.height);
        var inputedWeight = $('#formInputWeight').val();
        calculator.setWeight(inputWeight);
        $("#inputedWeight").text(calculator.weight);
        calculator.calculateBMI();
        $("#result").text(calculator.BMI);
        UpdateUi(calculator);
    }));

    $('#resetPage').click(function() {
        location.reload();
    });

});
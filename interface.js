$( document ).ready(function() {
    var calculator = new Calculator();

    $("#result").hide();

    // $("#cerealOptions").hide();
    // $("#cerealOptions").text(menu.displayCerealOptions());

    $('#resetPage').click(function() {
        location.reload();
    });

    $("#submit").on('click', (function(){
        $("#result").show();
    }));
});
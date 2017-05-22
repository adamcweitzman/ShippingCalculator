// Write your Javascript code.
$(function () {



    console.log("I'm here");

    $(".radio").click(function () {
        var selVal = $('input[name=optradio]:checked').val(); 
        $('#labelMass').html('Shipping Mass Per Case (' + selVal + ')');
    })


    $("#calcBtn").click(function (e) {
        e.preventDefault();
        var mass = $("#shippingMassPerCase").val();
        var cases = $('#numberCases').val();

        var selVal = $('input[name=optradio]:checked').val(); 
        if (selVal == "g") {
            var sum = ((mass / 1000) * 5) * cases
        }
        else {
            var sum = (mass * 5) * cases
        }

        $('#sum').html('$' + sum);
        
    })






});




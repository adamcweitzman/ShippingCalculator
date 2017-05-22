// Write your Javascript code.
$(function () {



    console.log("I'm here");

    $(".radio").click(function () {
        console.log("i hit the readio btn");
        var selVal = $('input[name=optradio]:checked').val(); 
        $('#labelMass').html('Shipping Mass Per Case (' + selVal + ')');
    })


    $("#calcBtn").click(function (e) {
        e.preventDefault();
        console.log("i hit the calc button");
        var mass = $("#shippingMassPerCase").val();
        var cases = $('#numberCases').val();

        var selVal = $('input[name=optradio]:checked').val(); 
        if (selVal == "g") {
            var sum = ((mass / 1000) * 5) * cases
        }
        else {
            var sum = (mass * 5) * cases
        }
        

        console.log(sum);

        $('#sum').html(sum);
        
    })






});




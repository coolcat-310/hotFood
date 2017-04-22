/**
 * Created by juancarlosnavarrete on 4/22/17.
 */


$(".submit").on("click", function(){

    // Here we grab the form elements
    var newReservation = {
        customerName: $('#reserve_name').val().trim(),
        phoneNumber: $('#reserve_phone').val().trim(),
        customerEmail: $('#reserve_email').val().trim(),
        customerID: $('#reserve_uniqueID').val().trim()
    };

    console.log(newReservation);


    var currentURL = window.location.origin;


    $.post("api/new", newReservation, function(data) {
        console.log(currentURL + "api/new");
        if(data == true){
            alert("yay! you are officially booked!")
        }
        if(data == false) {
            alert("Sorry, you are on the wait list")
        }

        $('#reserve_name').val("");
        $('#reserve_phone').val("");
        $('#reserve_email').val("");
        $('#reserve_uniqueID').val("");
    });
        
return false;

});

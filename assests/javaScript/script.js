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

    $.post("/api/new", newReservation)
        .done(function(data) {
            console.log(data);
            alert("Adding Reservation...");
        });


});

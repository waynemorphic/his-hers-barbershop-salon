console.log('I am the barber');

let d = document;

//UI Logic for customer booking
$(document).ready(function() {
    $('#booking').click(function() {
        $('#booked-date').hide(function() {
            $('#booked-date').show(function() {
                $('#booking').submit();
                    submitBooking();

        });


    });
});
});

function submitBooking() {
    let choosenDate = d.getElementById('booked-date');
    console.log('yes')
    // let submitButton = $(document).getElementById('booking').btn;
    //let bookingDate = choosenDate.getDay;

    // let y = choosenDate.checked || 0;
    console.log(choosenDate.value)
    console.log(choosenDate.checked)

    if (choosenDate.value !== '') {
        alert('You have scheduled a booking on ' + choosenDate.value)
    } //else {
    //     alert('No bookings scheduled');
    // }





}
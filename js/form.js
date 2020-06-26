$(document).ready(function ($) {
    "use strict";
    $("#name").prop('required', true);
    $("#email").prop('required', true);
    $("#phone").prop('required', true);
    $("#message").prop('required', true);
    $("#subscribe").prop('required', true);


    $("form").submit(function (e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var message = $('#message').val();
        var subscribe = $('#subscribe').val();

        var database = firebase.database().ref("Clients")

        var clients = {
            "Name": name ? name : null,
            "E-mail": email ? email : null,
            "Phone": phone ? phone : null,
            "Message": message ? message : null,
            "Subscriber": subscribe ? subscribe : null
        }

        database.push(clients);

        alert("Submitted Successfully");
        console.log(clients)
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";



    })

})
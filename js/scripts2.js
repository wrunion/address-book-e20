// Business Logic - AddressBook -------------------------------



// Business Logic - Contacts ----------------------------------




//UI Logic ----------------------------------------------------
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    let firstName = $("#firstName").val();
    //console.log(firstName);
    let lastName = $("#lastName").val();
    //console.log(lastName);
    let phone = $("#phoneNumber").val();
    //console.log(phone);

    

    event.preventDefault();
  });

});
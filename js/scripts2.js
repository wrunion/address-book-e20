// Business Logic - AddressBook -------------------------------
function AddressBook() {
  this.contacts = [];
}


// Business Logic - Contacts ----------------------------------




//UI Logic ----------------------------------------------------
$(document).ready(function() {
  //Ask the user for their name and create a new AddressBook object unique to them. Append the "Conacts" display header with their name as well
  //let userName = prompt(`To create a new address book, please enter your first name:`);
  let userName = "Winter";
  $("span#userName").append(`${userName}'s `);

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
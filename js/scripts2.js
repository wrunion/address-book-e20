// Business Logic: AddressBook -------------------------------
function AddressBook() {
  this.contacts = [];
  this.currentId = 0;
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (let i=0; i<this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id === id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (let i=0; i<this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id === id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

// Business Logic: Contacts ----------------------------------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

let currentBook = new AddressBook();

//UI Logic ----------------------------------------------------
$(document).ready(function() {
  //Ask the user for their name and create a new AddressBook object unique to them. Append the "Conacts" display header with their name as well
  //let userName = prompt(`To create a new address book, please enter your first name:`);
  let userName = "Winter";
  $("span#user-name").append(`${userName}'s `);

  //NOTE: the below code doesn't work. come back to it.
  //let bookname = userName.toLowerCase() + "sAddressBook";
  // let newBookName = `${userName.toLowerCase()}sAddressBook`;
  // this[newBookName] = new AddressBook;

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
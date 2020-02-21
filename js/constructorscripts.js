// Business Logic: Constructors and Protypes (pre-ES6 version) -------------------------
function AddressBook() {
  this.contacts = [];
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].id == id) {
          return this.contacts[i];
      }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (let i=0; i<this.contacts.length; i++) {
      if (this.contacts[i].id === id) {
          delete this.contacts[i];
          return true;
      }
  };
  return false;
}

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
}


//UI Logic ----------------------------------------------------

let currentBook = new AddressBook();

function displayContacts(bookName) {
  let displayLocation = $("ul#contacts");
  let htmlToInsert = "";
  bookName.contacts.forEach(function(contact) {
    htmlToInsert += `<li id=${contact.id}>${contact.firstName} ${contact.lastName}</li>`;
  });
  displayLocation.html(htmlToInsert);
}

function attachContactListeners() {
  $("ul#contacts").on("click", "li", function() {
    console.log(`The id of this contact is ${this.id}.`);
  });
}

$(document).ready(function() {
  attachContactListeners();
  //Ask the user for their name and create a new AddressBook object unique to them. Append the "Conacts" display header with their name as well
  //let userName = prompt(`To create a new address book, please enter your first name:`);

  //Create a placeholder username for testing
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

    let currentContact = new Contact(firstName, lastName, phone);

    currentBook.addContact(currentContact);
    console.log(currentBook);
    displayContacts(currentBook);
    event.preventDefault();
  });

});
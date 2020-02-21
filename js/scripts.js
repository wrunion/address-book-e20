// Business Logic: ES6 ---------

// Address Book
class AddressBook {
  constructor(name) {
    this.name = name;
    this.contacts = [];
    this.currentId = 0;
  }
  assignId() {
    this.currentId +=1;
    return this.currentId;
  }
  addContact(contact) {
    contact.id = this.assignId();
    this.contacts.push(contact);
  }
  findContact(id) {
    for (let i=0; i<this.contacts.length; i++) {
      if (this.contacts[i]) {
        if (this.contacts[i].id === id) {
            return this.contacts[i];
        }
      }
    };
    return false;
  }
  deleteContact(id) {
    for (let i=0; i<this.contacts.length; i++) {
      if (this.contacts[i]) {
        if (this.contacts[i].id === id) {
            delete this.contacts[i];            
          }
        }
      };
    return false;
  }
}

// Contacts
class Contact {
  constructor(firstName, lastName, phoneNumber) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.phoneNumber = phoneNumber;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// UI Logic ------------------------
// let addressBooks = {};
// let wintersAddressBook = new AddressBook();

// function displayContacts(bookName) {
// let display = $("ul#contacts");
// let displayHTML = "";
// bookName.contacts.forEach(function(contact) {
//   displayHTML += `<li id=${contact.id}>${contact.firstName} ${contact.lastName}</li> <button id="displayAll" class="ui basic blue button mini">Show Details</button> <button class="deleteContact">Delete</button>`;
// });
// display.html(displayHTML);
// }

function displayContacts(bookName) {
  let display = $("#contacts");
  let displayHTML = "";
  bookName.contacts.forEach(function(contact) {
    displayHTML += `<div id=${contact.id} class="item">${contact.firstName} ${contact.lastName} <button id="displayAll" class="ui basic blue button mini">Details</button> <button id="deleteContact" class="ui basic pink button mini">Delete</button></div>`;
  });
  display.html(displayHTML);
  }

function attachContactListeners() {
  $("ul#contacts").on("click", "li", function(){
      console.log("The id of this <li> is " + this.id + ".");
  });
};

let addressBooks = {};
let userName;

$(document).ready(function() {
  $("form#newBook").submit(function(event) {
    // Get username from form
    let name = $("input#userName").val();
    // Append it to the (currently hidden) contact output span
    $(".user-name").append(`${name}'s `);
    // Save it to a global variable
    userName = name;
    // Create a new address book unique to this user
    addressBooks[name] = new AddressBook(name);
    console.log(addressBooks);
    // --- SHOW HIDE
    $("#signUp").hide();
    $("#content-main").show();
    event.preventDefault();
  });

  //userName = (Object.keys(addressBooks)).toString().toLowerCase();

  attachContactListeners();

  $("form#new-contact").submit(function(event) {
      event.preventDefault();
      // Grab input from user
      let firstName = $("#firstName").val();
      let lastName = $("#lastName").val();
      let phoneNumber = $("#phoneNumber").val()

      // Create new contact & push it to the working address book
      let newContact = new Contact(firstName, lastName, phoneNumber);
      addressBooks[userName].addContact(newContact);
      displayContacts(addressBooks[userName]);
  });

});
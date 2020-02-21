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

function displayContacts(bookName) {
let display = $("ul#contacts");
let displayHTML = "";
bookName.contacts.forEach(function(contact) {
  displayHTML += `<li id=${contact.id}>${contact.firstName} ${contact.lastName}</li> <button class="displayAll">Show Details</button> <button class="deleteContact">Delete</button>`;
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
    $("#userName-span").append(`${name}'s `);
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

//product needs discovery phase

// $(document).ready(function() {
//     attachContactListeners();
//     //Ask the user for their name and create a new AddressBook object unique to them. Append the "Conacts" display header with their name as well
//     //let userName = prompt(`To create a new address book, please enter your first name:`);

//     //Create a placeholder username for testing
//     let userName = "Winter";
//     $("span#user-name").append(`${userName}'s `);

//     //NOTE: the below code doesn't work. come back to it.
//     //let bookname = userName.toLowerCase() + "sAddressBook";
//     // let newBookName = `${userName.toLowerCase()}sAddressBook`;
//     // this[newBookName] = new AddressBook;
//     $("form#new-contact").submit(function(event) {
//       let firstName = $("#firstName").val();
//       //console.log(firstName);
//       let lastName = $("#lastName").val();
//       //console.log(lastName);
//       let phone = $("#phoneNumber").val();
//       //console.log(phone);

//       let currentContact = new Contact(firstName, lastName, phone);

//       currentBook.addContact(currentContact);
//       console.log(currentBook);
//       displayContacts(currentBook);
//       event.preventDefault();
//     });

//   });
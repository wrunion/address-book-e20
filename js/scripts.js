// Business Logic for AddressBook ---------
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

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
}


Contact.prototype.fullName = function() {
    return `${this.firstName} ${this.lastName}`;
}


//test functions
let testBook = new AddressBook();
var testContact = new Contact("Ada","Lovelace","503-555-1111");
var testContact2 = new Contact("Ada","Lovelace","503-555-1111");


// ------------------ User Interface Logic ------------------

var wintersAddressBook = new AddressBook();

function displayContactDetails(addressBookToDisplay) {
    //debugger;
    let contactsList = $("ul#contacts");
    let htmlForContactInfo= "";
    addressBookToDisplay.contacts.forEach(function(contact) {
        htmlForContactInfo += `<li id=${contact.id}> ${contact.firstName} ${contact.lastName} </li>`;
    });
    contactsList.html(htmlForContactInfo);
}

function displayPhoneNumber(addressBookToDisplay) {
    let contactsList = $("ul#phoneNumbers");
    let htmlForPhoneNumber = "";
    addressBookToDisplay.contacts.forEach(function(contact) {
        htmlForPhoneNumber += `<li id=${contact.id}> ${contact.phoneNumber} </li>`;
    });
    contactsList.html(htmlForPhoneNumber);
}

function attachContactListeners() {
    $("ul#contacts").on("click", "li", function() {
        console.log("The id of this <li> is " + this.id + ".");
    });
};

// function attachContactListeners() {
//     $("ul#contacts").on("click", "li", function() {
//         console.log(`The id of this <li> is ${this.id}.`);
//     });
// };

$(document).ready(function() {
    attachContactListeners();

    $("form#new-contact").submit(function(event) {
        event.preventDefault();
        var inputtedFirstName = $("input#firstName").val();
        var inputtedLastName = $("input#lastName").val();
        var inputtedPhoneNumber = $("input#phoneNumber").val();
        var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
        wintersAddressBook.addContact(newContact);
        displayContactDetails(wintersAddressBook);
        displayPhoneNumber(wintersAddressBook);
    });

});
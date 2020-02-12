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

$(document).ready(function() {
    $("form#new-contact").submit(function(event) {
        event.preventDefault();
        var inputtedFirstName = $("input#new-first-name").val();
        var inputtedLastName = $("input#new-last-name").val();
        var inputtedPhoneNumber = $("input#new-phone-number").val();
        var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
        wintersAddressBook.addContact(newContact);
        console.log(wintersAddressBook.contacts);
    });
});
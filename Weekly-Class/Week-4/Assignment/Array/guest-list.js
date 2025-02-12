// Q. You are organizing a party and have a list of invited guests. but just before the party starts, a new friend decides to join. You need to add them to the guest list.

// Problem Statement : Create a function that adds a new guest list and returns the updated list.

// Hint : Use the methods that allows you to add an item at the end of an array.

// ANS : 

function addGuest(guestList, newGuest) {
    // returns the updated list
    guestList.push(newGuest);
    return guestList;
}
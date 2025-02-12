// Q. You wrote a love letter, but you want to insert your partner's name at the begining of the message.

// Problem Statement : Create a function that inserts the partner's name at the start of the message and returns the updated message.

// Hint : Use the methods that allows you to add an item at the start of an array.

// ANS : 

function writeLoveLetter(message, name) {
    // Adds name at the start of the message and returns updated array
    message.unshift(name);
    return message;
}
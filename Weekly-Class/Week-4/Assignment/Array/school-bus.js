// Q. A school bus has students inside, but the first student in line needs to geet of at next stop. Remove the first student from the bus.

// Problem Statement : Create a function that removes the first student from the bus and returns the updated list.

// Hint : Use the methods that allows you to remove an item at the start of an array.

// ANS : 

function removeStudent(bus) {
    // Removes the first student and returns the updated bus list
    bus.shift();
    return bus;
}
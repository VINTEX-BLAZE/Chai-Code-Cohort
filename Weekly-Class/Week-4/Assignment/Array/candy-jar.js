// Q. Youv have a full jar of candies, but your little sibling keeps eating the last one! Your job is to remove the last candy from jar.

// Problem Statement : Create a function that removes the last candy from the jar and returns the updated jar.

// Hint : Use the methods that allows you to remove an item at the end of an array.

// ANS : 

function eatCandy(candyJar) {
    // Remove the last candy from the jar and return the updated jar
    candyJar.pop();
    return candyJar;
}

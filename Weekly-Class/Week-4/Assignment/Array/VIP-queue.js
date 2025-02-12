// Q. A new VIP guest arrives at the club and should be at the front of the queue. Add him/her to the begining of the list.

// Problem Statement : Create a function that adds a VIP guest to the front of the queue and returns the updated list.

// Hint : Use the methods that allows you to add an item at the front of an array.

// ANS : 

function addVIP(queue, vipGuest) {
    // Adds vipGuest at the beginning of queue and returns updated queue
    queue.unshift(vipGuest);
    return queue;
}
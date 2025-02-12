// Q. A puppy named Max was playing in the park, but he went to the first position of the queue insted of waiting at the end. You need to add Max at the beginning of the queue.

// Problem Statement : Create a function that adds a puppy to the front of the queue and returns the updated queue.

// Hint : Use the methods that allows you to add an item at the first of an array.

// ANS : 

function addPuppy(queue, puppyName) {
    // Adds puppyName at the beginning of queue and returns updated queue
    queue.unshift(puppyName);
    return queue;
}
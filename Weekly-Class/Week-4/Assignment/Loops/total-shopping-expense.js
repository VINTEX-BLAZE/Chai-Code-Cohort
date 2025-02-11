// Q. you're shopping for groceries and want to know the total cost of all the items in your cart. You have an array of item prices.
// Problem Statement : Create a function that takes an array of item prices and returns the total cost.

// ANS : 

function totalPrice(prices) {
    // returns the total cost 
    sum = 0;
    for ( let l = 0 ; l< prices.length ; l++){
      sum += prices[l];
    }
    return sum ;
  }
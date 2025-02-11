// Q. You are given three numbers. Determine the largest among them.
// Problem Statement : Write a function that takes three numbers and returns the largest one using if-else

// ANS : 

function findLargest(a, b, c) {
    // Returns the largest among a, b, and c
    if(typeof a == "number" && typeof b == "number" && typeof c == "number"){
      if (a>=b && a>=c){
        return a;
      } else if (b>=a && b>=c){
        return b;
      } else {
        return c
      }
    } else {
        return "Please enter number only!!"
    }
  }

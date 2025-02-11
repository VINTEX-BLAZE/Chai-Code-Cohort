// Q. You're on a camping trip with your friends & you all want to set up a starry mountain as a symbol of your adventure. to make things more fun, you decide to use stars to draw an inverted mountain pattern. The challenge is to print it so everyone can admire this majestic mountain shape !!

// Problem Statement : Create a function invertedmountain(n) that prints an inverted mountain made of stars. the number n represents the number of stars at the top & the pattern should reduce by one star each line until only one star is left at the bottom.

// For Example : let n = 4, the output will look like :

// * * * *
// * * *
// * *
// *

// Hint : When you want to print multiple lines, you can use "\n" to add a new line after each row of stars. This will help you keep the output organized and align it properly !!

// ANS : 

function invertedMountain(n) {
    let mountain = "";
    // Loops for each row
    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= i; j++) {
        mountain += "*"; // Add stars to the row
      }
      mountain += "\n"; // move to the next line after each row
    }
  
    return mountain; 
  }
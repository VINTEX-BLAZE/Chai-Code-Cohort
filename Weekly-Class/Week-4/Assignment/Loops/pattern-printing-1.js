// Q. You've been tasked with designing the perfect shiny diamond rug cursh's room. They love stars and you've decided to make a sparkling pattern usibg them. You need to help them create this rug, where the stars are arranged in the shape of a Diamond.

// Problem Statement : Create a function shinyDiamondRug(n) that prints a shiney diamond shape made of stars. The number n represents the size of the diamond, with the middle of the diamond having 2n-1 stars.

// Importent Rules : 

// 1. Each line must not have trailing spaces.
// 2. The output must not have an extra newline at the end.

// For Example : let n = 4, the output will look like below 

//        *
//      * * *
//    * * * * *
//  * * * * * * *
//    * * * * *
//      * * *
//        *

// Hint-1 : To print the diamond shape, break it into two parts (Upper & lower part) :
//          1. For the upper part (include the middle), using increasing stars, starting from 1 star to 2n-1 stars.
//          2. For the lower part, use decreasing stars, starting from 2n-3 stars back down to 1.
// Note : Make sure to handel spaces before the stars so that the shape aligns nicely.

// Hint-2 : In Js, '\n' is a special charecter that represent a new line. When you use it in a string, it will create a line break, meaning that any text after '\n' will appear on the next line.

// ANS : 

function shinyDiamondRug(n) {
    let diamond = " ";
    // upper part of the diamon (including the middle line)
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        diamond += " "; // space before stars
      }
      for (let k = 1; k <= (2 * i - 1); k++) {
        diamond += "*"; // stars on each line
      }
      diamond += "\n"; // move to the next line after each row
    }
    // lower part of the diamond
    for (let i = n - 1; i >= 1; i++) {
      for (let j = 1; j <= n - i; j++) {
        diamond += " "; // space before stars
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
        diamond += "*"; // stars on each line
      }
      diamond += "\n"; // move to the next line after each row
    }
  
    return diamond;
  }
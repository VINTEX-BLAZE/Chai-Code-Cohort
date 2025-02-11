// Q. You have multiple levels of stars to count. Each level contains a certain number of stars. How many total stars are there ?
// Problem Statement : Create a function that takes an array of arrays (representing the number of stars in each level) and returns the total number of stars.
// Hint : Use a nested loop to first iterate through each level and then sum the number of stars in that level.

// ANS :

function totalStars(starLevels) {
    // returns the total number of stars
    let count = 0;
    for ( let i = 0 ; i< starLevels.length ; i++){
      let sublist = starLevels[i];
      for( let j = 0 ; j< sublist.length ; j++){
        count++;
      }
    } return count ; 
  }
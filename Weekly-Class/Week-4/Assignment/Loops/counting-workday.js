// Q. you're planing a week's schedule and need to count the days you are working. You have an array where each element represents a day of the week. how can you calculate how many days you are working?
// Problem Statement : Create a function that takes an array of days (e.g., ["Monday", "Tuesday", "Friday"]) and returns the number of days you are working. "Sunday" & "Saturday" are not Working days.

// ANS : 

function workingDays(days) {
    // returns the total working day in a week of yours
    let count = 0;
    for (let i = 0 ; i< days.length ; i++){
      if(days[i] != "Sunday" && days[i] != "Saturday"){
        count++;
      }
      else{
        continue;
      }
  } return count;
  }
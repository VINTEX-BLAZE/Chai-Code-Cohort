// Q. You're tracking the number of steps you take during a workout. each time you take a step, you want to count it. You keep stepping until you've reached a certain number of steps.
// Problem Statement : Create a function that uses a loop to count the number of steps during workout. The loop should continue until you reach the target step count.

// ANS :

function countSteps(targetSteps) {
    // returns the steps you walk dring the workout
    let count = 0;
    for ( let l = 1 ; l<= targetSteps ; l++){
      count++;
    } return count;
    
  }

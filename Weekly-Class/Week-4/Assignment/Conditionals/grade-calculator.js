// Q. Given a Student's marks, determine their grade based on this scale :
// 90+ --> A
// 80 - 89 --> B
// 70 - 79 --> C
// 60 - 69 --> D
// Below 60 --> F
// Problem Statement : Write a function that returns the corresponding grade using if-else.

// ANS :

function calculateGrade(marks) {
    // Return grade based on the marks
    if (typeof marks == "number"){
      if(marks >= 90){
        return "A"
      } else if (marks >= 80 && marks < 90){
        return "B"
      }else if (marks >= 70 && marks < 80){
        return "C"
      }else if (marks >= 60 && marks < 70){
        return "D"
      } else {
        return "F"
      } 
    } else {
      console.log("Please Enter your proper marks")
    }
  }
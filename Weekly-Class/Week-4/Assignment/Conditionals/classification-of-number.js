// Q. Determine if a number is positive or negative, or zero.
// Problem Statement : Write a function that uses if-else to classify a number.

// ANS : 

function checkNumberType(num) {
    // Return "Positive", "Negative", or "Zero" based on the input number
    if (typeof num == "number"){
      if (num == 0){
        return "Zero"
      } else if (num>=1){
          return "Positive"
      } else{
        return "Negative"
      }
    } else {
      console.log("Enter a number")
    }
  }
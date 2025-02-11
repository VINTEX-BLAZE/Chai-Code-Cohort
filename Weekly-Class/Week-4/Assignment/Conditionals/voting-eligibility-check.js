// Q. You need to determine if a person is eligible to Vote (age - 18 or above)
// Problem Statement : Write a function that chekes if a person is eligible to vote and returns "Eligible" or "Not Eligible"

// ANS : 

function checkVotingEligibility(age) {
    // Returns "Eligible" if age is 18 or more, otherwise returns "Not Eligible"
    if( typeof age == "number"){
      if(age >= 18){
        return "Eligible"
      } else {
        return "Not Eligible"
      }
    } else {
      console.log("Enter Your Valid Age")
    }
  }

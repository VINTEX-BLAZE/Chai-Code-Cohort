// Q. Given a number (1 - 7), return the corresponding day of the week.
// Problem Statement : Write a function that uses switch-case to9 return the day name for valid inputs otherwise "Invalid Day"

// ANS :

function getDayOfWeek(day) {
// Return the corresponding day of the week based on the input number
    switch (day) {
        case 1:
          return "Monday";
        
        case 2:
          return "Tuesday";
        
        case 3:
          return "Wednesday";
        
        case 4:
          return "Thrusday";
        
        case 5:
          return "Friday";
        
        case 6:
          return "Saturday";
        
        case 7:
          return "Sunday";
        
        default:
          return "Invalid Day";
    }
}
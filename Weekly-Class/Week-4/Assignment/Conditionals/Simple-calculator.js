// Q. Create a basic calculator that performs +, -, *, / based on user input.
// Problem Statement : Write a function that uses switch-case to perform arithmetic operations. Handle the edge case of "Cannot divide by zero".

// ANS : 

function calculator(num1, num2, operator) {
    // Perform basic arithmetic operations using switch case
    switch (operator) {
      case ("+") : return num1 + num2 ;
      case ("-") : return num1 - num2 ;
      case ("*") : return num1 * num2 ;
      case ("/") : return num2 == 0 ? "Cannot divide by zero" : num1/num2 ;
       default : return "Invalid Operator"
    }
  }
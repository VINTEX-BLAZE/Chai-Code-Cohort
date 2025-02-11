// Q. Given a temperature and a scale ("C" or "F"), Convert it to the other scale.
// Problem Statement : Write a function that uses switch-case to convert temperature.

// ANS : 

function convertTemperature(value, scale) {
    // Convert temperature based on the scale ("C" to "F" or "F" to "C")
    switch(scale) {
      case ("C") : return `${(value *9)/5 + 32}°F`
      case ("F") : return `${((value - 32)*5)/9}°C`
      default : return "Invalid Scale"
    }
  }
// Q. You need to determine what action to take based on traffic light colors : 
// "Red" --> Stop
// "Yellow" --> Slow Down
// "Green" --> Go
// "Blue" --> Invalid Color
// Problem Statement : Write a function that uses switch-case to return the correct action.

// ANS : 

function trafficLightAction(color) {
    // Return "Stop", "Slow Down", or "Go" based on the traffic light color
      if(typeof color == "string"){
      if(color == "Red" || color == "red"){
        return "Stop"
      }
      else if(color == "Yellow" || color == "yellow"){
        return "Slow Down"
      }
      else if(color == "Green" || color == "green"){
        return "Go"
      } else {
        return "Invalid Color"
      }
    } else {
      console.log ("Please enter a color name , nothing else!!")
    }
  }
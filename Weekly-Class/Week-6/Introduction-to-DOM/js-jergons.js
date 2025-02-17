// Injected a description method to the function object

Function.prototype.describe = function () {
    console.log(`Function name is ${this.name}`);
  };

  
  function masalaChai(){}
  function gingerChai(){}
  
  function greet(name) {
    return `Hello ${name}`;
  }

 greet("indranil").describe; // The bug in this line is the describe function is not called and greet is taking argument
  
  greet("indranil") // output => Hello indranil
  
  greet.describe('hitesh'); // output => Function name is greet
  masalaChai.describe(); // output => Function name is masalaChai
  
  
  
  function add(a, b){ // this is know as function delaretion
      return a+b
  }
  
  const substract = function(a, b){ // this is known as Function expression and the function which is stored in the variable is known as anonymus function
      return a-b
  }
  
  const multiply = (a, b) => a*b // this is an arrow function

  ( () => { // An anonymous function using the arrow function technique
    // Function Body...
  } )();

  
  
  function applyOperation(a, b, operation){ // this is known as first-class function
    return operation(a, b) // because it is returning a function
  }
  
  const result = applyOperation(5, 4, (x, y) => x/y) 
  
  
  function createCounter(){ // This phenomenon is known as tiffin concept

                            // A child function can alway access all the variable , values and all the things of his parent function's Scope.
      let count = 0;       // Like a child , when he/she goes for the school he also bring his/her's tiffin made by his/her parent
      return function () {  
        count++;
        return count
      }
  }


  //console.log(count); // it is a error because we can't access a function's variable outside of his scope
  
  const counter = createCounter()
  console.log(counter());
  
  
  
  
  
  
  
  
  function onef(){
      let myName = "hitesh"
  }
  
  console.log(myName);
  
  
  
  (function(){ // IIFE (Immediately Invoked Function Expression)
      console.log("hitesh");
      
  })() // and ea IFFI ka call
  
  ()()
  
  (function(){ // IIFE (Immediately Invoked Function Expression)
  
  })()
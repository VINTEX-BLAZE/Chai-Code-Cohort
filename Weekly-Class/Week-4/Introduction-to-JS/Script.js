function printHello() {
    console.log("Hello World!");
  }
  
  function printGreet(str) {
    console.log(`Hello! ${str} What's Up?`); // same as console.log("Hello! What's Up?", str);
  }
  
  function addNum(num1, num2){
      return num1 + num2
  }
  
  printHello();
  printGreet("Indranil");
  addNum(1,2)
  console.log(addNum(2,4));
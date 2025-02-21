let Display = document.getElementById('display'); // Accesed the Display-area
let btns_doc = document.querySelectorAll('.Calc-btn'); // Accessed the Clalculator-btns
let btn = Array.from(btns_doc); // Converted the Node-List into an array (so that we can ittrate over it)


let Evaluation = function (e) { // Declared the Evaluation(function expression) to make the calculator work
    let exp = e.target.id; // Accesed the Btn's(which is clicked) id form event obj
    if (Display.value === "Error" || Display.value === "undefined" ){ // if condition to clear the display if another btn is clicked 
        Display.value = "";
    } 
    if(exp === "="){ // Gives the output if the = btn is clicked
        try {
            Display.value = eval(Display.value);
        } catch (error) {
            Display.value = "Error";
        }
    } else if (exp === "DEL"){ // delete the last number or char from the display list
        try {
            Display.value = Display.value.substring(0 , Display.value.length - 1)
        } catch (error) {
            Display.value = "Error";
        }
    } else if (exp === "AC") { // Clears the Display
        Display.value = "";
    } else {
        Display.value += exp; // Appen the btn value to the Display
    } 
    
}
for (let i = 0 ; i<btn.length ; i++) { // Attaching the event lisners to all the btn with class '.Calc-btn'
    btn[i].addEventListener('click', (evt) =>{ // wrapping the Evaluation function in an arrow function and explicitely passing the event Object
        Evaluation(evt) 
    // btn[i].addEventListener('click', Evaluation);
    });

}

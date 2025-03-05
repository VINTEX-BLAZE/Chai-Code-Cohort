/**
 * Write your challenge solution here
 */

// build a function to change color

function color_Changing(e) { 
    let color = e.target.textContent;
    if(color != "Reset"){

      let new_color =  color.toLowerCase();
      document.getElementsByTagName('h1')[0].style.color = `${new_color}`;

    }  else {
        document.getElementsByTagName('h1')[0].style.color = `black`;
    }
}
// Catched all btn elements 
let btn_element = document.getElementsByTagName('button');

// changed the Html collections to an Array
let btns_list = Array.from(btn_element);

// Added the event Listners 
btns_list.forEach((btn)=> btn.addEventListener('click', color_Changing));


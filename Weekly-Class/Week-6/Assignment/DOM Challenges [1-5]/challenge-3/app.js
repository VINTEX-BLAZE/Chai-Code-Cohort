/**
 * Write your challenge solution here
 */

// let nameInput = document.getElementById('nameInput');
// let jobInput = document.getElementById('jobInput')
// let ageInput = document.getElementById('ageInput')
let bioInput = document.getElementById('bioInput')



let nameDisplay = document.getElementById('nameDisplay')
let jobDisplay = document.getElementById('jobDisplay')
let ageDisplay = document.getElementById('ageDisplay')
let bioDisplay = document.getElementById('bioDisplay')

let inputList =Array.from(document.getElementsByTagName('input')) 
 
function Update_text(e) {

   switch (e.target.id) {
    case "nameInput":
        nameDisplay.textContent = e.target.value;
    if (e.target.value === '') {
        nameDisplay.textContent = 'Not provided'
    }break;


    case 'jobInput':
        jobDisplay.textContent = e.target.value;
    if (e.target.value === '') {
        jobDisplay.textContent = 'Not provided'
    } break;


    case 'bioInput':
        bioDisplay.textContent = e.target.value;
    if (e.target.value === '') {
        bioDisplay.textContent = 'Not provided'
    } break;


    case 'ageInput':
        ageDisplay.textContent = e.target.value;
    if (e.target.value === '') {
        ageDisplay.textContent = 'Not provided'
    } break;

    default:
        break;
   }
    
    
    
}

inputList.forEach((input)=>input.addEventListener('input',Update_text))
bioInput.addEventListener('input',Update_text)

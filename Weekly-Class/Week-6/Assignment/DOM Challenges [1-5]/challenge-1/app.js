/**
 * Write your challenge solution here
 */

let bulb_light = document.getElementById('bulb');

let toggleBtn = document.getElementById('toggleButton');
let body = document.getElementsByTagName('body')[0];


function Dark_mode(e) {
    if (body.className !== 'dark-mode'){
        body.className = 'dark-mode'
        toggleBtn.textContent = 'Turn Off'
        bulb_light.className = 'bulb'
        document.getElementById('status').innerText = "Status: On"
    } else{
        body.classList.remove('dark-mode') 
        toggleBtn.textContent = 'Turn Off'
        bulb_light.className = 'bulb off'
        document.getElementById('status').innerText = "Status: Off"
    }
}
toggleBtn.addEventListener('click', Dark_mode)

/**
 * Write your challenge solution here
 */

let taskList = document.getElementById('taskList')

let taskInput = document.getElementById('taskInput')

let addBtn = document.getElementById('addButton')
console.log(addBtn);

addBtn.addEventListener('click', (e)=>{
    let li = document.createElement('li')
    li.classList.add('task-item')


  let checkbox =  document.createElement('input')
  checkbox.type = 'checkbox'
  console.log(checkbox)
  checkbox.classList.add('complete-checkbox')
  li.appendChild(checkbox)

  li.appendChild(document.createTextNode(taskInput.value))

  let deleteBtn = document.createElement('button')
  deleteBtn.classList.add('delete-button')
  deleteBtn.textContent = 'Delete'
  li.appendChild(deleteBtn)


  
    
    taskList.appendChild(li)
    taskInput.value = ''
})



// function hello (e){
//     let li = document.createElement('li')
//     li.textContent = taskInput.value
//     li.classList.add('task-item')
//     console.log(li);
    
//     taskList.appendChild(li)
// }
/**
 * Write your challenge solution here
 */

let taskList = document.getElementById('taskList')

let taskInput = document.getElementById('taskInput')

let addBtn = document.getElementById('addButton')
console.log(addBtn);

let tasks = 0;
let Completed = 0;


// console.log(taskList.childElementCount);



addBtn.addEventListener('click', (e)=>{

  // Adding classname because in Css there is a predefined styles are present for the element and can be accessable by adding the tag name sto the corresponding elements


  // Counting the total tasks
  document.getElementById('totalTasks').textContent = `Total tasks: ${++tasks}`

  // creating a li tag and attaching className -> task-item
  let li = document.createElement('li');
  li.classList.add('task-item');

  // if the task count is exactly one (means while the first task is  added) it will remove the default massage
  if (tasks === 1) {
    document.getElementsByClassName('empty-list')[0].remove();
  }

  // Creating a checkbox and adding the className -> complete-checkbox and appending it to li element
  let checkbox =  document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('complete-checkbox');
  li.appendChild(checkbox);

  // creasting a span tag and adding it's width -> 430px and equalling it to the string value of taskInput.value
  let Text = document.createElement('span');
  // Text.classList.add('task-item')
  Text.textContent = taskInput.value;
  Text.style.width = '430px';
  li.appendChild(Text);


  // creating a delelte btn and adding className -> delete-button and textContent -> delete and at last appending it to the li tag
  let deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-button');
  deleteBtn.textContent = 'Delete';
  li.appendChild(deleteBtn);

  // Append the li element to the ul(taskList) and cleared the input box after appending
  taskList.appendChild(li);
  taskInput.value = '';

  // Added a eventListner to the ceckbox, it will strike thrugh the text as soon as the checkbox is ticked
  checkbox.addEventListener('click', (e)=> {
    e.target.nextElementSibling.style.textDecoration = 'line-through';
    e.target.nextElementSibling.style.color = '#9897A9';

    // Counting the total Completed tasks
    document.getElementById('completedTasks').textContent = `Completed: ${++Completed}`; 
  })

  // Added a eventListner to the delete btn to remove the li tag and to decrease the no of tasks by one when triggerd
  deleteBtn.addEventListener('click',(e)=>{ 
    e.target.parentNode.remove();
    document.getElementById('totalTasks').textContent = `Total tasks: ${--tasks}`; 

    // if the tasks count is zero it will append a new li with the default massage 
    if(tasks == 0){
      emptymassage = document.createElement('li')
      emptymassage.classList.add('empty-list')
      emptymassage.textContent = 'No tasks yet. Add one above!'
      taskList.appendChild(emptymassage);

    }

    // Extra feature if you need to remove the count of the deleted tasks
    // document.getElementById('completedTasks').textContent = `Total tasks: ${--Completed}`;  
     
    
  });
  
})



// function hello (e){
//     let li = document.createElement('li')
//     li.textContent = taskInput.value
//     li.classList.add('task-item')
//     console.log(li);
    
//     taskList.appendChild(li)
// }
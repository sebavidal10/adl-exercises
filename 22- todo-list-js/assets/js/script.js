const inputNew = document.querySelector('#newTask');
const task = document.querySelector('#newTask');
const tbodyTasks = document.querySelector('#tasks');
const tasksList = []; 
const totalTask = document.querySelector('#totalTasks');
const taskReady = document.querySelector('#taskReady');

inputNew.addEventListener('keypress', function(e){
  if(e.keyCode === 13){
    addTask();
  }
});

const addTask = () => {
  if(task.value === ''){
    alert('Debe ingresar una tarea');
    return;
  }

  const newTask = {
    id: tasksList.length + 1,
    name: task.value,
    status: false
  };

  tasksList.push(newTask);
  updateList();
}

const updateList = () => {
  let row = '', countTaskReady = 0;
  for(let task of tasksList){
    if(task.status){
      countTaskReady++;
    }
    row += `
       <tr class="${task.status ? 'bg-success' : 'bg-light'}">
         <td>${task.id}</td>
         <td>${task.name}</td>
         <td class="text-right">
          <button onclick="updateStatus(${task.id})" class="btn btn-${task.status ? 'success' : 'warning'}">${task.status ? 'Realizada' : 'Pendiente'}</button>
         <button onclick="deleteTask(${task.id})" class="btn btn-danger" id="btnEliminar">Eliminar</button></td>
       </tr>
     `;
  }

  task.value = '';
  tbodyTasks.innerHTML = row;

  totalTask.innerHTML = tasksList.length;
  taskReady.innerHTML = countTaskReady;
}

const updateStatus = (taskId) => {
  const index = tasksList.findIndex(task => task.id === taskId);
  tasksList[index].status = !tasksList[index].status;
  updateList();
}

const deleteTask = (taskId) => {
  const confirmation = confirm('¿Está seguro de eliminar la tarea?');
  if(confirmation){
    const index = tasksList.findIndex(task => task.id === taskId);
    tasksList.splice(index, 1);
    updateList();
  }
}

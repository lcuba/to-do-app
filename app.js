function onReady() {

  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {

    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    newToDoText.value = '';

    renderTheUI();

    id++;

  }

  function deleteToDo(id) {

    toDos = toDos.filter((toDo) => toDo.id !== id);
    renderTheUI();

  }

  function renderTheUI() {

    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {

      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const deleteButton = document.createElement('input');
      deleteButton.type = 'button';
      deleteButton.value = 'delete';
      checkbox.type = 'checkbox';

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);

      deleteButton.addEventListener('click', event =>{
        deleteToDo(toDo.id);
      });

    });

  }

  addToDoForm.addEventListener('submit', event => {

    event.preventDefault();
    createNewToDo();

  });

  renderTheUI();

  }

window.onload = function() {
  onReady();
};

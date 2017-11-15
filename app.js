function onReady() {

  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    let title = newToDoText.value;

    let newLi = document.createElement('li');

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    let removeItemButton = document.createElement('input');
    removeItemButton.type = "button";
    removeItemButton.value = "Remove";
    removeItemButton.id = "removeButton";

    newLi.textContent = title;

    newLi.appendChild(checkbox);

    newLi.appendChild(removeItemButton);

    toDoList.appendChild(newLi);

    newToDoText.value = '';

    removeItemButton.addEventListener('click', event => {
      newLi.parentNode.removeChild(newLi);
    });
  });
}

window.onload = function() {
  onReady();
};

const form = document.querySelector('form');
const input = document.querySelector('#new-task');
const list = document.querySelector('#todo-list');

let tasks = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const task = input.value.trim();

  if (task) {
    tasks.push(task);

    renderTasks();

    input.value = '';
    input.focus();
  }
});

function renderTasks() {
  list.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task}</span>
      <button data-index="${index}">X</button>
    `;

    const button = li.querySelector('button');
    button.addEventListener('click', () => {
      tasks.splice(index, 1);
      renderTasks();
    });

    list.appendChild(li);
  });
}

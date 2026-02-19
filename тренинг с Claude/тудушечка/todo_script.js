/* let ages = [15, 22, 18, 30, 12, 45, 17, 25];
let words = ["привет", "мир", "javascript", "код", "программирование"];

let olds = ages.filter((n) => n >= 18);
let doubles = olds.map((n) => n * 2);
console.log(doubles);
/* - попытка через for () - not good
let longWords = [];

for (i = 0; i < words.length; i++) {
  if (words[i].length > 5) {
    longWords.push(words[i]);
  }
}
 */
/* let capitals = words
  .filter((word) => word.length > 5)
  .map((word) => word.toUpperCase());

console.log(capitals);

let sum = olds.reduce((acc, n) => acc + n, 0);
let averages = sum / olds.length;
console.log(averages);

let teenAgers = !!ages.find((n) => n >= 13 && n <= 17);
console.log(teenAgers);

let hasTeens = ages.some((age) => age >= 13 && age <= 17);
console.log(hasTeens);

let longWord = words.reduce((a, b) => (b.length > a.length ? b : a));
console.log(longWord); */

// TODO List

let inTask = document.getElementById('taskInput');
let inButton = document.getElementById('addButton');
let onTask = document.getElementById('taskList');
let counTask = document.getElementById('taskCount');

let tasks = [];

inButton.addEventListener("click", handleNewTask) 

function handleNewTask() {

    let taskText = inTask.value.trim();

    if (taskText === '') {
        alert('Введи задачу');
        return;
    };

    let newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(newTask);
    inTask.value = '';
    
    renderTasks();
}

function renderTasks() {
    // Очистить список (безопасно)
    onTask.replaceChildren();
        // Пройти по задачам
    tasks.forEach(task => {
        //создать элементы
        let li = document.createElement('li');
        let span = document.createElement('span');
        let button = document.createElement('button');
        //удаление
        
        //классы
        li.className = 'task-item';
        span.className = 'task-text';
        button.className = 'delete-btn';
        //текст
        span.textContent = task.text
        button.textContent = "Удалить";
    
        button.addEventListener("click", () => {
        tasks = tasks.filter(t => t.id !== task.id);
        renderTasks();
    });
        //вложенность
        li.appendChild(span);
        li.appendChild(button);
        //на страницу
        onTask.appendChild(li);

    });
        // Счётчик
    counTask.textContent = `Задач: ${tasks.length}`;
}

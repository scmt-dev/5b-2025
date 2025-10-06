const idComplete = document.getElementById('complete');
const idProgress = document.getElementById('progress');
const todoInput = document.getElementById('todo');
const addTodo = document.getElementById('addTodo');
const list = document.getElementById('list');

const todoList = [
    { title: 'JavaScript', complete: false },
    { title: 'ຈັດຕາຕະລາງປະຈຳອາທິດ', complete: false }
]

function renderCount() {
    const totalComplete = todoList.filter(item => item.complete).length;
    const unComplete = todoList.filter(item => !item.complete).length;
    idProgress.innerText = `Progress (${unComplete})`;
    idComplete.innerText = `Complete (${totalComplete})`;
}

function addTodoItem() {
    const title = todoInput.value;
    const todo = {
        title,
        complete: false
    }
    todoInput.value = '';
    todoList.push(todo);
    renderCount();
}

function renderTodoList() {
    list.innerHTML = '';
    todoList.forEach(item => {
        const li = `<li>
                <input type="checkbox" ${item.complete ? 'checked' : ''}>
                <span>${item.title}</span>
                <button>x</button>
                </li>
                    `
        list.innerHTML += li;
    })
}

renderCount();
renderTodoList();
addTodo.addEventListener('click',() =>{
    addTodoItem();
    renderTodoList();
});
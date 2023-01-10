// let input = document.getElementById('input');
// let form = document.getElementById('form');
// let button = document.getElementById('button');
// let ul = document.getElementById('ul')

// button.addEventListener("submit",addList(e))
// function addList(e){
//     e.preventDefault();
//     let li = document.createElement('li');
//     li.innerText = input.value;
//     ul.append(li);

// }

function addTask(e) {
    console.log(e);
    e.preventDefault();
    const newTodoText = document.getElementById("newTaskInput");
    const todoListEl = document.getElementById("todoList");
    console.log(todoListEl);
    console.log(newTodoText.value, "newTodoTextEl.value");
    const li = document.createElement("li");
    li.innerText = newTodoText.value;
    let checkbox = document.getElementById("checkBox");
    checkbox.innerHTML = '<input type="checkbox" id="myCheck"></input>'
    li.append(checkbox)
    todoListEl.appendChild(li);

    // console.log(li, "newTodo");
    li.addEventListener("click", () => {
     let checked = document.querySelector('li');
     checked.innerHTML=
     li.append(checked)("myCheck").checked = true;
    });
    newTodoText.value = "";
  }
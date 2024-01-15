const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements(arrObj) {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
  for(let i = 0; i < arrObj.length; i++) {
    const result = createTaskItem(arrObj[i]);
    ul.append(result);
  }

  return ul;
}
renderElements(tasks);

function createTaskItem(obj) {
  const listItem = document.createElement("li");
  const divBlock = document.createElement("div");
  const spanItem = document.createElement("span");
  const paragraph = document.createElement("p");
  const buttonItem = document.createElement("button");

  listItem.classList.add("task__item");
  divBlock.classList.add("task-info__container");
  paragraph.innerText = obj.title;
  buttonItem.classList.add("task__button--remove-task");
  spanItem.classList.add("task-type");

  if(obj.type.toLowerCase() == "urgente") {
    spanItem.classList.add("span-urgent");
  }
  else if(obj.type.toLowerCase() == "importante") {
    spanItem.classList.add("span-important");
  }
  else {
    spanItem.classList.add("span-normal");
  }

  divBlock.append(spanItem, paragraph);
  listItem.append(divBlock, buttonItem);

  buttonItem.addEventListener("click", function() {
    const index = tasks.indexOf(obj);
    tasks.splice(index, 1);
    renderElements(tasks);
  })

  return listItem;
}

function newTask() {
  const btnAddTask = document.querySelector(".form__button--add-task");
  
    btnAddTask.addEventListener("click", function(event) {
    event.preventDefault();

    const insertTask = document.querySelector(".form__input--text");
    const selectTask = document.querySelector(".form__input--priority");

    let objTask = {
      title: insertTask.value,
      type: selectTask.value
    };

    tasks.push(objTask);

    renderElements(tasks);
  })
}
newTask();

// function searchTask() {
//   const form = document.querySelector(".form__container");

//   form.addEventListener("submit", function(event) {
//     event.preventDefault();

//     const searchInput = document.querySelector(".form__input--text");
//     const filteredTasks = [];

//     for(let i = 0; i < tasks.length; i++) {
//       const currentTask = tasks[i];

//       const searchTask = searchInput.value.toLowerCase();
//       if(currentTask.title.includes(searchTask)) {
//         filteredTasks.push(currentTask);
//       }
//     }

//     renderElements(filteredTasks);
//   })
// }
// searchTask();
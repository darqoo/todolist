var dataBase = require('./dataBase')

//clear list before render actual list
function clearList() {
  with(document.querySelector('.toDoList')) {
    while (hasChildNodes()) {
      removeChild(firstChild)
    }
  }
}

//adding delete function for each button
function addClickDel(index, bDel) {
  bDel.addEventListener("click", function() {
    dataBase.dBase.splice(index, 1);
    Render();
  })
}

//render elements on the list
function Render() {
  clearList();
  var todolist = document.querySelector("div.toDoList");
  var ul = document.createElement("ul");
  todolist.appendChild(ul);

  function renderElement(element, index, array) {
    var li = document.createElement("li");
    li.classList.add("liList");
    ul.appendChild(li);

    var bDel = document.createElement("button")
    bDel.classList.add("del" + index);
    bDel.classList.add("bDone");
    bDel.textContent = "Done";
    li.appendChild(bDel);

    addClickDel(index, bDel);

    var span = document.createElement("span");
    span.textContent = dataBase.dBase[index];
    li.appendChild(span);

  }

  dataBase.dBase.forEach(renderElement);
}

module.exports = {
  Render: Render,
}

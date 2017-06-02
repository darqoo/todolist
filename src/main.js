//database
var dBase = ["something to do 1", "something to do 2", "something to do 3"];
var txt = document.querySelector(".txt");

function clearList() {
  with(document.querySelector('.toDoList')) {
    while (hasChildNodes()) {
      removeChild(firstChild)
    }
  }
}

function addClickSend(bSend) {
  var bSend = document.querySelector(".addLine");

  bSend.addEventListener("click", function() {
    send();
  })

  txt.addEventListener("keyup", function (event) {
    if (event.keyCode==13) {
        send();
    }
});

}


function send() {
  dBase.push(txt.value);
  txt.value = "";
  Render();
}

function addClickDel(index, bDel) {
  bDel.addEventListener("click", function() {
    dBase.splice(index, 1);
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
    span.textContent = dBase[index];
    li.appendChild(span);

  }

  dBase.forEach(renderElement);
}

Render();
addClickSend();

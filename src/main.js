//database
var dBase = ["something to do 1", "something to do 2", "something to do 3"];


//render elements on the list

var todolist = document.querySelector("div.toDoList");
//var el = document.querySelector("div.poop");
var ul = document.createElement("ul");
todolist.appendChild(ul);


function renderElement(element, index, array) {
  var li = document.createElement("li");
  var bDel = document.createElement("button")
  bDel.style = "font-size: 9px; background-color: #e6f2ff; border: none;"
  bDel.textContent = "Done";
  //tu dodaj klase do przycisku
  bDel.classList.add("del"+index);

  addClick(index, bDel);


  li.appendChild(bDel);
  li.innerHTML += " " + dBase[index]; //tu dodaję button delete;
  ul.appendChild(li);
}


dBase.forEach(renderElement);

//on click
var txt = document.getElementById("txt")

function addClick(index, bDel) {
  bDel.addEventListener("click", function() {
    console.log(index)
  })
}

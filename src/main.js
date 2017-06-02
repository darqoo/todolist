var renderList = require('./renderList')
var dataBase = require('./dataBase')


var txt = document.querySelector(".txt");

function send() {
  if (txt.value == "" || txt.value == " " || txt.value == "  " || txt.value == "   ") {} else {
    dataBase.dBase.push(txt.value);
    txt.value = "";
    renderList.Render();
  }
}

//than click button send
function addClickSend(bSend) {
  var bSend = document.querySelector(".addLine");

  bSend.addEventListener("click", function() {
    send();
  })

  //when press ENTER key on keyboard
  txt.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
      send();
    }
  });

}

renderList.Render();
addClickSend();

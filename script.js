const edit_El = document.createElement("button");

document.getElementById("myBTN").onclick = function () {
  var textInp = document.getElementById("anything");
  var ul = document.getElementById("unorderlist");

  var li = document.createElement("li");

  edit_El.classList.add("edit");
  edit_El.innerHTML = "Edit";

  li.textContent = textInp.value;
  li.appendChild(edit_El);

  ul.appendChild(li);

  var selectLI = document.getElementsByTagName("li");
  for (let i = 0; i < selectLI.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    selectLI[i].appendChild(span);
  }

  var close = document.getElementsByClassName("close");
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
};

edit_El.addEventListener("click", () => {
  if (edit_El.textContent.toLowerCase() === "edit") {
    edit_El.textContent = "save";
  } else {
    edit_El.textContent = "edit";
  }
});

function myFunction() {
  const list = document.getElementById("unorderlist");
  list.removeChild(list.firstElementChild);
}
document.getElementById("myClear").onclick = function () {
  var myList = document.getElementById("unorderlist");
  const inside = document.querySelectorAll("#anything");

  myList.innerHTML = "";
  inside.forEach((input) => {
    input.value = "";
  });
};

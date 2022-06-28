const editBTN = document.getElementById("unorderlist");

document.getElementById("myBTN").onclick = function () {
  var textInp = document.getElementById("anything");

  var ul = document.getElementById("unorderlist");

  var NodeBtn = document.getElementsByTagName("li");

  var button = document.createElement("button");
  var li = document.createElement("li");
  li.innerHTML += `<li>${textInp.value}</li>`;
  button.innerHTML = "edit";

  li.appendChild(button);
  ul.appendChild(li);

  for (let i = 0; i < NodeBtn.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    NodeBtn[i].appendChild(span);
  }
  var close = document.getElementsByClassName("close");
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
};

editBTN.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const button = e.target;
    const li = button.parentNode;
    const ul = li.parentNode;

    if (button.textContent === "remove") {
      ul.removeChild(li);
    } else if (button.textContent === "edit") {
      const span = li.firstElementChild;
      const input = document.createElement("input");
      input.type = "text";
      input.value = span.textContent;
      li.insertBefore(input, span);
      li.removeChild(span);
      button.textContent = "save";
    } else if (button.textContent === "save") {
      const input = li.firstElementChild;
      const span = document.createElement("span");
      span.textContent = input.value;
      li.insertBefore(span, input);
      li.removeChild(input);
      button.textContent = "edit";
    }
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

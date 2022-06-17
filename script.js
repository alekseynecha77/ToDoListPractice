
//when a user click on the button, addeventlisthener means listhen for the events of a user
//
document.getElementById("myBTN").onclick = function() {
    var text = document.getElementById('anything').value;

var li = document.createElement('li');

var button = document.createElement("BUTTON");
var btnClear = document.createElement("BUTTON");
var closest = document.querySelectorAll('ul #unorderlist');
btnClear.innerHTML='RESET';
closest= btnClear.closest(li);
button.innerHTML = "clear";
li.innerHTML += "<li>"+text+"</li>";


document.getElementById("unorderlist").appendChild(li);

}


function myFunction(){
    const list = document.getElementById('unorderlist');
    list.removeChild(list.firstElementChild);
}

document.getElementById("myClear").onclick = function() {


    var myList = document.getElementById('unorderlist');
    const inside = document.querySelectorAll('#anything');


   
    myList.innerHTML = '';
    inside.forEach(input => {
        input.value = '';
      });
}


//when a user click on the button, addeventlisthener means listhen for the events of a user
//
document.getElementById("myBTN").onclick = function() {
    var textInp = document.getElementById('anything').value;

var li = document.createElement('li'); 
 var ul = document.getElementById("unorderlist");


var NodeBtn = document.getElementsByTagName('li');
var t = document.createTextNode(textInp);

li.appendChild(t);

for(let i = 0; i< NodeBtn.length; i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    NodeBtn[i].appendChild(span);

}
var close = document.getElementsByClassName("close");
for(let i =0; i<close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }


}



ul.appendChild(li);

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
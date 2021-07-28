var list = document.getElementById("list");
var input = document.getElementById("todos");
function add() {
    if (input.value == "") {
        alert("PLease enter todo item!");
    }
    else {
        var li = document.createElement("li");
        var text = document.createTextNode(input.value);
        li.appendChild(text);
        var edit = document.createElement("button");
        var txt = document.createTextNode("Edit");
        edit.setAttribute("onclick", "edit(this)");
        edit.appendChild(txt);
        var deleteonce = document.createElement("button");
        var oncetxt = document.createTextNode("Delete");
        deleteonce.setAttribute("onclick", "deleteds(this)");
        deleteonce.appendChild(oncetxt);
        list.appendChild(li);
        li.appendChild(edit);
        li.appendChild(deleteonce);
        input.value = "";
    }
}
function del() {
    if (document.getElementById("list").innerHTML == "") {
        alert("There is no todo item to delete.");
    }
    else {
        document.getElementById("list").innerHTML = "";
    }
}
function deleteds(e) {
    e.parentNode.remove();
}
function edit(e) {
    var edited = prompt("Enter the edited value of todo.", e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = edited;
}
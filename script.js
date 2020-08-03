var input = document.getElementById("userinput");
var btn = document.getElementById("enter");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");


function strikeThrough(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
};

function inputLength() {
    return input.value.length;
}

function createElement() {
    var divClass = document.createElement("div");
    divClass.setAttribute("class", "lt_wrapper");

    var deleteDiv = document.createElement("div");
    deleteDiv.setAttribute("class", "div");

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    divClass.appendChild(li);
    divClass.appendChild(deleteDiv);
    ul.appendChild(divClass);
    input.value = "";


    var delBtn = document.createElement("button");
    delBtn.appendChild(document.createTextNode("Delete"));
    deleteDiv.appendChild(delBtn);
    addListenerOnDelete();
}

function addElementOnClick() {
    if (inputLength() > 0) {
        createElement();
    }
}

function addElementOnEnter(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createElement();
    }
}


function addDeleteButton() {
    for (var i = 0; i < li.length; i++) {
        var deleteBtn = document.createElement("button");
        deleteBtn.appendChild(document.createTextNode("Delete"));
        var deleteDiv = document.getElementsByClassName("div");

        deleteDiv[i].appendChild(deleteBtn);
    }
}

function deleteItem() {

    var del = document.querySelectorAll("div");
    for (var i = 0; i < del.length; i++) {
        this.parentNode.remove();
    }
}

function addListenerOnDelete() {
    var deleteButtons = document.getElementsByClassName("div");
    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", deleteItem);
    }
}

ul.addEventListener("click", strikeThrough)
btn.addEventListener("click", addElementOnClick);
input.addEventListener("keypress", addElementOnEnter);
addDeleteButton();
addListenerOnDelete();
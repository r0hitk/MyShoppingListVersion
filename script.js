var input = document.getElementById("userinput");
var btn = document.getElementById("enter");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("li");

function createListItem(inputVal) {
    var li = document.createElement("li");
    let button = document.createElement("button");
    li.appendChild(document.createTextNode(inputVal));
    button.appendChild(document.createTextNode("Delete"));
    li.appendChild(document.createTextNode(" "));
    li.appendChild(button);
    ul.appendChild(li);
}

input.addEventListener("keypress", function(event) {

    if (input.value.length > 0 && event.keyCode === 13) {
        createListItem(input.value);
        input.value = "";
    }
});

btn.addEventListener("click", function() {

    if (input.value.length > 0) {
        createListItem(input.value);
        input.value = "";
    }
});

items[0].addEventListener("click", function() {
    items[0].classList.toggle("done");
});
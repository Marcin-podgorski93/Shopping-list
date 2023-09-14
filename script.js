// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function() {
//     console.log("CLICK!!!");
// })

var button = document.getElementById("enter");

var input = document.getElementById("userinput");

var ul = document.querySelector("ul");


// Funkcje dodane do wersji uproszczonej
function inputLenght() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if  (inputLenght() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if  (inputLenght() > 0 && event.key === "Enter") {
        createListElement();
    }
}

// Wersja podstawowa

// button.addEventListener("click", function () {
//     if  (input.value.length > 0) {
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//         input.value = "";
//     }
// })

// input.addEventListener("keydown", function (event) {
//     if  (input.value.length > 0 && event.key === "Enter") {
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//         input.value = "";
//     }
// })

// Wersja uproszczona

button.addEventListener("click", addListAfterClick);


input.addEventListener("keydown", addListAfterKeypress);


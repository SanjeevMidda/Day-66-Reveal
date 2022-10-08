let one = document.querySelector(".one h1");
let two = document.querySelector(".second h1");
let three = document.querySelector(".third h1");
let four = document.querySelector(".forth h1");

let button = document.querySelector(".button");

button.addEventListener('click', addLetter);

// function addLetter(){
//     let newElement = document.createElement("h1");
//     newElement.innerHTML = "A";
//     newElement.classList.add('a');

//     one.appendChild(newElement);
//     two.appendChild(newElement);
//     three.appendChild(newElement);
//     four.appendChild(newElement);
// }

function addLetter(){
    one.classList.toggle("update");
    two.classList.toggle("update");
    three.classList.toggle("update");
    four.classList.toggle("update");
}
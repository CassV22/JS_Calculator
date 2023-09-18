let num1 = 0;
let num2 = 0;
let operator;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

//get all buttons with class of allBtns then add an onclickk event listener for each button
let buttons = document.querySelectorAll(".allBtns");
console.log(buttons);
buttons.forEach(button => button.addEventListener("click", () => {
    alert("I just got clicked!"); 
}));

//every button needs a unique id so that when it is clicked, that number is stored mathematically
//each operator button will equate to one of the functions/will call one of the functions; could use and if statement
//ex) if the add button is clicked, store that as the operator variable and when equals is clicked, call the add function
             

/*
let userName = prompt("What is your name?");
alert("Hallo, " + userName + "! Welcome to my site!");
let age = prompt("How old are you?");
let ageNumber = Number(age);
let yearsLeft = 100 - ageNumber;
alert("You are " + yearsLeft + " years to 100");
*/


/*let userName = prompt("What is your name?");
alert("Hi, " + userName + "! Nice to meet here!");
let color = prompt(userName + ", what is your fovorite color?");
alert(userName + " , " + color + " is pleasant color and cool choice");
let badColor = prompt(userName + ", what color you don't like?");
alert("Oh, " + userName + ", " +  badColor + " is probably not so ugly...");
let age = prompt(userName + ", how old are you?")
let ageNumber = Number(age)
let birthYear = 2026 - ageNumber
alert("So you were probably born in " + birthYear + " , " + userName + "...");
*/

/*let num1 = Number(prompt("Enter first number:"));
let operator = prompt("Enter operatin (+, -, *, /):");
let num2 = Number(prompt("Enter second number:"));
let result;
if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    result = num1 / num2;
} else {
    result = "Undefined operation";
}
alert(num1 + "" + operator + "" + num2 + "=" + result);
*/

// let button = document.

let button = document.querySelector(".btn");
let messagePlace = document.querySelector(".btn");

button.addEventListener("click", function () {
    let name = prompt("What is your name");
    messagePlace.textContent = "Hi, " + name + ", I'm glad to meet you here";
   
    setTimeout(() => {
        messagePlace.style.opacity = "0";
        setTimeout(() => {
            messagePlace.textContent = "Чирканите мне";
            messagePlace.style.opacity = "1";

        }, 300);
    }, 2000);
});
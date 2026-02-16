/*debugger;

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

//Термометр настроения
/*
let moodButton = document.getElementById("moodButton");
let moodInput = document.getElementById("moodInput");
let moodResponse = document.getElementById("moodResponse");

function handleMood() {
  moodResponse.style.opacity = "1";

  let mood = moodInput.value.toLowerCase().trim();
  if (
    mood === "хорошее" ||
    mood === "хорошо" ||
    mood === "норм" ||
    mood === "ок"
  ) {
    moodResponse.textContent = "🍻 Отлично, поддерживаю!";
    moodResponse.style.color = "green";
  } else if (
    mood === "плохое" ||
    mood === "плохо" ||
    mood === "дрянь" ||
    mood === "говно" ||
    mood === "хз"
  ) {
    moodResponse.textContent = "🤝 Держись, прорвемся!";
    moodResponse.style.color = "orange";
  } else if (
    mood === "гегель" ||
    mood === "задумчивое" ||
    mood === "философия" ||
    mood === "разобраться в жизни" ||
    mood === "осмыслить"
  ) {
    moodResponse.textContent = "🧠 О, ценитель! Респект!";
    moodResponse.style.color = "purple";
  } else {
    moodResponse.textContent = "👋 Будь по твоему!";
    moodResponse.style.color = "blue";
  }

  setTimeout(() => {
    moodResponse.style.opacity = "0";
    setTimeout(() => {
      moodResponse.textContent = "/фыва";
      moodResponse.style.color = "";
    }, 300);
  }, 3000);
}

if (moodButton) {
  moodButton.addEventListener("click", handleMood);

  moodInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      handleMood();
    }
  });
}
*/
function askUser() {
  let userName = prompt("What is your name?");

  if (userName === null) {
    alert("Action canceled");
    return;
  }

  let trimmedName = userName.trim();
  if (trimmedName === "") {
    alert("Name can not be empty");
    return;
  }

  alert("Hallo, " + trimmedName + "! Welcome to my site!");

  let birthYear = prompt(trimmedName + ", what is your birthyear?");
  if (birthYear === null) {
    alert("Ok, next time!");
    return;
  }

  let birthYearNumber = Number(birthYear);
  if (
    isNaN(birthYearNumber) ||
    birthYearNumber < 1900 ||
    birthYearNumber > 2026
  ) {
    alert("Wrong birthyear!");
    return;
  } else {
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYearNumber;
    alert(trimmedName + ", I guess you are " + age + " years old.");
  }
}
askUser();

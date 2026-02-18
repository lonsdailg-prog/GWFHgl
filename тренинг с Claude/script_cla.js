//FizzBuzz
/*
const myNumbers = Array.from({ length: 30 }, (_, i) => i + 1);
*/
/*
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
*/

/*Обратный отсчет*/
/*
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("ПУСК!");
*/
/*
/*таблица умножения для 9 до 10*/
/*
let multiplier = 9;
for (let i = 1; i <= 10; i++) {
  let result = multiplier * i;
  console.log(`${multiplier} x ${i}  = ${result}`);
}
*/
/*
let factorial = 1;
for (let i = 1; i <= 7; i++) {
  factorial = factorial * i;
  console.log(factorial);
}
*/
/*
let cities = ["Moscow", "Sankt-Peterburg", "Kaluga", "Tver", "Novgorod"];
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}
*/
/*
let numbers = [15, 27, 8, 42, 33, 19];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);
*/
/*
let numbers = [15, 27, 8, 42, 33, 19];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max);
*/
/*
let range = [3, 7, 2, 9, 1, 5, 8, 4, 6];
let moreFive = 0;

for (let i = 0; i < range.length; i++) {
  if (range[i] > 5);
  {
    moreFive++;
  }
}
console.log(moreFive);
*/
/*
let range = [2, 5, 8, 3, 6];
let doubled = [];
for (let i = 0; i < range.length; i++) {
  doubled.push(range[i] * 2);
}
console.log(range);
console.log(doubled);
*/
/*
let range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let quadros = [];

for (let i = 0; i < range.length; i++) {
  quadros.push(range[i] ** 2);
}
console.log(range);
console.log(quadros);
*/
/*
let range = [12, 7, 4, 9, 15, 22, 31, 18];
let even = [];

for (let i = 0; i < range.length; i++) {
  if (range[i] % 2 === 0) {
    even.push(range[i]);
  }
}
console.log(even);
*/
/*
let range = ["кот", "собака", "хомяк", "попугай", "рыбка"];
let longs = [];

for (let i = 0; i < range.length; i++) {
  if (range[i].length > 4) {
    longs.push(range[i]);
  }
}
console.log(longs);
*/
/*
Дан массив оценок: [5, 3, 4, 5, 2, 4, 5, 3, 4, 5, 4, 3, 5, 4, 5]

Напиши программу, которая выводит:

Средний балл

Количество пятёрок

Количество двоек

Процент пятёрок от общего числа-*/
/*
let grades = [5, 3, 4, 5, 2, 4, 5, 3, 4, 5, 4, 3, 5, 4, 5];
let sum = 0;
let countFive = 0;
let countTwo = 0;

for (let i = 0; i < grades.length; i++) {
  sum += grades[i];
  if (grades[i] === 5) {
    countFive++;
  } else if (grades[i] === 2) {
    countTwo++;
  }
}
let average = sum / grades.length;
let persentFive = (countFive / grades.length) * 100;

console.log("Пятёрок:", countFive);
console.log("Двоек:", countTwo);
console.log("Средний бал:", average.toFixed(2));
console.log("Процент пятёрок:", persentFive + " %");
*/
/*Пятёрок: 6
Двоек: 1
Средний бал: 4.07
Процент пятёрок: 40 % 
*/

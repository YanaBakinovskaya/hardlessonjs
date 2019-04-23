"use strict";

// Сделать так, чтобы строка начиналась с большой буквы
let str = 'урок-3-был слишком легким';
let strFirstChar = str[0].toLocaleUpperCase();

str = strFirstChar + str.substring(1);

//замените все “-” на пробелы
for (let i = 0; i <= str.length; i++) {
  str = str.replace('-', ' ');
}
console.log(str);

//Из получившейся строки вырезать слово “легким”, в этом же слове заменить 2 последние буквы на букву “о”
//let posWord = str.indexOf(' ')
let word = str.slice(-6);
word = word.replace('им', 'oо');
console.log(word);

//Вывести в консоль квадратный корень из суммы кубов его элементов (Да, человека нужно исключить)
let arr = [20, 33, 1, 'Человек', 2, 3];
let pos = arr.indexOf('Человек');

if (pos != -1) {
  arr.splice(pos, 1);
}

let sum = 0;

for(let i = 0; i < arr.length; i++) {
  sum += Math.pow(arr[i], 3);
}
sum = Math.sqrt(sum);

console.log(sum);

// Создайте функцию, которая принимает 1 аргумент (название произвольное)

//Если как аргумент передана не строка - функция оповещает об этом пользователя

//В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце

//Если строка более 50 знаков - то после 50го символа часть текста скрывается и вместо них появляются три точки (...)

function workWithStr(str) {
  if (typeof(str) !== 'string') {
    alert('Неправильный ввод! Введите, пожалуйcта строку');
  } else if (typeof(str) === 'string') {
    str = str.trim();
    if (str.length > 50) {
      str = str.slice(0, 50) + '...';
      console.log(str);
    }
  }
}
workWithStr(' Неправильный ввод! Введите, пожалуйcта строку Неправильный ввод! ');

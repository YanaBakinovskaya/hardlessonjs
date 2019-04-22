"use strict";
let week = [];

week[0] = 'Воскресенье';
week[1] = 'Понедельник';
week[2] = 'Вторник';
week[3] = 'Среда';
week[4] = 'Четверг';
week[5] = 'Пятница';
week[6] = 'Суббота';

console.log(week);

var now = new Date();
console.log(now.getDay());
for (let i=0; i < 7; i++) {
  if (week[i] == 'Суббота' || week[i] == 'Воскресенье') { 
    document.write(week[i].bold() + '<br>');
  } else if (i == now.getDay()) {
    document.write(week[i].italics() + '<br>');
  } else {
    document.write(week[i] + '<br>');
  }
}

let arr = [];

arr[0] = '252364';
arr[1] = '4586611';
arr[2] = '3987230';
arr[3] = '835';
arr[4] = '458623';
arr[5] = '736982';
arr[6] = '926985';

for (let i=0; i < 7; i++) {
  if (arr[i].charAt(0) == '3' || arr[i].charAt(0) == '7') {
    document.write('<br>' + arr[i]);
  }
}
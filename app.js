'use strict';
let score=0;
let userName = prompt('What\'s your name?');
if (userName) {
  alert( 'HELLO ' + userName);
  console.log(userName);

}

function intro(){
  
let myName = prompt('Do you think my name is ola? yes or no');
switch (myName.toLowerCase()) {
case 'yes':
  alert('True');
  console.log('correct');
  score++;
  break;
case 'no':
  alert('False');
  console.log('incorrect');
  break;
default:
  alert('you have to answer next time');
  console.log('you have to answer');
  break;
}


let myAge = prompt('Do you think my age is 30? yes or no');
switch (myAge.toUpperCase()) {
case 'YES':
  alert('False');
  console.log('incorrect');
  break;
case 'NO':
  alert('True');
  console.log('correct');
  score++;
  break;
default:
  alert('you have to answer next time');
  console.log('you have to answer');
  break;
}


let myMajer = prompt('Do you think I\'m a Nutritionist? yes or no');
switch (myMajer.toLowerCase()) {
case 'yes':
  alert('True');
  console.log('correct');
  score++;
  break;
case 'no':
  alert('False');
  console.log('incorrect');
  break;
default:
  alert('you have to answer next time');
  console.log('you have to answer');
  break;
}


let myCode = prompt('Do you think i\'m a Nutritionist and i can\'t learning coding? yes or no');
switch (myCode.toUpperCase()) {
case 'YES':
  alert('False');
  console.log('incorrect');
  break;
case 'NO':
  alert('True');
  console.log('correct');
  score++;
  break;
default:
  alert('you have to answer next time');
  console.log('you have to answer');
  break;
}

let myGoal = prompt('Do you think my future goal is to create my own company? yes or no');

switch (myGoal.toLowerCase()) {
case 'yes':
  alert('True');
  console.log('correct');
  score++;
  break;
case 'no':
  alert('False');
  console.log('incorrect');
  break;
default:
  alert('you have to answer next time');
  console.log('you have to answer');
  break;
}

}
intro()
let birthday=0;
for(let i = 0; i < 4 ; i++){
  birthday = prompt('Can you guess what my birthday number is?');
  birthday = Number(birthday);
  if (birthday === 3) {
    console.log('correct');
    alert('U are correct');
    score++;
    break;
  } else if (birthday > 3) {
    alert('Too high');
  } else
    alert('Too low');
}
alert('My birthday number is 3');


let luckyNumber=0;
for(let i = 0; i < 6 ; i++){
  luckyNumber = prompt('Can you guess what my lucky number is?');
  luckyNumber = Number(luckyNumber);
  if (luckyNumber === 3) {
    console.log('correct');
    alert('U are correct');
    score++;
    break;
  } else if (luckyNumber > 3) {
    alert('Too high');
  } else
    alert('Too low');
}
alert('My lucky number is 3');



alert('your score is ' + score );



alert( 'welcome ' + userName + ' to my website');
console.log(userName);


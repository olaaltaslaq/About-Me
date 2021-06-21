'use strict';

let userName = prompt('What\'s your name?');

if (userName) {
  alert( 'HELLO ' + userName);
  console.log(userName);
}

let myName = prompt('Do you think my name is ola? yes or no');

switch (myName.toLowerCase()) {
case 'yes':
  alert('True');
  // console.log('correct');
  break;
case 'no':
  alert('False');
  //   console.log('incorrect');
  break;
default:
  alert('you have to answer next time');
  //   console.log('you have to answer');
  break;
}


let myAge = prompt('Do you think my age is 30? yes or no');

switch (myAge.toUpperCase()) {
case 'YES':
  alert('False');
  // console.log('incorrect');
  break;
case 'NO':
  alert('True');
  //   console.log('correct');
  break;
default:
  alert('you have to answer next time');
  //   console.log('you have to answer');
  break;
}


let myMajer = prompt('Do you think I\'m a Nutritionist? yes or no');

switch (myMajer.toLowerCase()) {
case 'yes':
  alert('True');
  // console.log('correct');
  break;
case 'no':
  alert('False');
  //   console.log('incorrect');
  break;
default:
  alert('you have to answer next time');
  //   console.log('you have to answer');
  break;
}

let myCode = prompt('Do you think i\'m a Nutritionist and i can\'t learning coding? yes or no');

switch (myCode.toUpperCase()) {
case 'YES':
  alert('False');
  // console.log('incorrect');
  break;
case 'NO':
  alert('True');
  //   console.log('correct');
  break;
default:
  alert('you have to answer next time');
  //   console.log('you have to answer');
  break;
}

let myGoal = prompt('Do you think my future goal is to create my own company? yes or no');

switch (myGoal.toLowerCase()) {
case 'yes':
  alert('True');
  // console.log('correct');
  break;
case 'no':
  alert('False');
  //   console.log('incorrect');
  break;
default:
  alert('you have to answer next time');
  //   console.log('you have to answer');
  break;
}


alert( 'welcome ' + userName + ' to my website');
console.log(userName);


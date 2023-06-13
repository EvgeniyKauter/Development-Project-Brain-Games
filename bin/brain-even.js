#!/usr/bin/env node
//import readlineSync from 'readline-sync';

console.log('brain-even');
//console.log('\n\nWelcome to the Brain Games!');
//const name = readlineSync.question('What is your name? ');
//console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
//let checker = 0;
//let answer = '';
let number = 0;
while (checker < 3) {
  //answer = readlineSync.question('Your answer: ');
  number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);
  if (number % 2 === 0) {
    if (answer === 'yes') {
      //console.log('Correct!');
      //checker += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "yes".`);
      break;
    }
  }
  if (number % 2 !== 0) {
    if (answer === 'no') {
      //console.log('Correct!');
      //checker += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "no".`);
      break;
    }
  }
}
//if (checker === 3) {
//  console.log(`Congratulations, ${name}`);
//}

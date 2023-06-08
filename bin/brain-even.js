#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('brain-even\n\nWelcome to the Brain Games!');
const name = readlineSync.question('What is your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let checker = 0;
let number = 0;
let answer = '';
while (checker < 3) {
  number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);
  answer = readlineSync.question('Your answer: ');
  if (number % 2 === 0) {
    if (answer === 'yes') {
      console.log('Correct!');
      checker += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "yes".`);
      break;
    }
  }
  if (number % 2 !== 0) {
    if (answer === 'no') {
      console.log('Correct!');
      checker += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "no".`);
      break;
    }
  }
}
if (checker === 3) {
  console.log(`Congratulations, ${name}`);
}

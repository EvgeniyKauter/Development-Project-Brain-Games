//import readlineSync from 'readline-sync';

const randOperation = (firstNumber, secondNumber, randomChar) => {
    if (randomChar === '+') {
        return firstNumber + secondNumber;
    }
    if (randomChar === '-') {
        return firstNumber - secondNumber;
    }
    if (randomChar === '*') {
        return firstNumber * secondNumber;
    }
}

console.log('brain-calc');
//console.log('\n\nWelcome to the Brain Games!');
//const name = readlineSync.question('What is your name? ');
//console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');
//let checker = 0;
//let answer = '';
let number1 = 0;
let number2 = 0;
let rezult = 0;
const char = ['*', '-', '+'];
let index = 0;
while (checker < 3) {
  //answer = readlineSync.question('Your answer: ');
  number1 = Math.floor(Math.random() * 100);
  number2 = Math.floor(Math.random() * 100);
  index = Math.floor(Math.random() * 3);
  rezult = randOperation(number1, number2, char[index]);
  console.log(`Question: ${number1} ${char[index]} ${number2}`);
  if (answer === String(rezult)) {
    //console.log('Correct!');
    //checker += 1;
  } else {
    console.log(`Your answer: ${answer}\n"${answer}" is wrong answer ;(. Correct answer was "${rezult}".\nLet's try again, Sam!`);
    break;
  }
  
}
//if (checker === 3) {
//    console.log(`Congratilations, ${name}`);
//  }

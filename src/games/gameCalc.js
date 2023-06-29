import readlineSync from 'readline-sync';
import gameEngine from '../index.js';

const randOperation = (firstNumber, secondNumber, randomChar) => {
  switch (randomChar) {
    case '+': return firstNumber + secondNumber;
    case '-': return firstNumber - secondNumber;
    default: return firstNumber * secondNumber;
  }
};

const askQuestion = () => {
  console.log('What is the result of the expression?');
};

const makelogic = (name) => {
  const char = ['*', '-', '+'];
  let checker = 0;
  while (checker < 3) {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    const index = Math.floor(Math.random() * 3);
    const rezult = randOperation(number1, number2, char[index]);
    console.log(`Question: ${number1} ${char[index]} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === String(rezult)) {
      console.log('Correct!');
      checker += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rezult}".`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (checker === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

const startCalcGame = () => {
  gameEngine(askQuestion, makelogic);
}

export default startCalcGame;

import readlineSync from 'readline-sync';

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
};

const nameOfTheGame = () => {
  console.log('brain-calc');
};

const theQuestion = () => {
  console.log('What is the result of the expression?');
};

const logicOfTheGame = (checker, name) => {
  const char = ['*', '-', '+'];
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
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rezult}".\nLet's try again, ${name}!`);
      break;
    }
  }
  if (checker === 3) {
    console.log(`Congratulations, ${name}`);
  }
};

export { nameOfTheGame, theQuestion, logicOfTheGame };
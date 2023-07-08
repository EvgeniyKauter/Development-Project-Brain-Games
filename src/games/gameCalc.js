import gameEngine from '../index.js';
import getRandomNumber from '../helper.js';

const rule = 'What is the result of the expression?';

const calculation = (firstNumber, secondNumber, randomChar) => {
  switch (randomChar) {
    case '+': return firstNumber + secondNumber;
    case '-': return firstNumber - secondNumber;
    case '*': return firstNumber * secondNumber;
    default: throw new Error(`Unknown item ${randomChar}`);
  }
};

const makelogic = () => {
  const char = ['*', '-', '+'];
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const index = getRandomNumber(0, 2);
  const rezult = calculation(number1, number2, char[index]);
  const expectedAnswer = String(rezult);
  const question = `${number1} ${char[index]} ${number2}`;
  return [expectedAnswer, question];
};

const startCalcGame = () => {
  gameEngine(rule, makelogic);
};

export default startCalcGame;

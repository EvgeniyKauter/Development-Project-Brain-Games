import gameEngine from '../index.js';
import getRandomNumber from '../helper.js';

const rule = 'What is the result of the expression?';

const calculate = (number1, number2, randomChar) => {
  switch (randomChar) {
    case '+': return number1 + number2;
    case '-': return number1 - number2;
    case '*': return number1 * number2;
    default: throw new Error(`Unknown item ${randomChar}`);
  }
};

const makelogic = () => {
  const char = ['*', '-', '+'];
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const index = getRandomNumber(0, 2);
  const rezult = calculate(number1, number2, char[index]);
  const expectedAnswer = String(rezult);
  const question = `${number1} ${char[index]} ${number2}`;
  return [expectedAnswer, question];
};

const startCalcGame = () => {
  gameEngine(rule, makelogic);
};

export default startCalcGame;

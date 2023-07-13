import gameEngine from '../index.js';
import getRandomNumber from '../helper.js';

const description = 'What is the result of the expression?';

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+': return number1 + number2;
    case '-': return number1 - number2;
    case '*': return number1 * number2;
    default: throw new Error(`Unknown item ${operator}`);
  }
};

const generateRound = () => {
  const operators = ['*', '-', '+'];
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const index = getRandomNumber(0, operators.length - 1);
  const result = calculate(number1, number2, operators[index]);
  const answer = String(result);
  const question = `${number1} ${operators[index]} ${number2}`;
  return [answer, question];
};

const startCalcGame = () => {
  gameEngine(description, generateRound);
};

export default startCalcGame;

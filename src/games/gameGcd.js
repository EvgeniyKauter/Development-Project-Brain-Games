import gameEngine from '../index.js';
import getRandomNumber from '../helper.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  let divisor1 = number1;
  let divisor2 = number2;
  let remainder = divisor1 % divisor2;
  while (remainder !== 0) {
    divisor1 = divisor2;
    divisor2 = remainder;
    remainder = divisor1 % divisor2;
  }
  return divisor2;
};

const makelogic = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const rezult = getGcd(number1, number2);
  const question = `${number1} ${number2}`;
  const expectedAnswer = String(rezult);
  return [expectedAnswer, question];
};

const startGcdGame = () => {
  gameEngine(rule, makelogic);
};

export default startGcdGame;

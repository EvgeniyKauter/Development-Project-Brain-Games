import readlineSync from 'readline-sync';
import gameEngine from '../index.js';
import getRandomNumber from '../helper.js';

const question = 'Find the greatest common divisor of given numbers.';
/*
const getDivisorsOfNumber = (number) => {
  let divisor = 1;
  const divisors = [];
  while (number >= divisor) {
    if (number % divisor === 0) {
      divisors.push(divisor);
    }
    divisor += 1;
  }
  return divisors;
};

const getMaxGenDivisor = (divisors1, divisors2) => {
  let lastDivisor1 = divisors1.pop();
  let lastDivisor2 = divisors2.pop();
  if (lastDivisor1 === lastDivisor2) {
    return lastDivisor1;
  }
  while (lastDivisor1 !== lastDivisor2) {
    if (lastDivisor1 < lastDivisor2) {
      lastDivisor2 = divisors2.pop();
    } else {
      lastDivisor1 = divisors1.pop();
    }
  }
  return lastDivisor1;
};
*/

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

const makelogic = (name) => {
  let checker = 0;
  while (checker < 3) {
    const number1 = getRandomNumber(0, 100);
    const number2 = getRandomNumber(0, 100);
    const rezult = getGcd(number1, number2);
    console.log(`Question: ${number1} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    if (rezult === Number(answer)) {
      console.log('Correct!');
      checker += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rezult}".\nLet's try again, ${name}!`);
      break;
    }
  }
  if (checker === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

const startGcdGame = () => {
  gameEngine(question, makelogic);
};

export default startGcdGame;

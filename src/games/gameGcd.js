import readlineSync from 'readline-sync';
import gameEngine from '../index.js';

const question = 'Find the greatest common divisor of given numbers.';

const getAllDivisorsOfNumber = (number) => {
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

const getMaxGeneralDivisor = (divisors1, divisors2) => {
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

const makelogic = (name) => {
  let checker = 0;
  while (checker < 3) {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    const rezult = getMaxGeneralDivisor(getAllDivisorsOfNumber(number1), getAllDivisorsOfNumber(number2));
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
}

export default startGcdGame;

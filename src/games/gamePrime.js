import gameEngine from '../index.js';
import getRandomNumber from '../helper.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let checkPrime = 0;
  for (let divider = 1; divider <= number; divider += 1) {
    if (number % divider === 0) {
      checkPrime += 1;
    }
    if (checkPrime > 2) {
      break;
    }
  }
  return checkPrime === 2;
};

const makelogic = () => {
  const number = getRandomNumber(1, 100);
  const question = `${number}`;
  const expectedAnswer = isPrime(number) ? 'yes' : 'no';
  return [expectedAnswer, question];
};

const startPrimeGame = () => {
  gameEngine(rule, makelogic);
};

export default startPrimeGame;

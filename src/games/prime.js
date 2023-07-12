import gameEngine from '../index.js';
import getRandomNumber from '../helper.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const question = `${number}`;
  const answer = isPrime(number) ? 'yes' : 'no';
  return [answer, question];
};

const startPrimeGame = () => {
  gameEngine(description, generateRound);
};

export default startPrimeGame;

import readlineSync from 'readline-sync';
import gameEngine from '../index.js';
import getRandomNumber from '../helper.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const makelogic = (name) => {
  let checker = 0;
  while (checker < 3) {
    const number = getRandomNumber(1, 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const expectedAnswer = isPrime(number) ? 'yes' : 'no';
    if (expectedAnswer === answer) {
      console.log('Correct!');
      checker += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expectedAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (checker === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

const startPrimeGame = () => {
  gameEngine(question, makelogic);
};

export default startPrimeGame;

import readlineSync from 'readline-sync';
import gameEngine from '../index.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const makelogic = (name) => {
  let checker = 0;
  while (checker < 3) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const expectedAnswer = isEven(number) ? 'yes' : 'no';
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

const startEvenGame = () => {
  gameEngine(question, makelogic);
};

export default startEvenGame;

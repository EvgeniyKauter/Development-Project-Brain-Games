import gameEngine from '../index.js';
import getRandomNumber from '../helper.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const makelogic = () => {
  const question = getRandomNumber(1, 100);
  const expectedAnswer = isEven(question) ? 'yes' : 'no';
  return [expectedAnswer, question];
};

const startEvenGame = () => {
  gameEngine(rule, makelogic);
};

export default startEvenGame;

import gameEngine from '../index.js';
import getRamdomNumber from '../helper.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const makelogic = () => {
  const number = getRamdomNumber(1, 100);
  const question = number;
  const expectedAnswer = isEven(number) ? 'yes' : 'no';
  return [expectedAnswer, question];
};

const startEvenGame = () => {
  gameEngine(rule, makelogic);
};

export default startEvenGame;

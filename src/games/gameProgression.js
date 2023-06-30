import readlineSync from 'readline-sync';
import gameEngine from '../index.js';
import getRandomNumber from '../helper.js';

const question = 'What number is missing in the progression?';

const createProgression = () => {
  const progression = [];
  const minLength = 5;
  const maxLength = 15;
  const step = getRandomNumber(1, 5);// условно пусть шаг в пределах от 1 до 5
  progression[0] = getRandomNumber(0, 10);// условно пусть первый элемент от 0 до 10
  const progressionLength = getRandomNumber(minLength, maxLength);
  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + step;
  }
  const indexHoleNumber = getRandomNumber(0, progressionLength - 1);
  const holeNumber = progression[indexHoleNumber];
  progression[indexHoleNumber] = '..';
  return [progression, holeNumber];
};

const makelogic = (name) => {
  let checker = 0;
  while (checker < 3) {
    const [progression, holeNumber] = createProgression();
    console.log(`Question: ${progression.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === holeNumber) {
      console.log('Correct!');
      checker += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${holeNumber}".`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (checker === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

const startProgressionGame = () => {
  gameEngine(question, makelogic);
};

export default startProgressionGame;

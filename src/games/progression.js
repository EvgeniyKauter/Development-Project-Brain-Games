import gameEngine from '../index.js';
import getRandomNumber from '../helper.js';

const description = 'What number is missing in the progression?';

const createProgression = (startPoint, step, progressionLength) => {
  const progression = [];
  progression[0] = startPoint;
  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + step;
  }
  return progression;
};

const generateRound = () => {
  const minLength = 5;
  const maxLength = 15;
  const startPoint = getRandomNumber(0, 10);
  const step = getRandomNumber(1, 5);
  const progressionLength = getRandomNumber(minLength, maxLength);
  const newProgression = createProgression(startPoint, step, progressionLength);
  const indexHoleNumber = getRandomNumber(0, progressionLength - 1);
  const holeNumber = newProgression[indexHoleNumber];
  newProgression[indexHoleNumber] = '..';
  const question = `${newProgression.join(' ')}`;
  const answer = String(holeNumber);
  return [answer, question];
};

const startProgressionGame = () => {
  gameEngine(description, generateRound);
};

export default startProgressionGame;

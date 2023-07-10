import gameEngine from '../index.js';
import getRandomNumber from '../helper.js';

const rule = 'What number is missing in the progression?';

const createProgression = (startPoint, step, progressionLength) => {
  const progression = [];
  progression[0] = startPoint;
  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + step;
  }
  const indexHoleNumber = getRandomNumber(0, progressionLength - 1);
  const holeNumber = progression[indexHoleNumber];
  progression[indexHoleNumber] = '..';
  return [progression, holeNumber];
};

const makelogic = () => {
  const minLength = 5;
  const maxLength = 15;
  const startPoint = getRandomNumber(0, 10);
  const step = getRandomNumber(1, 5);
  const progressionLength = getRandomNumber(minLength, maxLength);
  const [progression, holeNumber] = createProgression(startPoint, step, progressionLength);
  const expectedAnswer = String(holeNumber);
  const question = `${progression.join(' ')}`;
  return [expectedAnswer, question];
};

const startProgressionGame = () => {
  gameEngine(rule, makelogic);
};

export default startProgressionGame;

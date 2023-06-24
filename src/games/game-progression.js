import readlineSync from 'readline-sync';

const printNameOfTheGame = () => {
  console.log('brain-progression');
};

const askQuestion = () => {
  console.log('What number is missing in the progression?');
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createProgression = () => {
  const progression = [];
  const minLength = 5;
  const maxLength = 15;
  const step = Math.floor(Math.random() * 5) + 1;// условно пусть шаг в пределах от 1 до 5
  progression[0] = Math.floor(Math.random() * 10);// условно пусть первый элемент от 0 до 10
  const progressionLength = getRandomInt(minLength, maxLength);
  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + step;
  }
  const indexHoleNumber = getRandomInt(0, progressionLength);
  const holeNumber = progression[indexHoleNumber];
  progression[indexHoleNumber] = '..';
  return [progression, holeNumber];
};

const makelogic = (name) => {
  let checker = 0;
  while (checker < 3) {
    const [progression, holeNumber] = createProgression();
    console.log(`Question: ${progression}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === holeNumber) {
      console.log('Correct!');
      checker += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${holeNumber}".\nLet's try again, ${name}!`);
      break;
    }
  }
  if (checker === 3) {
    console.log(`Congratulations, ${name}`);
  }
};

export { printNameOfTheGame, askQuestion, makelogic };

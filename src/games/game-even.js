import readlineSync from 'readline-sync';

const nameOfTheGame = () => {
  console.log('brain-even');
};

const theQuestion = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const logicOfTheGame = (checker, name) => {
  while (checker < 3) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (number % 2 === 0) {
      if (answer === 'yes') {
        console.log('Correct!');
        checker += 1;
      } else {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "yes".`);
        break;
      }
    }
    if (number % 2 !== 0) {
      if (answer === 'no') {
        console.log('Correct!');
        checker += 1;
      } else {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "no".`);
        break;
      }
    }
  }
  if (checker === 3) {
    console.log(`Congratulations, ${name}`);
  }
};

export { nameOfTheGame, theQuestion, logicOfTheGame };
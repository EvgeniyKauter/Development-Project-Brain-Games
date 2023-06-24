import readlineSync from 'readline-sync';

const printNameOfTheGame = () => {
  console.log('brain-even');
};

const askQuestion = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const makelogic = (name) => {
  let checker = 0;
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
    console.log(`Congratulations, ${name}!`);
  }
};

export { printNameOfTheGame, askQuestion, makelogic };

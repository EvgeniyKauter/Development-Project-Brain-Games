import readlineSync from 'readline-sync';

const nameOfTheGame = () => {
  console.log('brain-prime');
};

const theQuestion = () => {
  console.log('Answer "yes" if the number is prime. Otherwise answer "no".');
};

const determinePrime = (number) => {
  let divider = 1;
  let checkPrime = 0;
  while (divider <= number) {
    if (number % divider === 0) {
        checkPrime += 1;
    }
    if (checkPrime > 2) {
    return 'no';
    }
    divider += 1;
  }
  if (checkPrime === 2) {
    return 'yes';
}
};

const logicOfTheGame = (checker, name) => {
  while (checker < 3) {
    const number = Math.floor(Math.random() * 300) + 1;
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (determinePrime(number) === answer) {
      console.log('Correct!');
      checker += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was ${determinePrime(number)}.`);
      break;
    }
  }
  if (checker === 3) {
    console.log(`Congratulations, ${name}`);
  }
};

export { nameOfTheGame, theQuestion, logicOfTheGame };
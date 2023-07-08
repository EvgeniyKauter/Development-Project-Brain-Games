import readlineSync from 'readline-sync';

const gameEngine = (rule, makeLogic) => {
  console.log('\nWelcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rule);
  const gameRounds = 3;
  let checker = 0;
  for (let i = 0; i < gameRounds; i += 1) {
    const [expectedAnswer, question] = makeLogic();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
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

export default gameEngine;

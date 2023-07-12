import readlineSync from 'readline-sync';

const gameEngine = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  const gameRounds = 3;
  for (let i = 0; i < gameRounds; i += 1) {
    const [expectedAnswer, question] = generateRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (expectedAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expectedAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return 0;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default gameEngine;

import readlineSync from 'readline-sync';

const gameEngine = (askQuestion, makeLogic) => {
  console.log('\nWelcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  askQuestion();
  makeLogic(name);
};

export default gameEngine;

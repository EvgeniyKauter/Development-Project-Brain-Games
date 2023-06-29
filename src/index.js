import readlineSync from 'readline-sync';

const gameEngine = (question, makeLogic) => {
  console.log('\nWelcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(question);
  makeLogic(name);
};

export default gameEngine;

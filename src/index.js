import readlineSync from 'readline-sync';

const gameEngine = (nameOfTheGame, theQuestion, logicOfTheGame) => {
  nameOfTheGame();
  console.log('\nWelcome to the Brain Games!');
  const name = readlineSync.question('What is your name? ');
  console.log(`Hello, ${name}!`);
  theQuestion();
  logicOfTheGame(name);
};

export default gameEngine;

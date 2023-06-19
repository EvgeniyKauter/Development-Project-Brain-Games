import readlineSync from 'readline-sync';

const gameEngine = (nameOfTheGame, theQuestion, logicOfTheGame) => {
    nameOfTheGame();
    console.log('\n\nWelcome to the Brain Games!');
    const name = readlineSync.question('What is your name? ');
    console.log(`Hello, ${name}!`);
    theQuestion();
    let checker = 0;
    logicOfTheGame(checker, name); 
}

export {gameEngine};
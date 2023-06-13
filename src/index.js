import readlineSync from 'readline-sync';

const greeting = () => {
    console.log('\n\nWelcome to the Brain Games!');
    const name = readlineSync.question('What is your name? ');
    console.log(`Hello, ${name}!`);
    return name;
}

const processLogic = (logicOfTheGame) => {
    let checker = 0;
    let answer = '';
    while (checker < 3) {
      answer = readlineSync.question('Your answer: ');
      logicOfTheGame(answer);
    }
}

const correctAnswer = (checker) => {
    console.log('Correct!');
    checker += 1;
    return checker;
}

const endGame = (name, checker) => {
    if (checker === 3) {
    console.log(`Congratulations, ${name}`);
    }
}

export {greeting, processLogic, correctAnswer, endGame};
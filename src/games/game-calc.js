import readlineSync from 'readline-sync';

const randOperation = (firstNumber, secondNumber, randomChar) => {
    if (randomChar === '+') {
        return firstNumber + secondNumber;
    }
    if (randomChar === '-') {
        return firstNumber - secondNumber;
    }
    if (randomChar === '*') {
        return firstNumber * secondNumber;
    }
}

const nameOfTheGame = () => {
    console.log('brain-calc');
}

const theQuestion = () => {
    console.log('What is the result of the expression?');
}

const logicOfTheGame = (checker, name) => {
    const char = ['*', '-', '+'];
    while (checker < 3) {
      let number1 = Math.floor(Math.random() * 100);
      let number2 = Math.floor(Math.random() * 100);
      let index = Math.floor(Math.random() * 3);
      let rezult = randOperation(number1, number2, char[index]);
      console.log(`Question: ${number1} ${char[index]} ${number2}`);
      let answer = readlineSync.question('Your answer: ');
      if (answer === String(rezult)) {
        console.log('Correct!');
        checker += 1;
      } else {
        console.log(`Your answer: ${answer}\n"${answer}" is wrong answer ;(. Correct answer was "${rezult}".\nLet's try again, Sam!`);
        break;
      }
    }
    if (checker === 3) {
        console.log(`Congratulations, ${name}`);
    }
}

export {nameOfTheGame, theQuestion, logicOfTheGame};
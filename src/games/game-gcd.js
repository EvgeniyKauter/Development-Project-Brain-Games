import readlineSync from 'readline-sync'

const allDivisorsOfNumber = (number) => {
    let divisor = 1;
    const divisors = [];
    while (number >= divisor) {
      if (number % divisor === 0) {
        divisors.push(divisor);
      }
      divisor += 1;
    }
    return divisors;
}

const maxGeneralDivisor = (divisors1, divisors2) => {
    let lastDivisor1 = divisors1.pop();
    let lastDivisor2 = divisors2.pop();
    while (lastDivisor1 !== lastDivisor2) {
      if (lastDivisor1 < lastDivisor2) {
        lastDivisor2 = divisors2.pop();
      } else {
        lastDivisor1 = divisors1.pop();
      }
    }
    if (lastDivisor1 === lastDivisor2) {
        return lastDivisor1;
    }
    
}

const nameOfTheGame = () => {
    console.log("brain-gcd")
}

const theQuestion = () => {
    console.log("Find the greatest common divisor of given numbers.")
}

const logicOfTheGame = (checker, name) => {
    while (checker < 3) {
      let number1 = Math.floor(Math.random() * 100);
      let number2 = Math.floor(Math.random() * 100);     
      let rezult = maxGeneralDivisor(allDivisorsOfNumber(number1), allDivisorsOfNumber(number2));
      console.log(`Question: ${number1} ${number2}`);
      let answer = readlineSync.question('Your answer: ');
      if (rezult === Number(answer)) {
        console.log('Correct!');
        checker += 1;
      } else {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rezult}".\nLet's try again, ${name}!`);
        break;
      }
    }
    if (checker === 3) {
        console.log(`Congratulations, ${name}`);
    }
}

export {nameOfTheGame, theQuestion, logicOfTheGame};
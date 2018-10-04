import readlineSync from 'readline-sync';
import greetingUser from '..';

const sign = () => {
  const randomSign = Math.floor(Math.random() * 3) + 1;

  let randSign;

  if (randomSign === 1) {
    randSign = '+';
  } else if (randomSign === 2) {
    randSign = '-';
  } else {
    randSign = '*';
  }

  return randSign;
};

const calcNum = (name) => {
  const iter = (counter) => {
    if (counter === 3) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const num1 = Math.floor(Math.random() * 30);

    const num2 = Math.floor(Math.random() * 30);

    const randomSign = sign();

    let result;

    console.log(`Question: ${num1} ${randomSign} ${num2}`);

    if (randomSign === '+') {
      result = num1 + num2;
    } else if (randomSign === '-') {
      result = num1 - num2;
    } if (randomSign === '*') {
      result = num1 * num2;
    }

    const yoursAnswer = readlineSync.question('Your answer: ');

    if (yoursAnswer != result) {
      console.log(`${yoursAnswer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, {name}!`);
      return;
    }
    console.log('Correct!');
    iter(counter + 1);
  };
  iter(0);
};

const calcGame = () => {
  const playerName = greetingUser();

  console.log('What is the result of the expression?');

  calcNum(playerName);
};

export default calcGame;

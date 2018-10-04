import readlineSync from 'readline-sync';
import greetingUser from '..';

const sign = () => {
  const randomSign = Math.floor(Math.random() * 3) + 1;

  let randSign;

  switch (randomSign) {
    case (1):
      randSign = '+';
      break;
    case (2):
      randSign = '-';
      break;
    default:
      randSign = '*';
  }

  return randSign;
};

const calcNum = (name) => {
  const iter = (step) => {
    if (step === 3) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const num1 = Math.floor(Math.random() * 30);

    const num2 = Math.floor(Math.random() * 30);

    const randomSign = sign();

    let result;

    console.log(`Question: ${num1} ${randomSign} ${num2}`);

    switch (randomSign) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      default:
        result = num1 * num2;
    }

    const answer = readlineSync.question('Your answer: ');

    const rightAnswer = (result - answer) === 0;

    if (rightAnswer === false) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.\nLet''s try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    iter(step + 1);
  };
  iter(0);
};

const calcGame = () => {
  const playerName = greetingUser();

  console.log('What is the result of the expression?');

  calcNum(playerName);
};

export default calcGame;

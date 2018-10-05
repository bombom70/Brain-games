import startGame from '..';
import { cons } from 'hexlet-pairs';

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

const calcNum = () => {
  const num1 = Math.floor(Math.random() * 30);

  const num2 = Math.floor(Math.random() * 30);

  const randomSign = sign();

  switch (randomSign) {
    case '+':
      return cons(`${num1} + ${num2}`, `${num1 + num2}`);
    case '-':
      return cons(`${num1} - ${num2}`, `${num1 - num2}`);
    default:
      return cons(`${num1} * ${num2}`, `${num1 * num2}`);
  }
};

const calcGame = () => {
  startGame(calcNum, 'What is the result of the expression?');
};

export default calcGame;

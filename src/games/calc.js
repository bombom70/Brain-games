import startGame from '..';
import { cons } from 'hexlet-pairs';

const sign = () => Math.floor(Math.random() * 3) + 1;

const calcNum = () => {
  const num1 = Math.floor(Math.random() * 30);

  const num2 = Math.floor(Math.random() * 30);

  const randomSign = sign();

  switch (randomSign) {
    case 1:
      return cons(`${num1} + ${num2}`, `${num1 + num2}`);
    case 2:
      return cons(`${num1} - ${num2}`, `${num1 - num2}`);
    default:
      return cons(`${num1} * ${num2}`, `${num1 * num2}`);
  }
};

export default () => startGame(calcNum, 'What is the result of the expression?');

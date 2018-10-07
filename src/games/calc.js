import startGame from '..';
import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';

const choiceSign = () => Math.floor(Math.random() * 3) + 1;

const description = 'What is the result of the expression?';

const calcNum = () => {
  const num1 = randomNumber(1, 30);

  const num2 = randomNumber(1, 30);

  switch (choiceSign) {
    case 1:
      return cons(`${num1} + ${num2}`, `${num1 + num2}`);
    case 2:
      return cons(`${num1} - ${num2}`, `${num1 - num2}`);
    default:
      return cons(`${num1} * ${num2}`, `${num1 * num2}`);
  }
};

export default () => startGame(calcNum, description);

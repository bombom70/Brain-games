import startGame from '..';
import { cons } from 'hexlet-pairs';

const nodTwoNum = (num1, num2) => {
  const maxNum = Math.max(num1, num2);

  const minNum = Math.min(num1, num2);

  if (maxNum % minNum === 0) {
    return minNum;
  }

  let result = minNum - 1;

  while (result > 0) {
    if ((maxNum % result === 0) && (minNum % result === 0)) {
      return result;
    }
    result -= 1;
  }
  return result;
};

const gcdNum = () => {
  const num1 = Math.floor(Math.random() * 30);

  const num2 = Math.floor(Math.random() * 30);

  const question = `${num1} ${num2}`;

  const result = nodTwoNum(num1, num2);

  return cons(question, result);
};

const gcdGame = () => {
  startGame(gcdNum, 'Find the greatest common divisor of given numbers.');
};

export default gcdGame;

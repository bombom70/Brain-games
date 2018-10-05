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
  const num1 = Math.floor(Math.random() * 30) + 1;

  const num2 = Math.floor(Math.random() * 30) + 1;

  if (num1 === 0 || num2 === 0) {
    return 0;
  }

  const question = `${num1} ${num2}`;

  const answer = nodTwoNum(num1, num2);

  return cons(question, answer);
};

export default () => startGame(gcdNum, 'Find the greatest common divisor of given numbers.');

import startGame from '..';
import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

// ф-я для нахождения наибольшего общего делителя(НОД) 2 чисел
const nodForTwoNumbers = (num1, num2) => {
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

const nodGame = () => {
  const num1 = randomNumber(1, 100);

  const num2 = randomNumber(1, 100);

  const question = `${num1} ${num2}`;

  const answer = nodForTwoNumbers(num1, num2);

  return cons(`${question}`, `${answer}`);
};

export default () => startGame(nodGame, description);

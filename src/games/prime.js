import startGame from '..';
import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  for (let i = 2; i <= Math.ceil(number / 2); i += 1) {
    if (number !== i && number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateData = () => {
  const question = randomNumber(2, 100);

  const answer = isPrime(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => startGame(generateData, description);

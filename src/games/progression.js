import startGame from '..';
import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';

const generateProgression = () => {
  const step = randomNumber(1, 10);

  const numberHiddenElement = randomNumber(1, 9);

  const startElement = randomNumber(1, 20);

  const progressionLenght = 10;

  const answer = step * numberHiddenElement + startElement;

  const iter = (count, acc) => {
    if (count === 0) {
      return acc;
    }
    if (count === numberHiddenElement) {
      return iter(count - 1, `.. ${acc}`);
    }
    return iter(count - 1, `${count * step + startElement} ${acc}`);
  };
  const question = iter(progressionLenght, '');
  return cons(question, `${answer}`);
};

export default () => startGame(generateProgression, 'What number is missing in this progression?');

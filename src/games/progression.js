import startGame from '..';
import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';

const description = 'What number is missing in this progression?';

const progressionLenght = 10;

const generateProgression = (progressionLenght, step, numberHiddenElement, startElement) => {
  const iter = (count, acc) => {
    if (count === 0) {
      return acc;
    }
    if (count === numberHiddenElement) {
      return iter(count - 1, `.. ${acc}`);
    }
    return iter(count - 1, `${count * step + startElement} ${acc}`);
  };
  return iter(progressionLenght, '');
};

const generateData = () => {
  const step = randomNumber(1, 10);

  const numberHiddenElement = randomNumber(1, 9);

  const startElement = randomNumber(1, 20);

  const answer = step * numberHiddenElement + startElement;

  const question = generateProgression(progressionLenght, step, numberHiddenElement, startElement);
  return cons(`${question}`, `${answer}`);
};

export default () => startGame(generateData, description);

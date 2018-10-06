import startGame from '..';
import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';

const isEven = n => n % 2 === 0;

const evenNumber = () => {
  const question = randomNumber(1, 50);

  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => startGame(evenNumber, 'Answer "yes" if number even otherwise answer "no".');

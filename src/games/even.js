import startGame from '..';
import { cons } from 'hexlet-pairs';

const isEven = n => n % 2 === 0;

const evenNumber = () => {
  const number = Math.ceil(Math.random() * 50);

  const answer = isEven(number) ? 'yes' : 'no';

  return cons(number, answer);
};

const evenGame = () => {
  startGame(evenNumber, 'Answer "yes" if number even otherwise answer "no".');
};

export default evenGame;

import startGame from '..';
import { cons } from 'hexlet-pairs';

const buildProgression = () => {
  const progression = [];

  const iter = (value, step) => {
    const index = Math.floor(step / 2);

    const up = 2;

    if (progression.length === step) {
      return progression;
    }
    switch (progression.length === index) {
      case true:
        progression[index] = '..';
        break;
      default:
        progression.push(value);
    }

    return iter(value + up, step);
  };
  return iter((Math.floor(Math.random() * 50)), 10);
};

const numIsShadow = () => {
  const progressionArr = buildProgression();

  const question = progressionArr.join(' ');

  const up = 2;

  const answer = progressionArr[4] + up;

  return cons(question, answer);
};

const progressionGame = () => {
  startGame(numIsShadow, 'Find the greatest common divisor of given numbers.');
};

export default progressionGame;

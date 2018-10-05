import startGame from '..';
import { cons } from 'hexlet-pairs';

const lengthProgression = 10;

const upValue = 2;

const value = 44;

const buildProgression = () => {
  const progression = [];
  let conter = value;

  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(conter);
    conter += upValue;

    if (progression.length === Math.ceil(lengthProgression / 2)) {
      progression[i] = '..';
    }
  }
  return progression;
};

const numIsShadow = () => {
  const progressionArr = buildProgression(lengthProgression, value, upValue);

  const question = progressionArr.join(' ');

  const index = Math.ceil(lengthProgression / 2);

  const answer = progressionArr[index] - 2;

  return cons(question, answer);
};

export default () => startGame(numIsShadow, 'Find the greatest common divisor of given numbers.');

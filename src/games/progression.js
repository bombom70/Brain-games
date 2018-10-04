import readlineSync from 'readline-sync';
import greetingUser from '..';

const buildProgression = () => {
  const iter = (progression, value, step) => {
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

    return iter(progression, value + up, step);
  };
  return iter([], (Math.floor(Math.random() * 50)), 10);
};

const numIsShadow = (name) => {
  const iter = (counter, step) => {
    if (counter === step) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const progressionArr = buildProgression();

    const question = progressionArr.join(' ');

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    const result = progressionArr[4] + 2;

    const rightAnswer = (answer - result) === 0;

    if (rightAnswer === false) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    iter(counter + 1, step);
  };
  iter(0, 3);
};

const progressionGame = () => {
  const playerName = greetingUser();

  console.log('What number is missing in this progression?\n');

  numIsShadow(playerName);
};

export default progressionGame;

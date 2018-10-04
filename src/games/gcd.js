import readlineSync from 'readline-sync';
import greetingUser from '..';

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

const gcdNum = (name) => {
  const iter = (step) => {
    if (step === 3) {
      console.log(`Congratulations, ${name}!`);
      return;
    }

    const num1 = Math.floor(Math.random() * 30);

    const num2 = Math.floor(Math.random() * 30);

    const result = nodTwoNum(num1, num2);

    console.log(`Question: ${num1} ${num2}`);

    const answer = readlineSync.question('Your answer: ');

    const rightAnswer = (result - answer) === 0;

    if (rightAnswer === false) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    iter(step + 1);
  };
  iter(0);
};

const gcdGame = () => {
  const playerName = greetingUser();

  console.log('Find the greatest common divisor of given numbers.');

  gcdNum(playerName);
};

export default gcdGame;

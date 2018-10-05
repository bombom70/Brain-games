import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const step = 3;

const startGame = (funcGame, mission) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(mission);

  const name = readlineSync.question('\nMay I have your name?\n');

  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < step; i += 1) {
    const questionAnswer = funcGame();

    const question = car(questionAnswer);

    const userAnswer = cdr(questionAnswer);

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    const win = (answer - userAnswer) === 0;

    if (win === true) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${userAnswer}.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;

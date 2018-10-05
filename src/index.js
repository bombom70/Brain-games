import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const attempts = 3;

const startGame = (getGameData, mission) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(mission);

  const name = readlineSync.question('\nMay I have your name?\n');

  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < attempts; i += 1) {
    const gameData = getGameData();

    const question = car(gameData);

    const userAnswer = cdr(gameData);

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    const win = (Math.max(answer, userAnswer) - Math.min(answer, userAnswer)) === 0;

    if ((userAnswer === answer) || (win === true)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${userAnswer}.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;

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

    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${userAnswer}.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;

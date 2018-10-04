import readlineSync from 'readline-sync';
import greetingUser from '..';

const isEven = n => n % 2 === 0;

const evenNumber = (name) => {
  const iter = (counter, step) => {
    if (counter === step) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const question = Math.floor(Math.random() * 100);

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    const rightAnswer = isEven(question) ? 'yes' : 'no';

    if (answer !== rightAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    iter(counter + 1, 3);
  };
  iter(0, 3);
};

const evenGame = () => {
  const playerName = greetingUser();

  console.log('Answer "yes" if number even otherwise answer "no".\n');

  evenNumber(playerName);
};

export default evenGame;

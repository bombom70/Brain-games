import readlineSync from 'readline-sync';

const isEven = n => n % 2 === 0;

const evenNumber = (name) => {
  const iter = (counter) => {
    const step = 3;
    if (counter === step) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const randomNum = Math.floor(Math.random() * 100);

    console.log(`Question: ${randomNum}`);

    const answer = readlineSync.question('Your answer: ');

    const rightAnswer = isEven(randomNum) ? 'yes' : 'no';

    if (answer !== rightAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, {name}!`);
      return;
    }
    console.log('Correct!');
    iter(counter + 1);
  };
  iter(0);
};

export default evenNumber;

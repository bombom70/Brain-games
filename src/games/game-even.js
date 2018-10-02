import readlineSync from 'readline-sync';

const even = n => n % 2 === 0;

const evenNumber = (user) => {
  const counterWinner = 3;
  const iter = (counter) => {
    if (counter === counterWinner) {
      console.log(`Congratulations, ${user}!`);
      return;
    }

    const randomNumber = Math.ceil(Math.random() * 100);

    console.log(`Question: ${randomNumber}`);

    const winAnswer = even(randomNumber) ? 'yes' : 'no';

    const yoursAnswer = readlineSync.question('Your answer: ');

    if (yoursAnswer !== winAnswer) {
      console.log(`'${yoursAnswer}' is wrong answer ;(. Correct answer was '${winAnswer}'.\nLet's try again, ${user}!`);
      return;
    }

    console.log('Correct!');

    return iter(counter + 1);
  };
  return iter(0);
};

export default evenNumber;

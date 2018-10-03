import readlineSync from 'readline-sync';

const isEven = n => n % 2 === 0;

const evenNumber = (name) => {
  const iter = (counter) => {
    if (counter === 3) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const randomNum = Math.floor(Math.random() * 100);

    console.log(`Question: ${randomNum}`);

    const yoursAnswer = readlineSync.question('Your answer: ');

    const goodAnswer = isEven(randomNum) ? 'yes' : 'no';

    if (yoursAnswer !== goodAnswer) {
      console.log(`${yoursAnswer} is wrong answer ;(. Correct answer was ${goodAnswer}.\nLet's try again, {name}!`);
      return;
    }
    console.log('Correct!');
    iter(counter + 1);
  };
  iter(0);
};

export default evenNumber;

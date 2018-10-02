import readlineSync from 'readline-sync';

const isEven = n => n % 2 === 0;

const evenNumber = (userName) => {
  const welcome = `Welcome to Brain Games!\nAnswer "yes" if number even otherwise answer "no".`;

  console.log(welcome);

  const randomNum = Math.floor(Math.random() * 100);

  console.log(`Question: ${randomNum}`);

  const yoursAnswer = readlineSync.question(`Your answer: `);

  const goodAnswer = isEven(randomNum) ? 'yes' : 'no';

  const counter = 3;

  for (let i = 0; i < counter; i += 1) {
    if (yoursAnswer !== goodAnswer) {
      console.log(`${yoursAnswer} is wrong answer ;(. Correct answer was ${goodAnswer}.\nLet's try again, {userName}!`);
      return;
    } else {
      console.log(`Correct!`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return;
};

export default evenNumber;

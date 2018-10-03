import readlineSync from 'readline-sync';

export const greetingUser = () => {
  console.log('\nWelcome to the Brain Games!\n');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName} !\n`);

  return userName;
};

const isEven = n => n % 2 === 0;
let counter = 3;

const evenNumber = (name, counter) => {
  if (counter === 0) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  const randomNum = Math.floor(Math.random() * 100);

  console.log(`Question: ${randomNum}`);

  const yoursAnswer = readlineSync.question(`Your answer: `);

  const goodAnswer = isEven(randomNum) ? 'yes' : 'no';

  const counter = 3;

  if (yoursAnswer !== goodAnswer) {
    console.log(`${yoursAnswer} is wrong answer ;(. Correct answer was ${goodAnswer}.\nLet's try again, {name}!`);
    return;
  }

  return evenNumber(name, counter - 1);
};

export const evenGame = () => {
  const playerName = greetingUser();

  evenNumber(playerName);
};

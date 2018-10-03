import readlineSync from 'readline-sync';

const welcome = () => console.log('\nWelcome to the Brain Games!');

export const greetingUser = () => {
  welcome();

  console.log(`Answer "yes" if number even otherwise answer "no".\n`);

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName} !\n`);

  return userName;
};

const isEven = n => n % 2 === 0;

const evenNumber = (name) => {
  const iter = (counter) => {
    if (counter === 3) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const randomNum = Math.floor(Math.random() * 100);

    console.log(`Question: ${randomNum}`);

    const yoursAnswer = readlineSync.question(`Your answer: `);

    const goodAnswer = isEven(randomNum) ? 'yes' : 'no';

    if (yoursAnswer !== goodAnswer) {
      console.log(`${yoursAnswer} is wrong answer ;(. Correct answer was ${goodAnswer}.\nLet's try again, {name}!`);
      return;
    }
    return iter(counter + 1);
  };
  return iter(0);

};

export const evenGame = () => {
  const playerName = greetingUser();

  evenNumber(playerName);
};

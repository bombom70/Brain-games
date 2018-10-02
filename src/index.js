import readlineSync from 'readline-sync';

export const greetingUser = () => {
  console.log('\nWelcome to the Brain Games!\n');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName} !`);

  return userName;
};

export const evenNumber = () => {
  console.log('\nWelcome to the Brain Games!\n');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName} !`);

  let number = 15;

  const yourQuestion = readlineSync.question('Question: ', number);

  const yourAnswer = readlineSync.question('Your answer: ');

  const wrongYes = `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`;

  const wrongNo = `'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`;

  for (let i = 0; i < 3; i += 1) {
    if ((yourQuestion % 2 === 0) && (yourAnswer === 'Yes')) {
      console.log('Correct!');
      number = i === 1 ? 6 : 7;
    } else if ((yourQuestion % 2 !== 0) && (yourAnswer === 'No')) {
      console.log('Correct!');
      number = i === 1 ? 6 : 7;
    } else {
      return yourAnswer === 'Yes' ? wrongYes : wrongNo;
    }
  }
  return (`Congratulations, ${userName}!`);
};

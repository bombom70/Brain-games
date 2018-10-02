import readlineSync from 'readline-sync';
import evenNumber from './games/game-even';

export const greetingUser = () => {
  console.log('\nWelcome to the Brain Games!\n');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName} !\n`);

  return userName;
};

export const evenGame = () => {
  console.log('\nWelcome to the Brain Games!\n');

  console.log('Answer "yes" if number even otherwise answer "no".\n');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName} !\n`);

  evenNumber(userName);
};

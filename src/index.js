import readlineSync from 'readline-sync';
import evenNumber from './games/game-even';

export const greetingUser = () => {
  console.log('\nWelcome to the Brain Games!\n');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName} !`);

  return userName;
};

export const evenGame = () => {
  const userName = greetingUser();

  evenNumber(userName);
};

import readlineSync from 'readline-sync';

const greetingUser = () => {
  console.log('\nWelcome to the Brain Games!\n');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName} !`);
};

export default greetingUser;
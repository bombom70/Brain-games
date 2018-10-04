import readlineSync from 'readline-sync';

const welcome = () => console.log('\nWelcome to the Brain Games!\n');

const greetingUser = () => {
  welcome();

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName} !\n`);

  return userName;
};

export default greetingUser;

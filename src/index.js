import readlineSync from 'readline-sync';
import { cons, car, cdr, toString } from 'hexlet-pairs';
import evenNumber from './games/even';
import calcNum from './games/calc';

const welcome = () => console.log('\nWelcome to the Brain Games!\n');

const counter = 3;

export const greetingUser = () => {
  welcome();

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName} !\n`);

  return userName;
};

export const evenGame = () => {
  const playerName = greetingUser();

  console.log(`Answer "yes" if number even otherwise answer "no".\n`);

  evenNumber(playerName);
};

export const calcGame = () => {
  const playerName = greetingUser();

  console.log(`What is the result of the expression?`);

  calcNum(playerName, counter);
};
import whatIsYourName from '../cli.js';
import { question, check } from '../index.js';
import randomNumber from '../utils.js';

const userName = whatIsYourName();// ввод имени мользователя и приветствие
console.log('Find the greatest common divisor of given numbers.');

// вычисление НОД
const brainGcd = () => {
  let a = randomNumber();
  let b = randomNumber();
  question(`${a} ${b}`);
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  const correctAnswer = a;
  check(brainGcd, userName, correctAnswer);// передача в функцию сравнения рез-та с ответом игрока
};

export default brainGcd;

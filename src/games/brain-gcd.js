import whatIsYourName from '../cli.js';
import { randomNumber } from '../index.js';
import { question } from '../index.js';
import { check } from '../index.js';

const userName = whatIsYourName();//ввод имени мользователя и приветствие
console.log('Find the greatest common divisor of given numbers.');

//вычисление НОД
const brainGcd = (a = randomNumber(), b = randomNumber()) => {
  question(`${a} ${b}`);
  while (a !== b) {
    if (a > b) {
      a = a - b;
    }
    else {
      b = b - a;
    }
  }
  let correctAnswer = a;
  check(brainGcd, userName, correctAnswer);//передача в функцию сравнения результата с ответом игрока 
}

export default brainGcd;
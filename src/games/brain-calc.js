import whatIsYourName from '../cli.js';
import { question, check } from '../index.js';
import { randomNumber } from '../utils.js';

const userName = whatIsYourName();// ввод имени мользователя и приветствие
console.log('What is the result of the expression?');

// функция возвращает случайную операцию из заданного массива
const randomOperation = () => {
  const operationsList = ['+', '-', '*'];
  const operation = Math.floor(Math.random() * operationsList.length);
  return operationsList[operation];
};

const calc = (a, b, op) => {
  let correctAnswer = 0;
  switch (op) {
    case '+':
      correctAnswer = a + b;
      break;
    case '-':
      correctAnswer = a - b;
      break;
    case '*':
      correctAnswer = a * b;
      break;
    default: // Do nothing
  }
  return correctAnswer;
};

// функция принимает 2 случайных числа и операцию, и вычисляет значение
const brainCalc = () => {
  const a = randomNumber(10);
  const b = randomNumber(10);
  const op = randomOperation();
  question(`${a} ${op} ${b}`);
  const correctAnswer = calc(a, b, op);
  check(brainCalc, userName, correctAnswer);// передача в функцию сравнения рез-та с ответом игрока
};

export default brainCalc;

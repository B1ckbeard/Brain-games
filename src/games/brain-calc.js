import whatIsYourName from '../cli.js';
import { randomNumber, question, check } from '../index.js';

const userName = whatIsYourName();// ввод имени мользователя и приветствие
console.log('What is the result of the expression?');

// функция возвращает случайную операцию из заданного массива
const randomOperation = () => {
  const operationsList = ['+', '-', '*'];
  const operation = Math.floor(Math.random() * operationsList.length);
  return operationsList[operation];
};

// функция принимает 2 случайных числа и операцию, и вычисляет значение
const brainCalc = (a = randomNumber(), b = randomNumber(), op = randomOperation()) => {
  question(`${a} ${op} ${b}`);
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
  }
  check(brainCalc, userName, correctAnswer);// передача в функцию сравнения рез-та с ответом игрока
};

export default brainCalc;
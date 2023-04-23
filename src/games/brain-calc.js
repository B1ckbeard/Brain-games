import randomNumber from '../utils.js';
import check from '../index.js';

// описание игры
const description = 'What is the result of the expression?';

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

// функция принимает 2 случайных числа и операцию, и возвращает значение
const brainCalc = () => {
  const a = randomNumber(10);
  const b = randomNumber(10);
  const op = randomOperation();
  const question = (`${a} ${op} ${b}`);
  const correctAnswer = calc(a, b, op);
  return (question, correctAnswer);
};

check(brainCalc, description);

export default brainCalc;

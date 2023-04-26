import randomNumber from '../utils.js';
import check from '../index.js';

// описание игры
const description = 'What is the result of the expression?';
// список с операциями для randomOperation
const operationsList = ['+', '-', '*'];

// функция возвращает случайную операцию из заданного массива
const randomOperation = () => {
  const operation = Math.floor(Math.random() * operationsList.length);
  return operationsList[operation];
};

// вычисляет значение, в зависимости от операции
const calculate = (a, b, op) => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default: // Do nothing
  }
};

// функция принимает 2 случайных числа и операцию, и возвращает значение
const getAnswerAndQuestion = () => {
  const firstNumber = randomNumber(10);
  const secondNumber = randomNumber(10);
  const randomSymbol = randomOperation();
  const question = (`${firstNumber} ${randomSymbol} ${secondNumber}`);
  const correctAnswer = calculate(firstNumber, secondNumber, randomSymbol);
  return [question, correctAnswer];
};

check(getAnswerAndQuestion, description);

export default getAnswerAndQuestion;

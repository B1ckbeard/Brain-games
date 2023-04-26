import check from '../index.js';
import randomNumber from '../utils.js';

// описание игры
const description = 'Find the greatest common divisor of given numbers.';

// вычисление НОД
const getGcd = (firstNumber, secondNumber) => {
  let a = firstNumber;
  let b = secondNumber;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

const getAnswerAndQuestion = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const question = (`${firstNumber} ${secondNumber}`);
  const correctAnswer = getGcd(firstNumber, secondNumber);
  return [question, correctAnswer];
};

check(getAnswerAndQuestion, description);

export default getAnswerAndQuestion;

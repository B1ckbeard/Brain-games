import check from '../index.js';
import randomNumber from '../utils.js';

// описание игры
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// вычисляет простое ли число?
const isPrime = (number) => {
  for (let i = 2, j = Math.sqrt(number); i <= j; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

const getAnswerAndQuestion = () => {
  const number = randomNumber();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = number;
  return [question, correctAnswer];
};

check(getAnswerAndQuestion, description);

export default getAnswerAndQuestion;

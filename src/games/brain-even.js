import randomNumber from '../utils.js';
import check from '../index.js';

// описание игры
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

// функция проверки числа не чётность/нечетность
const isEven = (number) => number % 2 === 0;

const getAnswerAndQuestion = () => {
  const question = randomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

check(getAnswerAndQuestion, description);

export default getAnswerAndQuestion;

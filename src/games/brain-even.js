import whatIsYourName from '../cli';
import { question, check } from '../index';
import { randomNumber } from '../utils';

const userName = whatIsYourName();// ввод имени мользователя и приветствие
console.log('Answer "yes" if the number is even, otherwise answer "no".');

// функция проверки числа не чётность/нечетность
const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const evenCheck = () => {
  const number = randomNumber();
  question(number);
  const correctAnswer = isEven(number);
  check(evenCheck, userName, correctAnswer);// передача в функцию сравнения рез-та с ответом игрока
};

export default evenCheck;

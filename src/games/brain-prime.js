import whatIsYourName from '../cli.js';
import { question, check } from '../index.js';
import randomNumber from '../utils.js';

const userName = whatIsYourName();// ввод имени мользователя и приветствие
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

// простое ли число?
const isPrime = (number) => {
  let correctAnswer = '';
  if (number > 1) {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        correctAnswer = 'no';
        break;
      } else {
        correctAnswer = 'yes';
      }
    }
  } else {
    correctAnswer = 'no';
  }
  return correctAnswer;
};

const brainPrime = () => {
  const number = randomNumber();
  question(number);
  const correctAnswer = isPrime(number);
  check(brainPrime, userName, correctAnswer);// передача в ф-ю сравнения рез-та с ответом игрока
};

export default brainPrime;

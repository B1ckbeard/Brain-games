import check from '../index.js';
import randomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  const correctAnswer = isPrime(number);
  const question = number;
  return ([question, correctAnswer]);
};

check(brainPrime, description);

export default brainPrime;

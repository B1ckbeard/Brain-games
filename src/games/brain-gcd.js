import check from '../index.js';
import randomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

// вычисление НОД
const brainGcd = () => {
  let a = randomNumber();
  let b = randomNumber();
  const question = (`${a} ${b}`);
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  const correctAnswer = a;
  return (question, correctAnswer);
};

check(brainGcd, description);

export default brainGcd;

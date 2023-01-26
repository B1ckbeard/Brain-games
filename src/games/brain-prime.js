import whatIsYourName from '../cli.js';
import { randomNumber } from '../index.js';
import { question } from '../index.js';
import { check } from '../index.js';

const userName = whatIsYourName();//ввод имени мользователя и приветствие
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const brainPrime = (number = randomNumber()) => {
    question(number);
    let correctAnswer = '';
    if (number > 1) {
        for (let i = 2; i < number; i++) {
          if (number % i == 0) {
            correctAnswer = 'no';
            break;
          }
          else{
            correctAnswer = 'yes';
          }
        }
    }
    else {
        correctAnswer = 'no';
    }

    check(brainPrime, userName, correctAnswer);//передача в функцию сравнения результата с ответом игрока 
}

export default brainPrime;
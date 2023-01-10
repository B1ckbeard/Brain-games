import whatIsYourName from '../cli.js';
import { randomNumber } from '../index.js';
import { question } from '../index.js';
import { check } from '../index.js';

const userName = whatIsYourName();//ввод имени мользователя и приветствие
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const evenCheck = (number = randomNumber()) => {
    question(number);
    let correctAnswer = '';
    if (number % 2 === 0){
        correctAnswer = 'yes';
    }
    else {
        correctAnswer = 'no';
    }
    check(evenCheck, userName, correctAnswer);
}

export default evenCheck;
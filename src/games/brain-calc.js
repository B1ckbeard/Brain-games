import whatIsYourName from '../cli.js';
import { randomNumber } from '../index.js';
import { question } from '../index.js';
import { check } from '../index.js';

const userName = whatIsYourName();
console.log('What is the result of the expression?');

const randomOperation = () => {
    const operationsList = ["+", "-", "*"];
    const operation = Math.floor(Math.random() * operationsList.length);
    return operationsList[operation];
}

const brainCalc = (a = randomNumber(), b = randomNumber(), op = randomOperation()) => {
    question(`${a} ${op} ${b}`);
    let correctAnswer = 0;
    switch(op){
        case '+':
            correctAnswer = a + b;
            break;
        case '-':
            correctAnswer = a - b;
            break;
        case '*':
            correctAnswer = a * b;
            break;
    }
    check(brainCalc, userName, correctAnswer);
}

export default brainCalc;
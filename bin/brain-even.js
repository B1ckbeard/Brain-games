#!/usr/bin/env node
import readlineSync from 'readline-sync';
import whatIsYourName from '../src/cli.js';

const name = whatIsYourName();
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const randomNumber = () => {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    return number;
}

const answer = () => readlineSync.question('Your answer: ');

let trueCounter = 0;

const evenCheck = (number, userAnswer) => {
    if (userAnswer === 'yes' || userAnswer === 'no'){
        if ((number % 2 === 0 && userAnswer === 'yes') || (number % 2 === 1 && userAnswer === 'no')){
            console.log('Correct!');
            trueCounter += 1;
            if (trueCounter < 3){
                evenCheck(randomNumber(), answer());
            }
            else if (trueCounter === 3){
                console.log(`Congratulations, ${name}!`);
            }
        }
        else {
            if (userAnswer === 'yes'){
                console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
            }
            else if (userAnswer === 'no'){
                console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");;
            }
            console.log(`Let's try again, ${name}!`);
        }
    }
    else{
        console.log(`Your answer is not correct. Let's try again, ${name}!`);
    }
}

evenCheck(randomNumber(), answer());
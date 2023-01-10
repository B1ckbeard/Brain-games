import readlineSync from 'readline-sync';

const userAnswer = () => readlineSync.question('Your answer: ');

export const question = (exp) =>{
    console.log(`Question: ${exp}`);
}

export const randomNumber = () =>{
    const number = Math.floor(Math.random() * 100);
    return number;
}

let trueCounter = 0;//счетчик правильных ответов
const i = 3;//максимальное количество раундов
 
export const check = (func, userName, correctAnswer) =>{
    //console.log(correctAnswer);
    const userAns = userAnswer();
    if (correctAnswer == userAns){
        console.log('Correct!');
        trueCounter += 1;
        if (trueCounter < i){
            func();
        }
        else if (trueCounter === i){
            console.log(`Congratulations, ${userName}!`);
        }
    }
    else{
        console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
    }
}
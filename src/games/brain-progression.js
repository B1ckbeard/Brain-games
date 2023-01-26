import whatIsYourName from '../cli.js';
import { randomNumber } from '../index.js';
import { check } from '../index.js';

const userName = whatIsYourName();//ввод имени мользователя и приветствие
console.log('What number is missing in the progression?');

const makeProgression = (step = randomNumber()) =>{
    let startNumber = randomNumber();
    let mas = [];
    for (let i = 0; i<10;i+=1){
        let nextNumber = startNumber += step;
        mas.push(nextNumber);
    }
    let index = Math.floor(Math.random() * mas.length);
    let hiddenNumber = mas[index];
    //console.log(hiddenNumber);
    mas[index] = '..';
    console.log(mas);
    check(makeProgression, userName, hiddenNumber);
}

export default makeProgression;
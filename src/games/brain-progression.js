import whatIsYourName from '../cli.js';
import { randomNumber } from '../index.js';
import { question } from '../index.js';
import { check } from '../index.js';

const userName = whatIsYourName();//ввод имени мользователя и приветствие
console.log('What number is missing in the progression?');

//создает прогрессию с пропущенным числом
const makeProgression = (step = randomNumber()) =>{
    let startNumber = randomNumber();//начальное число
    let mas = [];
    for (let i = 0; i<10;i+=1){
        let nextNumber = startNumber += step;
        mas.push(nextNumber);//заполняем массив
    }
    let index = Math.floor(Math.random() * mas.length);//рандомим индекс пропущенного числа
    let hiddenNumber = mas[index];
    //console.log(hiddenNumber);
    mas[index] = '..';//заменяем пропущенное число точками
    question(mas);
    check(makeProgression, userName, hiddenNumber);//передача в функцию сравнения результата с ответом игрока 
}

export default makeProgression;
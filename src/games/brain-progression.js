import whatIsYourName from '../cli.js';
import { randomNumber, question, check } from '../index.js';

const userName = whatIsYourName();// ввод имени мользователя и приветствие
console.log('What number is missing in the progression?');

// создает прогрессию с пропущенным числом
const makeProgression = (step = randomNumber()) => {
  const startNumber = randomNumber();// начальное число
  let nextNumber = startNumber;
  const mas = [];
  for (let i = 0; i < 10; i += 1) {
    nextNumber += step;
    mas.push(nextNumber);// заполняем массив
  }
  const index = Math.floor(Math.random() * mas.length);// рандомим индекс пропущенного числа
  const hiddenNumber = mas[index];
  mas[index] = '..';// заменяем пропущенное число точками
  question(mas.join(' '));
  check(makeProgression, userName, hiddenNumber);// сравнение рез-та с ответом игрока
};

export default makeProgression;

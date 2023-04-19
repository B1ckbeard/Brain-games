import whatIsYourName from '../cli';
import { question, check } from '../index';
import { randomNumber } from '../utils';

const userName = whatIsYourName();// ввод имени мользователя и приветствие
console.log('What number is missing in the progression?');

// функция для формирования прогрессии
const getProgression = (startNumber = randomNumber(10), step = randomNumber(10)) => {
  let nextNumber = startNumber;
  const mas = [];
  for (let i = 0; i < 10; i += 1) {
    nextNumber += step;
    mas.push(nextNumber);// заполняем массив
  }
  return mas;
};

// создает прогрессию с пропущенным числом
const makeProgression = () => {
  const mas = getProgression();// получаем сформированную прогрессию
  const index = Math.floor(Math.random() * mas.length);// рандомим индекс пропущенного числа
  const hiddenNumber = mas[index];
  mas[index] = '..';// заменяем пропущенное число точками
  question(mas.join(' '));
  check(makeProgression, userName, hiddenNumber);// сравнение рез-та с ответом игрока
};

export default makeProgression;

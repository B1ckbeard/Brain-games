import check from '../index.js';
import randomNumber from '../utils.js';

// описание игры
const description = 'What number is missing in the progression?';
const progressionLength = 10;

// функция для формирования прогрессии
const getProgression = (startNumber, step) => {
  let nextNumber = startNumber;
  const mas = [];
  for (let i = 0; i < progressionLength; i += 1) {
    nextNumber += step;
    mas.push(nextNumber);// заполняем массив
  }
  return mas;
};

// создает прогрессию с пропущенным числом
const getAnswerAndQuestion = () => {
  const startNumber = randomNumber(10);
  const step = randomNumber(10);
  const progression = getProgression(startNumber, step);// получаем сформированную прогрессию
  // рандомим пропущенное число
  const hiddenNumberIndex = Math.floor(Math.random() * progression.length);// получаем индекс
  const hiddenNumber = progression[hiddenNumberIndex];// получаем число
  progression[hiddenNumberIndex] = '..';// заменяем пропущенное число точками
  return [progression.join(' '), hiddenNumber];
};

check(getAnswerAndQuestion, description);

export default getAnswerAndQuestion;

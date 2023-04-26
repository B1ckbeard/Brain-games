import check from '../index.js';
import randomNumber from '../utils.js';

// описание игры
const description = 'What number is missing in the progression?';

// функция для формирования прогрессии
const getProgression = (startNumber, step) => {
  let nextNumber = startNumber;
  const mas = [];
  const length = 10;
  for (let i = 0; i < length; i += 1) {
    nextNumber += step;
    mas.push(nextNumber);// заполняем массив
  }
  return mas;
};

// создает прогрессию с пропущенным числом
const makeProgression = () => {
  const startNumber = randomNumber(10);
  const step = randomNumber(10);
  const progression = getProgression(startNumber, step);// получаем сформированную прогрессию
  // рандомим пропущенное число
  const hiddenNumberIndex = Math.floor(Math.random() * progression.length);// получаем индекс
  const hiddenNumber = progression[hiddenNumberIndex];// получаем число
  progression[hiddenNumberIndex] = '..';// заменяем пропущенное число точками
  return [progression.join(' '), hiddenNumber];
};

const getAnswerAndQuestion = () => {
  const [question, correctAnswer] = makeProgression();
  return [question, correctAnswer];
};

check(getAnswerAndQuestion, description);

export default getAnswerAndQuestion;

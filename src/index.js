import readlineSync from 'readline-sync';

const userAnswer = () => readlineSync.question('Your answer: ');// функция запрос ответа игрока

export const question = (exp) => {
  console.log(`Question: ${exp}`);
};

// генератор случайных чисел
export const randomNumber = () => {
  const number = Math.floor(Math.random() * 100 + 1);
  return number;
};

let trueCounter = 0;// счетчик правильных ответов
const i = 3;// максимальное количество раундов

// функция проверяет ответы на правильность,
// и если ответ верный - игра продолжается i раундов, иначе - конец игры
export const check = (func, userName, correctAnswer) => {
  const userAns = userAnswer();// ввод и присваивание константе ответа игрока
  if (correctAnswer == userAns) { // сравнение ответа игрока с правильным
    console.log('Correct!');
    trueCounter += 1;// инкремент счетчика
    if (trueCounter < i) { // если кол-во выигранных раундов подряд < макс. кол-ва раундов
      func();// запуск следующей итерации
    } else if (trueCounter === i) { // если кол-во выигранных раундов подряд = макс.кол-ву раундов
      console.log(`Congratulations, ${userName}!`);// поздравление игрока с победой
    }
  } else { // если ответ неверный - конец игры, "попробуй еще раз"
    console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
};

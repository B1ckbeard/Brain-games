import readlineSync from 'readline-sync';

const getQuestionAndAnswer = (game) => {
  const [question, correctAnswer] = game();
  return ([question, correctAnswer]);
};

const check = (game, description) => {
  // приветствуем игрока и записываем имя
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // выводим описание игры
  console.log(description);

  // запускаем цикл раундов
  const countRounds = 3;// максимальное количество раундов
  for (let i = 0; i < countRounds; i += 1) {
    // принимаем деструктуризацию вопроса и правильного ответа
    const [question, correctAnswer] = getQuestionAndAnswer(game);
    console.log(`Question: ${question}`);
    // записываем ответ пользователя
    const userAnswer = readlineSync.question('Your answer: ');
    // проверяем совпадает ли ответ юзера и правильный ответ
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log('typeof', typeof userAnswer, typeof correctAnswer);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default check;

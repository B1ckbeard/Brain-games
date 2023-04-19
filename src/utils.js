// генератор случайных чисел
const randomNumber = (range = 100) => {
  const number = Math.floor(Math.random() * range + 1);
  return number;
};

export default randomNumber;

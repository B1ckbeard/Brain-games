// генератор случайных чисел
export const randomNumber = (range = 100) => {
  const number = Math.floor(Math.random() * range + 1);
  return number;
};

// Это файл с функциями, которые нужны в нескольких проектах
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default getRandomNumber;

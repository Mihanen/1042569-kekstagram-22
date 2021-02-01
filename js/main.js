/* eslint-disable no-console */
const getRandomRange = function (min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min === max) { console.log('Выполнение невозможно')}
  else if (min < 0) { console.log('Выполнение невозможно')}
  else if (min > max) { console.log('Выполнение невозможно')}
  else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
console.log(getRandomRange(1, 52));

const getLineLength = function (){
  const string = 'Строка';
  const checkedString = string.length;
  const maxLineRange = 140;
  if (checkedString < maxLineRange) {return true}
  else {return false}
}
console.log(getLineLength())


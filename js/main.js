const random = function (min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min === max) {alert('Выполнение невозможно')}
  else if (min < 0) {alert('Выполнение невозможно')}
  else if (min > max) {alert('Выполнение невозможно')}
  else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
alert(random(1, 7));

const randomNotRound = function (min, max ) {
  if (min > max) { alert ('Выполнение невозможно')}
  else if (min < 0) { alert ('Выполнение невозможно')}
  else if (min === max) {alert ('Выполнение невозможно')}
  else
  {
    return Math.round (Math.random() * (max - min) + min);
  }
}
alert (randomNotRound(15, 5));
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/if...else

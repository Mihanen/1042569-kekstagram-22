/* eslint-disable no-console */
const getRandomRange = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min === max || min < 0 || min > max) {
    return false;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getLineLength = function (string, maxLineRange){
  if (string.length < maxLineRange) {return true}
  else {return false}
};

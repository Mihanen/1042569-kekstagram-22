/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
const getRandomRange = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min === max || min < 0 || min > max) {
    return false;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// eslint-disable-next-line no-unused-vars
const getLineLength = function (string, maxLineRange){
  if (string.length < maxLineRange) {return true}
  else {return false}
};

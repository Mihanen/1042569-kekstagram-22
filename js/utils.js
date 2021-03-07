import {OBJECT_COUNT} from './const.js';
import {NAMES} from './const.js';
import {DESCRIPTIONS} from './const.js';
import {MESSAGES} from './const.js';

const getRandomRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min !== max && min > 0 && min < max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

const makeComment = (index) => {
  return {
    id: index + 1,
    avatar: 'img/avatar-' + index + 1 + '.svg',
    name: NAMES[Math.floor(Math.random() * (NAMES.length-1))],
    message: MESSAGES[Math.floor(Math.random() * (MESSAGES.length-1))],
  };
};

const getComments = () => new Array(getRandomRange(1, 25)).fill(null).map((comment, index) => makeComment(index));

const makePhotoList = (index) =>{
  return {
    id: index + 1,
    url: 'photos/'+ getRandomRange(1,25) +'.jpg',
    description: DESCRIPTIONS[Math.floor(Math.random() * (DESCRIPTIONS.length-1))],
    likes: getRandomRange(15, 200),
    comments: getComments(),
  };
};

// eslint-disable-next-line no-unused-vars
const miniPictures = new Array(OBJECT_COUNT).fill(null).map((photo, index) => makePhotoList(index));

export{miniPictures};
export{getRandomRange};
export{getComments};

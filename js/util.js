const OBJECT_COUNT = 25;

const NAMES = [
  'Иван',
  'Михаил',
  'Мария',
  'Николай',
  'Виктор',
  'Юлия',
  'Елена',
  'Василий',
  'Евгений',
];
const DESCRIPTIONS = [
  'Природа',
  'Закат',
  'Утро',
  'Вечер',
  'Вьюга',
  'Котейка',
  'Пейзаж',
  'Портрет',
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const getRandomRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min !== max && min > 0 && min < max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

const makeComment = (index) =>{
  return {
    id: index + 1,
    avatar: 'img/avatar-' + getRandomRange(OBJECT_COUNT) + '.svg',
    name: NAMES[Math.floor(Math.random() * (NAMES.length-1))],
    message: MESSAGES[Math.floor(Math.random() * (MESSAGES.length-1))],
  };
};

const getComments = () => new Array(getRandomRange(OBJECT_COUNT)).fill(null).map((comment, index) => makeComment(index));

const makePhotoList = (index) =>{
  return {
    id: index + 1,
    url: 'photos/'+ getRandomRange(OBJECT_COUNT) +'.jpg',
    description: DESCRIPTIONS[Math.floor(Math.random() * (DESCRIPTIONS.length-1))],
    likes: getRandomRange(OBJECT_COUNT),
    comments: getComments(),
  };
};

// eslint-disable-next-line no-unused-vars
const commentLists = new Array(OBJECT_COUNT).fill(null).map((photo, index) => makePhotoList(index));

export{commentLists};

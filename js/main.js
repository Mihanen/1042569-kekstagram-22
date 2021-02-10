// eslint-disable-next-line no-unused-vars
const getRandomRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min != max && min > 0 && min < max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};



// eslint-disable-next-line no-unused-vars
const getLineLength = (string, maxLineRange) => string.length < maxLineRange;
// eslint-disable-next-line no-unused-vars
const getRandomElement = Math.floor(Math.random( ) * 4)

// eslint-disable-next-line no-unused-vars
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
// eslint-disable-next-line no-unused-vars
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
]
// eslint-disable-next-line no-unused-vars
const getRandomArrayElement = (elements) => {
  // eslint-disable-next-line no-undef
  return elements[_.random(0, elements.length - 1)];
};

const OBJECT_COUNT = 25;

const makeComment = (index) =>{
  return {
    id: index + 1,
    avatar: 'img/avatar-{{' + getRandomRange(1, 6) + '}}.svg',
    name: NAMES[Math.floor(Math.random() * (NAMES.length-1))],
    message: MESSAGES[Math.floor(Math.random() * (MESSAGES.length-1))],
  };
};

const makeComments = new Array(getRandomRange(1, 3)).fill(null).map((comment, index) => makeComment(index));

const makeCommentList = (index) =>{
  return {
    id: index + 1,
    url: 'photos/'+ getRandomRange(1, 25) +'.jpg',
    description: DESCRIPTIONS[Math.floor(Math.random() * (DESCRIPTIONS.length-1))],
    likes: getRandomRange(15, 200),
    comments: makeComments,
  };
};

const makeCommentLists = new Array(OBJECT_COUNT).fill(null).map((photo, index) => makeCommentList(index));


// eslint-disable-next-line no-console
console.log(makeComments);
// eslint-disable-next-line no-console
console.log(makeCommentLists);


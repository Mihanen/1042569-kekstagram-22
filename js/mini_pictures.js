import {miniPictures} from './util.js';
import {makeComment} from './util.js';

const miniPicturesItem = document.querySelector('.pictures');
const miniPicturesTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const makeMiniPicture = miniPictures;
const similarListFragment = document.createDocumentFragment();

makeMiniPicture.forEach(({url, likes }) => {
  const minPictureElement = miniPicturesTemplate.cloneNode(true);
  minPictureElement.querySelector('.picture__img').src = url;
  minPictureElement.querySelector('.picture__likes').textContent = likes;
  similarListFragment.appendChild(minPictureElement);
});
miniPicturesItem.appendChild(similarListFragment);



const miniPicturesItemComment = document.querySelector('.picture__info');
const miniPicturesTemplateComment = document.querySelector('#picture')
  .content
  .querySelector('.picture__info');

const makeMiniPictureComment = makeComment();
const similarListFragmentComment = document.createDocumentFragment();

makeMiniPictureComment.forEach(({comments }) => {
  const minPictureElementComment = miniPicturesTemplateComment.cloneNode(true);
  minPictureElementComment.querySelector('.picture__comments').textContent = comments;
  similarListFragmentComment.appendChild(minPictureElementComment);
});


miniPicturesItemComment.appendChild(similarListFragmentComment);



// eslint-disable-next-line no-console
console.log(miniPicturesItem);
// eslint-disable-next-line no-console
console.log(miniPicturesTemplate);

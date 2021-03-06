import {miniPictures} from './util.js';

const miniPicturesItem = document.querySelector('.pictures');
const miniPicturesTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const makeMiniPicture = miniPictures;
const similarListFragment = document.createDocumentFragment();


makeMiniPicture.forEach(({url, likes }) => {
  const minPictureElement = miniPicturesTemplate.cloneNode(true);
  minPictureElement.querySelector('.picture__img').src = url;
  minPictureElement.querySelector('.picture__comments').textContent = 2;
  minPictureElement.querySelector('.picture__likes').textContent = likes;
  similarListFragment.appendChild(minPictureElement);
});

miniPicturesItem.appendChild(similarListFragment);


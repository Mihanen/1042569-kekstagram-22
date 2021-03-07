import {miniPictures, getComments} from './utils.js';

const pictuesContainer = document.querySelector('.pictures');
const miniPictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const similarPhotos = document.createDocumentFragment();

miniPictures.forEach(({url, likes }) => {
  const minPictureElement = miniPictureTemplate.cloneNode(true);
  minPictureElement.querySelector('.picture__img').src = url;
  minPictureElement.querySelector('.picture__comments').textContent = getComments().length;
  minPictureElement.querySelector('.picture__likes').textContent = likes;
  similarPhotos.appendChild(minPictureElement);
});

pictuesContainer.appendChild(similarPhotos);

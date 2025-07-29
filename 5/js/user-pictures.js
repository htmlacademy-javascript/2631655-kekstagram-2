import { dataGenerate } from './data.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const userPictures = document.querySelector('.pictures');
const photoDataFragment = document.createDocumentFragment();
const photoData = dataGenerate();


photoData.forEach(({ url, description, likes, comments }) => {
  const photoElement = pictureTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').setAttribute('src', url);
  photoElement.querySelector('.picture__img').setAttribute('alt', description);
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  photoDataFragment.appendChild(photoElement);
});

userPictures.appendChild(photoDataFragment);

export { userPictures };

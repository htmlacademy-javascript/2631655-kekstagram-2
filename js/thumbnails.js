import { photoDataGenerate } from './data.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const thumbnails = (photos) => {
  const userPictures = document.querySelector('.pictures');
  const photoDataFragment = document.createDocumentFragment();

  photos.forEach(({ id, url, description, likes, comments }) => {
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.dataset.id = id;
    photoElement.querySelector('.picture__img').setAttribute('src', url);
    photoElement.querySelector('.picture__img').setAttribute('alt', description);
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    photoDataFragment.appendChild(photoElement);
  });
  userPictures.appendChild(photoDataFragment);
  return userPictures;
};

const thumbnailsData = thumbnails(photoDataGenerate());

export { thumbnailsData };

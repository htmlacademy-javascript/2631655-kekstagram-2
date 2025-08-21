import { isEscapeKey } from './utils.js';
import { photoDataGenerate } from './data.js';

const data = photoDataGenerate();
const bigPicture = document.querySelector('.big-picture');
const closePopupBtn = bigPicture.querySelector('.cancel');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const body = document.body;
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
// const likesCountBigPicture = bigPicture.querySelector('.likes-count');
// const likesCountSmallPicture = container.querySelector('.picture__likes');

// console.log(data);

const showBigPicture = (pictureId) => {

  const currentPicture = data.find((photo) => photo.id);
  console.log(currentPicture);

  bigPicture.classList.remove('hidden');
  // bigPictureImg.src = currentPicture.url;

  closePopupBtn.addEventListener('click', onCloseBtnClick);
  document.addEventListener('keydown', onDocumentKeydown);
  body.classList.add('modal-open');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  const closeUserPopup = () => {
    bigPicture.classList.add('hidden');
    closePopupBtn.removeEventListener('click', onCloseBtnClick);
    document.removeEventListener('keydown', onDocumentKeydown);
    body.classList.remove('modal-open');
  };

  function onDocumentKeydown(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeUserPopup();
    }
  }

  function onCloseBtnClick(evt) {
    if (evt.target) {
      closeUserPopup();
    }
  }

  closePopupBtn.addEventListener('click', onCloseBtnClick);

  if (!bigPicture.classList.contains('hidden')) {
    document.addEventListener('keydown', onDocumentKeydown);
  }
};

export { showBigPicture };

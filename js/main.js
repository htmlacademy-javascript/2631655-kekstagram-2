import { thumbnailsData } from './thumbnails.js';
import { showBigPicture } from './popup.js';


thumbnailsData.addEventListener('click', (evt) => {
  const currentPicture = evt.target.closest('.picture');
  if (currentPicture) {
    showBigPicture(+currentPicture.dataset.id);
  }
});

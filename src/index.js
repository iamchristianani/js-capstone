import './style.css';
import { displayMovie, showLikes } from './modules/renderList.js';
import { addLike } from './modules/involvementAPICalls.js';

document.addEventListener('DOMContentLoaded', async () => {
  await displayMovie();

  const likeCounter = document.querySelectorAll('.like-counter');
  likeCounter.forEach(async (likes) => {
    await showLikes(likes);
  });
});

document.addEventListener('click', async (e) => {
  const likeBtn = e.target;
  if (likeBtn.classList.contains('like-icon')) {
    const movieID = likeBtn.getAttribute('data-id');
    await addLike(movieID);
    const txtlike = likeBtn.nextElementSibling;
    await showLikes(txtlike);
  }
});

import './style.css';
import { displayMovie, showLikes } from './modules/renderList.js';
import counter from './modules/movieCounter.js';
import { movieCount } from './modules/variableList.js';

document.addEventListener('DOMContentLoaded', async () => {
  await displayMovie();

  const likeCounter = document.querySelectorAll('.like-counter');
  likeCounter.forEach(async (likes) => {
    const add = 0;
    await showLikes(likes, add);
  });
  const allMovies = document.querySelectorAll('.each-movie');
  movieCount.innerHTML = counter(allMovies);
});

window.addEventListener('click', async (e) => {
  const likeBtn = e.target;
  if (likeBtn.classList.contains('like-icon')) {
    const movieID = likeBtn.getAttribute('data-id');
    const txtlike = likeBtn.nextElementSibling;
    const add = 1;
    await showLikes(txtlike, add, movieID);
  }
});

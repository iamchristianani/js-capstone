import allMovie from './variableList.js';
import createList from './movieList.js';
import { countLikes } from './involvementAPICalls.js';

const displayMovie = async () => {
  const movieArr = await createList();

  allMovie.innerHTML = '';
  movieArr.forEach((movie) => {
    const oneMovie = document.createElement('li');
    oneMovie.className = 'each-movie';
    oneMovie.innerHTML = `
      <div class="image-container movie-${movie.id}">
          <img src="${movie.moviePoster}" alt="${movie.altTitle}">
      </div>
      <div class="name-and-likes">
          <h3>${movie.name}</h3>
          <div class="likes">
            <i data-id="${movie.id}" class="fa-regular fa-heart like-icon"></i>
            <span data-id="${movie.id}" class="like-counter"></span> 
          </div>
      </div>
      <button class="comment">Comment</button>
    `;
    allMovie.appendChild(oneMovie);
  });
};

const showLikes = async (likes) => {
  const movieID = likes.getAttribute('data-id');
  const noOfLikes = await countLikes();
  const likeAmount = noOfLikes.filter((likeObj) => likeObj.item_id === movieID);
  if (likeAmount.length > 0) {
    likes.textContent = `${likeAmount[0].likes}`;
  }
};

export { displayMovie, showLikes };
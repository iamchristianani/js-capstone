import allMovie from './variableList.js';
import createList from './movieList.js';

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
            <i class="fa-regular fa-heart"></i>
            <span class="like-counter">1</span> 
          </div>
      </div>
      <button class="comment">Comment</button>
    `;
    allMovie.appendChild(oneMovie);
  });
};

export default displayMovie;
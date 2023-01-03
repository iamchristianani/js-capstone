import allMovie from './variableList.js';
import createList from './movieList.js';
import showCommentModal from './commentPopUp.js';
import getMovie from './apiCall.js';

const getMovies = async (e) => {
  const movies = await getMovie();
  const movie = movies.filter((movie) => JSON.stringify(movie.id ) === e.target.id);
  showCommentModal(movie[0]);
}

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
    `;
    const commmentBtn = document.createElement('button');
    commmentBtn.innerText = "Comment";
    commmentBtn.classList.add('comment');
    commmentBtn.setAttribute('id', movie.id);



    commmentBtn.addEventListener('click', (e) => {
      getMovies(e);
    });

    oneMovie.append(commmentBtn);
    allMovie.appendChild(oneMovie);
  });
};

export default displayMovie;
import { allMovie } from './variableList.js';
import createList from './movieList.js';
import { addLiketoAPI, retrieveAPILike } from './involvementAPICalls.js';
import showCommentModal from './commentPopUp.js';
import getMovie from './apiCall.js';

const getMovies = async (e) => {
  const movies = await getMovie();
  const movie = movies.filter((movie) => JSON.stringify(movie.id) === e.target.id);
  showCommentModal(movie[0]);
};

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
    `;
    const commmentBtn = document.createElement('button');
    commmentBtn.innerText = 'Comment';
    commmentBtn.classList.add('comment');
    commmentBtn.setAttribute('id', movie.id);

    commmentBtn.addEventListener('click', (e) => {
      getMovies(e);
    });

    oneMovie.append(commmentBtn);
    allMovie.appendChild(oneMovie);
  });
};

const showLikes = async (likes, add, oneID) => {
  const movieID = likes.getAttribute('data-id');
  addLiketoAPI(oneID);
  const noOfLikes = await retrieveAPILike();
  const likeAmount = noOfLikes.filter((likeObj) => likeObj.item_id === movieID);
  if (likeAmount.length > 0) {
    likes.textContent = `${likeAmount[0].likes + add}`;
  }
};

export { displayMovie, showLikes };
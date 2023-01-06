import axios from 'axios';

import getComments from './commentApi.js';

const popDiv = document.getElementById('popDiv');
const showCommentModal = (movie) => {
  popDiv.style.display = 'flex';
  const popUpContainer = document.createElement('div');
  popUpContainer.classList.add('popUpContainer');

  const popUpTopDiv = document.createElement('div');
  popUpTopDiv.classList.add('popUpTopDiv');

  const movieImg = document.createElement('img');
  movieImg.classList.add('movieImg');
  movieImg.setAttribute('src', movie.image.original);

  const popUpCloseBtn = document.createElement('i');
  popUpCloseBtn.classList.add('popUpCloseBtn', 'fa-solid', 'fa-close', 'closeIcon');
  popUpCloseBtn.addEventListener('click', () => {
    popDiv.style.display = 'none';
  });
  popUpTopDiv.append(movieImg, popUpCloseBtn);

  const popUpBottomDiv = document.createElement('div');
  popUpBottomDiv.classList.add('popUpBottomDiv');

  const movieName = document.createElement('h3');
  movieName.classList.add('movieName');
  movieName.innerText = movie.name;

  const popUpBottomRight = document.createElement('div');
  const genreList = document.createElement('ul');
  genreList.classList.add('genreList');

  movie.genres.forEach((genre) => {
    const genreItem = document.createElement('li');
    genreItem.classList.add('genreItem');
    genreItem.innerText = genre;
    genreList.append(genreItem);
  });

  const genreText = document.createElement('p');
  genreText.classList.add('genreText');
  genreText.innerText = 'Genres';

  popUpBottomRight.append(genreText, genreList);

  const officialSiteLink = document.createElement('a');
  officialSiteLink.classList.add('officialSiteLink');
  officialSiteLink.setAttribute('href', movie.officialSite);
  officialSiteLink.innerText = 'Visit Site';

  const movieLanguage = document.createElement('p');
  movieLanguage.classList.add('movieLanguage');
  movieLanguage.innerText = `Langauge: ${movie.language}`;

  const movieratingContainer = document.createElement('div');

  const movieRatingValue = document.createElement('p');
  movieRatingValue.classList.add('movieRatingValue');
  movieRatingValue.innerText = `Rating: ${movie.rating.average}`;
  movieratingContainer.append(movieRatingValue);

  const popUpBottomLeft = document.createElement('div');
  popUpBottomLeft.append(movieLanguage, movieratingContainer, officialSiteLink);

  popUpBottomDiv.append(popUpBottomRight, popUpBottomLeft);

  const commentsContainer = document.createElement('div');
  commentsContainer.classList.add('commentsContainer');

  getComments(movie.id, commentsContainer, popUpTopDiv);

  popUpContainer.append(commentsContainer);

  const nameInput = document.createElement('input');
  nameInput.classList = 'input input-small';
  nameInput.setAttribute('placeholder', 'Enter your name');

  const comment = document.createElement('textarea');
  comment.classList = 'input input-big';
  comment.innerText = 'Leave your comment';
  comment.addEventListener('focusin', () => {
    comment.innerText = '';
  });

  comment.addEventListener('focusout', () => {
    comment.innerText = 'Leave your comment';
  });

  const addCommentBtn = document.createElement('button');
  addCommentBtn.classList.add('addCommentBtn');
  addCommentBtn.innerText = 'Comment';
  const addCommentContainer = document.createElement('div');
  addCommentContainer.classList.add('addCommentContainer');
  addCommentBtn.addEventListener('click', async () => {
    const commentsUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dPFjjUGUAmeW9iUvUDVo/comments';
    const data = {
      item_id: movie.id,
      username: nameInput.value,
      comment: comment.value,
    };
    try {
      // eslint-disable-next-line no-unused-vars
      const result = await axios.post(commentsUrl, data);
      commentsContainer.innerHTML = '';
      getComments(movie.id, commentsContainer, popUpTopDiv);
      return result;
    } catch (error) {
      return error;
    }
  });

  const addCommentText = document.createElement('h4');
  addCommentBtn.classList.add('addCommentText');
  addCommentText.innerText = 'Add a comment';
  addCommentContainer.append(addCommentText, nameInput, comment, addCommentBtn);

  popUpContainer.append(
    popUpTopDiv, movieName, popUpBottomDiv, commentsContainer, addCommentContainer,
  );

  popDiv.append(popUpContainer);
};

export default showCommentModal;
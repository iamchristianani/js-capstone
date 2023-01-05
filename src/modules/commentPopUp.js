/* eslint-disable guard-for-in */
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
  // popUpCloseBtn.innerText = 'colse';
  popUpCloseBtn.classList.add('popUpCloseBtn', 'fa-solid', 'fa-close', 'closeIcon');
  popUpCloseBtn.addEventListener('click', () => {
    popDiv.style.display = 'none';
    // document.location.reload;
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

  popUpContainer.append(popUpTopDiv, movieName, popUpBottomDiv);
  popDiv.append(popUpContainer);
};

export default showCommentModal;
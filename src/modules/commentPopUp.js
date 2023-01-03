const popDiv = document.getElementById('popDiv');
const showCommentModal = (movie) => {
  console.log(movie)

const popUpContainer = document.createElement('div');
popUpContainer.classList.add('popUpContainer');

const popUpTopDiv = document.createElement('div');
popUpTopDiv.classList.add('popUpTopDiv');

const movieImg = document.createElement('img');
movieImg.classList.add('movieImg');
movieImg.setAttribute('src', movie.image.original);

const popUpCloseBtn = document.createElement('i');
popUpCloseBtn.innerText = 'colse';
popUpCloseBtn.classList.add('popUpCloseBtn');

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
movieLanguage.innerText = movie.language;

const movieratingContainer = document.createElement('div');

for( let rating in movie.rating) {
  const movieRating = document.createElement('p');
  movieRating.classList.add('movieRating');
  movieRating.innerText = 'Rating:';
  const movieRatingValue = document.createElement('p')
movieRatingValue.classList.add('movieRatingValue');
movieRatingValue.innerText = rating;
movieratingContainer.append(movieRating, movieRatingValue);
}


const popUpBottomLeft = document.createElement('div');
popUpBottomLeft.append(movieLanguage, movieratingContainer, officialSiteLink);

popUpBottomDiv.append(popUpBottomRight, popUpBottomLeft);

popDiv.append(popUpTopDiv, popUpBottomDiv);

}

export default showCommentModal;
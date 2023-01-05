import { movieCount } from './variableList.js';

const counter = () => {
  const allMovies = document.querySelectorAll('.each-movie');
  movieCount.innerHTML = allMovies.length;
};

export default counter;
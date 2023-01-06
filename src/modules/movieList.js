import getMovie from './apiCall.js';

const createList = async () => {
  const movieArr = [];
  const movieList = await getMovie();
  movieList.forEach((movie) => {
    const newArr = {
      id: movie.id,
      name: movie.name,
      moviePoster: movie.image.original,
      altTitle: movie.name,
      description: movie.summary,
    };
    movieArr.push(newArr);
  });
  return movieArr;
};

export default createList;
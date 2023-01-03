const API_URL = 'https://api.tvmaze.com/shows';

const getMovie = async () => {
  const res = await fetch(API_URL);
  const json = await res.json();
  const data = json.slice(0, 16);
  return data;
};

export default getMovie;
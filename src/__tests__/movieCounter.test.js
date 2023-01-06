import counter from '../modules/movieCounter.js';

describe('Test for Movie Count: ', () => {
  test('6 Movies were added', () => {
    document.body.innerHTML = `
      <li class="each-movie"></li>
      <li class="each-movie"></li>
      <li class="each-movie"></li>
      <li class="each-movie"></li>
      <li class="each-movie"></li>
      <li class="each-movie"></li>
    `;
    const allMovies = document.querySelectorAll('.each-movie');
    const movies = counter(allMovies);
    expect(movies).toBe(6);
  });

  test('No Movies were added [0]', () => {
    document.body.innerHTML = '<ul></ul>';
    const allMovies = document.querySelectorAll('.each-movie');
    const movies = counter(allMovies);
    expect(movies).toBe(0);
  });
});

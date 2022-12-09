const storage = window.localStorage;

const MOVIELIST = 'movie-list';
const MOVIE = 'movie';

const getItem = (key, defaultValue) => {
  try {
    const storedValue = storage.getItem(key);

    if (storedValue) {
      return JSON.parse(storedValue);
    }
    return defaultValue;
  } catch (e) {
    return defaultValue;
  }
};

const setItem = (key, value) => {
  storage.setItem(key, JSON.stringify(value));
};

export const getMovieList = () => {
  return getItem(MOVIELIST, []);
};

export const getMovie = () => {
  return getItem(MOVIE, []);
};

export const setMovieList = value => {
  setItem(MOVIELIST, value);
};

export const setMovie = value => {
  setItem(MOVIE, value);
};

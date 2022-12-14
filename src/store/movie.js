import {
  checkTypeIsArray,
  checkTypeIsObject,
  checkTypeIsString,
} from '../utils/validation';

import {
  getMovieList,
  getMovie,
  setMovieList,
  setMovie,
} from '../utils/storage';

export default {
  namespaced: true,
  state() {
    return {
      isLoading: false,
      isMovieApiCallFail: false,
      apiCallErrorMsg: '',
      isMovieClick: false,
      selectedMovie: getMovie(),
      movieList: getMovieList(),
    };
  },
  getters: {},
  mutations: {
    updateIsLoading(state, value) {
      console.log(value);
      state.isLoading = value;
    },
    updateIsMovieApiCallFail(state, value) {
      state.isMovieApiCallFail = value;
    },
    updateApiCallErrorMsg(state, msg) {
      state.apiCallErrorMsg = msg;
    },
    updateIsMovieClick(state) {
      state.isMovieClick = !state.isMovieClick;
    },
    updateMovieList(state, movieList) {
      checkTypeIsArray(movieList);

      state.movieList = [...movieList];
      setMovieList(movieList);
    },
    updateSelectedMovie(state, movie) {
      checkTypeIsObject(movie);

      state.selectedMovie = { ...movie };
      setMovie(movie);
    },
  },
  actions: {
    async fetchMovieList({ commit }, payload) {
      const { title } = payload;

      checkTypeIsString(title);

      commit('updateIsLoading', true);

      const movieListObj = await fetchData(payload);

      commit('updateIsLoading', false);

      if (movieListObj.Response === 'False') {
        commit('updateIsMovieApiCallFail', true);
        commit('updateApiCallErrorMsg', movieListObj.Error);
      } else {
        commit('updateIsMovieApiCallFail', false);
        commit('updateMovieList', movieListObj.Search);
      }
    },
    async fetchMovieById({ commit }, payload) {
      const { imdbID } = payload;

      checkTypeIsString(imdbID);

      commit('updateIsLoading', true);

      const movie = await fetchData(payload);

      commit('updateIsLoading', false);

      if (movie.Response === 'False') {
        commit('updateIsMovieApiCallFail', true);
        commit('updateApiCallErrorMsg', movie.Error);
      } else {
        commit('updateIsMovieApiCallFail', false);
        commit('updateSelectedMovie', movie);
        commit('updateIsMovieClick');
      }
    },
  },
};

const fetchData = async payload => {
  const { imdbID, title, type, year } = payload;
  let url = '/api';

  if (imdbID) {
    url = `${url}?${imdbID ? `i=${imdbID}` : ''}`;
  } else {
    url = `${url}?s=${title}${type ? `&type=${type}` : ''}${
      year ? `&y=${year}` : ''
    }`;
  }

  const res = await fetch(url);
  console.log(res);

  if (res.ok) {
    return res.json();
  }
};

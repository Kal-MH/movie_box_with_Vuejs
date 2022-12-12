export const storeModules = {
  MOVIE: {
    NAME: 'movie',
    STATE: {
      IS_LOADING: 'isLoading',
      IS_MOVIE_API_CALL_FAIL: 'isMovieApiCallFail',
      API_CALL_ERROR_MSG: 'apiCallErrorMsg',
      IS_MOVIE_CLICK: 'isMovieClick',
      SELECTED_MOVIE: 'selectedMovie',
      MOVIELIST: 'movieList',
    },
    MUTATIONS: {
      UPDATE_IS_LOADING: 'updateIsLoading',
      UPDATE_IS_MOVIE_API_CALL_FAIL: 'updateIsMovieApiCallFail',
      UPDATE_API_CALL_ERROR_MSG: 'updateApiCallErrorMsg',
      UPDATE_IS_MOVIE_CLICK: 'updateIsMovieClick',
      UPDATE_MOVIELIST: 'updateMovieList',
      UPDATE_SELECTED_MOVIE: 'updateSelectedMovie',
    },
    ACTIONS: {
      FETCH_MOVIELIST: 'fetchMovieList',
      FETCH_MOVIE_BY_ID: 'fetchMovieById',
    },
  },
};

export const ERROR_MESSAGE = {
  ERROR_API_CALL: 'Error: API call failed',
  ERROR_NEW_TARGET: 'Error: missing new keyword',
  ERROR_TYPE_ARRAY: 'Error: Target Type is Not Array',
  ERROR_TYPE_BOOLEAN: 'Error: Target Type is Not Boolean',
  ERROR_TYPE_OBJECT: 'Error: Target Type is Not Object',
  ERROR_TYPE_STRING: 'Error: Target Type is Not String',
};

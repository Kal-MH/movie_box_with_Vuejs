<template>
  <div class="main__recommended">
    <h4>Recommend</h4>
  </div>
  <div class="main__empty-box">
    <h2 v-show="isMovieApiCallFail">
      {{ apiCallErrorMsg }}
    </h2>
    <div
      v-show="isMovieApiCallFail === false"
      class="main__movie-list-container">
      <MovieItem
        v-for="movie in movieList"
        :key="movie.imdbID"
        :movie="movie" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MovieItem from '~/components/MovieItem';
import { storeModules } from '~/utils/constants';

const {
  MOVIE: { NAME: MOVIE },
  MOVIE: {
    STATE: { MOVIELIST, IS_MOVIE_API_CALL_FAIL, API_CALL_ERROR_MSG },
  },
} = storeModules;

export default {
  components: {
    MovieItem,
  },
  computed: {
    ...mapState(MOVIE, [MOVIELIST, IS_MOVIE_API_CALL_FAIL, API_CALL_ERROR_MSG]),
  },
};
</script>

<style lang="scss" scoped>
.main__recommended {
  margin-top: 1rem;
  display: inline-block;
  border-bottom: 2px solid rgba($background2, 0.2);

  h2 {
    font-size: 1.78rem;
  }
}

.main__empty-box {
  min-height: 500px;
  margin-top: 2rem;
  border-radius: 6px;
  text-align: center;
  font-size: 1.2rem;
}

.main__movie-list-container {
  display: flex;
  flex-wrap: wrap;
}
</style>

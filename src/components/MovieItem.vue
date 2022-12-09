<template>
  <div class="movie-container">
    <div class="movie-container__img" @click="fetchMovieById">
      <img v-if="movie.Poster !== 'N/A'" :src="movie.Poster" />
    </div>
    <div class="movie-container__title">
      <span class="title__title">{{ movie.Title }}</span>
      <span class="title__year">({{ movie.Year }})</span>
    </div>
  </div>
</template>

<script>
import { storeModules } from '~/utils/constants';

const {
  MOVIE: { NAME: MOVIE },
  MOVIE: {
    ACTIONS: { FETCH_MOVIE_BY_ID },
  },
} = storeModules;

const MOVIE_FETCH_MOVIE_BY_ID = `${MOVIE}/${FETCH_MOVIE_BY_ID}`;

export default {
  props: {
    movie: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    fetchMovieById() {
      const payload = {
        imdbID: this.movie.imdbID,
      };

      this.$store.dispatch(MOVIE_FETCH_MOVIE_BY_ID, payload);
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-container {
  width: 170px;
  margin-right: 19px;
  margin-bottom: 10px;
  cursor: pointer;

  &__img {
    width: 100%;
    height: 262px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8));
    border-radius: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;

      &:hover {
        filter: brightness(0.4);
      }
    }
  }

  &__title {
    margin-top: 8px;
    font-size: 1rem;
    color: $background2;

    display: flex;
    flex-direction: column;
    align-items: center;

    span.title__year {
      font-size: 0.87rem;
    }
  }
}
</style>

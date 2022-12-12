<template>
  <teleport to="body">
    <div v-show="isMovieClick" class="movie-info-modal" @click="offModal">
      <div class="movie-info-modal__inner" :style="background" @click.stop>
        <div class="inner__top-container">
          <button class="close" @click="offModal">X</button>
        </div>
        <div class="inner__content-container">
          <div class="content__right-container">
            <h1>{{ selectedMovie.Title }}</h1>
            <div class="short-description-container">
              <span class="rating">{{ selectedMovie.imdbRating }}</span>
              <div>
                <span>{{ selectedMovie.Runtime }}</span>
                <span>{{ selectedMovie.Genre }}</span>
                <span>{{ selectedMovie.Year }}</span>
              </div>
            </div>
            <div class="award-container">
              <span>{{
                selectedMovie.Awards !== 'N/A' ? selectedMovie.Awards : ''
              }}</span>
            </div>
          </div>
          <div class="content__left-container">
            <div class="plot-container">
              <h3>Plot</h3>
              <p>{{ selectedMovie.Plot }}</p>
            </div>
            <div class="makers-container">
              <div class="directors">
                <h5>Directors</h5>
                <p>{{ selectedMovie.Director }}</p>
              </div>
              <div class="Actors">
                <h5>Actors</h5>
                <p>{{ selectedMovie.Actors }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Loading />
  </teleport>
</template>

<script>
import { mapState } from 'vuex';
import { storeModules } from '~/utils/constants';
import Loading from '~/components/Loading';

const {
  MOVIE: { NAME: MOVIE },
  MOVIE: {
    STATE: { IS_MOVIE_CLICK, SELECTED_MOVIE },
  },
  MOVIE: {
    MUTATIONS: { UPDATE_IS_MOVIE_CLICK },
  },
} = storeModules;

const MOVIE_UPDATE_IS_MOVIE_CLICK = `${MOVIE}/${UPDATE_IS_MOVIE_CLICK}`;

const KEYUP = 'keyup';
const KEY_ESCAPE = 'Escape';

export default {
  components: {
    Loading,
  },
  computed: {
    ...mapState(MOVIE, [IS_MOVIE_CLICK, SELECTED_MOVIE]),
    background() {
      const imgUrl = this.selectedMovie.Poster
        ? this.selectedMovie.Poster.replace('SX300', 'SX1100')
        : '';

      return `background-image: 
        linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), 
        url(${imgUrl || ''});`;
    },
  },
  watch: {
    isMovieClick(newValue) {
      if (newValue) {
        window.addEventListener(KEYUP, this.handleKeyupEventEscape);
      } else {
        window.removeEventListener(KEYUP, this.handleKeyupEventEscape);
      }
    },
  },
  methods: {
    offModal() {
      this.$store.commit(MOVIE_UPDATE_IS_MOVIE_CLICK);
    },
    handleKeyupEventEscape(e) {
      if (e.key === KEY_ESCAPE) {
        this.offModal();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.movie-info-modal {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 4rem 12rem;
  background-color: $background2;
  display: flex;
  justify-content: center;

  &__inner {
    width: 100%;
    height: 100%;
    max-width: 980px;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    color: $font-color2;
    display: flex;
    flex-direction: column;

    .inner__top-container {
      display: flex;
      justify-content: flex-end;

      button {
        width: 30px;
        height: 30px;
        text-align: center;
        margin: 10px;
      }
    }

    .inner__content-container {
      height: 100%;
      display: flex;
      align-items: flex-end;

      & .content__right-container {
        width: 60%;
        padding: 0 2rem 3rem 5rem;

        h1 {
          margin-bottom: 2.5rem;
        }

        .rating:before {
          font-family: 'FontAwesome';
          content: '\f005';
          color: $rating;
          margin-right: 5px;
        }

        .short-description-container {
          display: flex;

          div {
            margin-left: 13px;

            span {
              padding: 0 10px;
            }
            span:nth-child(2) {
              border-right: 1px solid $font-color2;
              border-left: 1px solid $font-color2;
            }
          }
        }

        .award-container {
          margin-top: 10px;
        }
      }

      & .content__left-container {
        width: 45%;
        padding: 0 5rem 3rem 1rem;

        p {
          color: rgba($background, 0.8);
        }
      }
    }
  }
}
</style>

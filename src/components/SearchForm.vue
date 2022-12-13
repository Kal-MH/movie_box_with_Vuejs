<template>
  <div class="header__search-form">
    <div class="header__search-form__input">
      <input
        v-model="title"
        placeholder="Search movie..."
        @keyup.enter="apply" />
    </div>
    <div class="header__search-form__selected">
      <select v-model="year">
        <option value="">Year</option>
        <option v-for="y in movieYears" :key="y">{{ y }}</option>
      </select>
      <select v-model="type">
        <option value="">Type</option>
        <option v-for="t in movieTypes" :key="t">{{ t }}</option>
      </select>
    </div>
    <button @click="apply">Search</button>
  </div>
</template>

<script>
import { storeModules } from '~/utils/constants';

const searchKeywords = {
  TYPES: {
    MOVIE: 'movie',
    SERIES: 'series',
    EPISODE: 'episode',
  },
  BOUNDED_NUMBER: 1963,
};

const searchCategories = {
  TYPES: Object.values(searchKeywords.TYPES),
  YEARS: (() => {
    const thisYear = new Date().getFullYear();
    const count = thisYear - searchKeywords.BOUNDED_NUMBER + 1;
    const years = Array.from(Array(count), (v, k) => thisYear - k);

    return years;
  })(),
};

const {
  MOVIE: { NAME: MOVIE },
  MOVIE: {
    ACTIONS: { FETCH_MOVIELIST },
  },
} = storeModules;

const MOVIE_FETCH_MOVIELIST = `${MOVIE}/${FETCH_MOVIELIST}`;

export default {
  data() {
    return {
      title: '',
      type: '',
      year: '',
      movieTypes: searchCategories.TYPES,
      movieYears: searchCategories.YEARS,
    };
  },
  methods: {
    apply() {
      const payload = {
        title: this.title,
        type: this.type,
        year: this.year,
      };
      this.$store.dispatch(MOVIE_FETCH_MOVIELIST, payload);
    },
  },
};
</script>

<style lang="scss" scoped>
.header__search-form {
  padding: 0.75rem 2rem 0.55rem 4rem;
  width: 80%;
  border-radius: 40px;
  display: flex;
  color: $font-color;
  background-color: $background;
  align-self: flex-start;

  &__input {
    align-self: center;
    margin-right: 1rem;
    flex-grow: 2;

    input {
      width: 100%;
      font-size: 1.4rem;
      line-height: normal;
      outline: none;
    }
  }

  &__selected {
    align-self: center;
    flex-grow: 1;

    display: flex;
    justify-content: space-evenly;

    select {
      appearance: none;
      margin-right: 10px;
      padding-left: 10px;
      max-width: 70px;
      flex-grow: 1;
      border-left: 2px solid $font-color2;
      outline: none;

      &::-webkit-scrollbar {
        width: 3px;
        background-color: $background2;
      }

      option {
        background-color: $background;
      }
    }
  }

  button {
    padding: 12px 24px;
    background-color: $border;
    color: $font-color2;
    border-radius: 30px;
  }
}
</style>

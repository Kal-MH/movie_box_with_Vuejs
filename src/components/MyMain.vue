<template>
  <main class="main">
    <MovieList />
    <MovieInfoModal />
  </main>
</template>

<script>
import MovieList from '~/components/MovieList';
import MovieInfoModal from '~/components/MovieInfoModal';

export default {
  components: {
    MovieList,
    MovieInfoModal,
  },
};
</script>

<style lang="scss" scoped>
.main {
  max-width: $max-width;
  padding: 2rem 8rem;
  margin: 0 auto;
  color: $color;
}
</style>

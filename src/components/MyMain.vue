<template>
  <main class="main">
    <MovieList />
    <MovieInfoModal />
    <Loading />
  </main>
</template>

<script>
import MovieList from '~/components/MovieList';
import MovieInfoModal from '~/components/MovieInfoModal';
import Loading from '~/components/Loading';

export default {
  components: {
    MovieList,
    MovieInfoModal,
    Loading,
  },
};
</script>

<style lang="scss" scoped>
.main {
  max-width: $max-width;
  min-width: $min-width;
  padding: 2rem 8rem;
  margin: 0 auto;
  color: $font-color;
  position: relative;
}
</style>

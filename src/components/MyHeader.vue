<template>
  <header class="header">
    <Logo />
    <SearchForm />
  </header>
</template>

<script>
import SearchForm from '~/components/SearchForm';
import Logo from '~/components/Logo';

export default {
  components: {
    SearchForm,
    Logo,
  },
};
</script>

<style lang="scss" scoped>
.header {
  max-width: $max-width;
  min-width: $min-width;
  padding: 2rem 8rem;
  margin: 0 auto;
  border-bottom: 4px solid transparent;
  border-image: linear-gradient(to right, #fff, $border, #fff);
  border-image-slice: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

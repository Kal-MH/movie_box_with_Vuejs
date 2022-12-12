<template>
  <MyHeader />
  <MyMain />
  <Loading />
</template>

<script>
import MyHeader from '~/components/MyHeader';
import MyMain from '~/components/MyMain';
import Loading from '~/components/Loading';

export default {
  components: {
    MyHeader,
    MyMain,
    Loading,
  },
};
</script>

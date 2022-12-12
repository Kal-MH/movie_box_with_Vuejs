<template>
  <div class="loading-container" v-show="isLoading">
    <div class="v-spinner">
      <div class="v-pulse v-pulse1"></div>
      <div class="v-pulse v-pulse2"></div>
      <div class="v-pulse v-pulse3"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { storeModules } from '~/utils/constants';

const {
  MOVIE: { NAME: MOVIE },
  MOVIE: {
    STATE: { IS_LOADING },
  },
} = storeModules;

export default {
  computed: {
    ...mapState(MOVIE, [IS_LOADING]),
  },
};
</script>

<style lang="scss" scoped>
.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $font-color2;

  .v-pulse {
    background-color: $border;
    width: 15px;
    height: 15px;
    margin: 2px;
    border-radius: 100%;
    display: inline-block;
    animation-name: v-pulseStretchDelay;
    animation-duration: 0.75s;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.2, 0.68, 0.18, 1.08);
    animation-fill-mode: both;

    &1 {
      animation-delay: 0.12s;
    }

    &2 {
      animation-delay: 0.24s;
    }

    &3 {
      animation-delay: 0.36s;
    }
  }
}

@keyframes v-pulseStretchDelay {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;
    opacity: 1;
  }
  45% {
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
    -webkit-opacity: 0.7;
    opacity: 0.7;
  }
  80% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;
    opacity: 1;
  }
}

@-webkit-keyframes v-pulseStretchDelay {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;
    opacity: 1;
  }
  45% {
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
    -webkit-opacity: 0.7;
    opacity: 0.7;
  }
  80% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;
    opacity: 1;
  }
}
</style>

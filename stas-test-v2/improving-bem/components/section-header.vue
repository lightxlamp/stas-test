<template>
  <div class="section-header" v-if="title">
    <h2 class="section-header__title section-header__title--animation">{{ title }}</h2>

    <div class="section-header__navigation">
        <navigationArrows />
    </div>
  </div>
</template>

<script>
import navigationArrows from "~/components/navigation-arrows";

export default {
    components: {
        navigationArrows
    },
  props: {
    title: {
      type: String,
      default: ''
    },
  }
};
</script>

<style scoped lang="scss">
.section-header {
  display: flex;
  justify-content: space-between;
  padding: 4rem 0;

  &__title {
    color: $color-black;
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 2rem;
    text-transform: uppercase;

    &--animation {
      background: url('../assets/img/text-bg-emo.png') no-repeat;
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      animation: moveBg 90s linear infinite;
      -webkit-animation: moveBg 90s linear infinite;
    }
  }
}

/* Text Background Animation */
@keyframes moveBg {
  0% {
    background-position: 0% 30%;
  }

  100% {
    background-position: 100% 50%;
  }
}
</style>

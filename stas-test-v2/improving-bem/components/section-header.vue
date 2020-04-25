<template>
  <div class="section-header" v-if="title">
    <div class="section-header__title">{{ title }}</div>

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
  }
}
</style>

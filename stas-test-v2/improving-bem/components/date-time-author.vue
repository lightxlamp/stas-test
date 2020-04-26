<template>
  <div class="date-time-author">
    <div class="date-time-author__icon"></div>
    <div class="date-time-author__time">{{time}}
      <span class="date-time-author__author" v-if="author">by {{author}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    time: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.date-time-author {
  align-items: center;
  color: $color-grey-dark-2;
  display: flex;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1.3rem;
  font-style: oblique;
  line-height: 2.3rem; // change to 2.6 later
  padding-top: 0.4rem;
  height: 1.6rem;
  margin-top: 1rem;

  &--happening-now {
    color: $color-grey-dark-1;
  }

  &--story {
    display: none;

    @media only screen and (min-width: $bp-tablet) {
      display: block;
      padding-top: 3rem;
    }
  }

  &__icon {
    background-size: cover;
    height: 1.6rem;
    margin-right: 0.5rem;
    width: 1.6rem;

    // We can't change color of icon when we adding it this way. So just leave this for older browsers
    background-image: url("../assets/img/svg/clock.svg");

    @supports (-webkit-mask-image: url()) or (mask-image: url()) {
      -webkit-mask-image: url("../assets/img/svg/clock.svg");
      -webkit-mask-size: cover;
      background-color: $color-grey-dark-1;
      background-image: none;
      mask-image: url("../assets/img/svg/clock.svg");
      mask-size: cover;
    }
  }

  &__author {
    text-decoration: underline;
  }
}
</style>

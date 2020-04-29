<template>
    <section class="main-story">
      <div class="main-story__title">Amazing places in America to visit</div>
      <div class="main-story__links">
        <div class="main-story-link-1">
          <div class="main-story-link-1__icon"></div>
          <div class="main-story-link-1__text">Travelguide</div>
        </div>
        <div class="main-story-link-2">
          <div class="main-story-link-2__icon"></div>
          <div class="main-story-link-2__text">World news</div>
        </div>
      </div>
      <div class="main-story__bottom-section">
        <appAuthor authorName="by Steven Voorhees" />
        <nextStory />
      </div>
    </section>
</template>

<script>
import appAuthor from "~/components/app-author"
import nextStory from "~/components/next-story"

export default {
    components: {
        appAuthor,
        nextStory
    }
}
</script>

<style lang="scss" scoped>
.main-story {
  // top, transparent black, faked with gradient - instead of filter: brightness
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(../assets/img/parrot.jpg);
  background-size: cover;
  background-position: center;
  padding: 14rem 2.4rem 4rem;
  width: 100%;

  @media only screen and (min-width: $bp-tablet) {
    padding: 11rem 4rem 4rem;
  }

  @media only screen and (min-width: $bp-desktop) {
    padding: 22.4rem 5rem 5rem;
  }

  &__title {
    color: $color-white;
    font-size: 3rem;
    line-height: 4rem;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;

    @media only screen and (min-width: $bp-desktop) {
      font-size: 5rem; 
      line-height: 6rem; 
    }
  }

  &__links {
    color: $color-white;
    display: flex;
    font-size: 1.6rem;
    font-weight: bold;
    justify-content: center;
    line-height: 2rem;
    margin-top: 2rem;
    text-transform: uppercase;

    & > :first-child {
      margin-right: 4rem;
    }
  }

  &__bottom-section {
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
    margin-top: 6rem;

    @media only screen and (min-width: $bp-tablet) {
      margin-top: 11rem;
    }
  }
}

@mixin icon-box-settings {
  background-size: cover;
  height: 1.6rem;
  margin-right: 0.5rem;
  width: 1.6rem;
}

@mixin support-settings {
  -webkit-mask-size: cover; // this allowed us to change height and width from 2 px to 1px and icon still visible
  background-image: none;
  mask-size: cover; // mask allow us to see background. (throught specified shape (mask-image))
}

.main-story-link-1 {
  display: flex;
  &__icon {
    @include icon-box-settings;
    background-image: url("../assets/img/svg/earth.svg");

    @supports (-webkit-mask-image: url()) or (mask-image: url()) {
      -webkit-mask-image: url("../assets/img/svg/earth.svg");
      @include support-settings;
      background-color: $color-white;
      mask-image: url("../assets/img/svg/earth.svg"); 
    }
  }

  &__text {
    margin-top: -2px;
  }
}

.main-story-link-2 {
  display: flex;
  &__icon {
    @include icon-box-settings;
    background-image: url("../assets/img/svg/file-text2.svg");

    @supports (-webkit-mask-image: url()) or (mask-image: url()) {
      -webkit-mask-image: url("../assets/img/svg/file-text2.svg");
      @include support-settings;
      background-color: $color-white;
      mask-image: url("../assets/img/svg/file-text2.svg"); 
    }
  }

  &__text {
    margin-top: -2px;
  }
}
</style>
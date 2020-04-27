<template>
  <!-- can't read property "length" of undefined - reproduced to me, so I've understood Adilet's advice/concern about v-if :P -->
  <div :class="containerClass" v-if="articles && articles.length"> 
    <article class="card" :class="articleClass" v-for="article in articles" :key="article.fileName">
      <img v-if="withImages == true" :src="require(`../assets/img/${article.imgName}.jpg`)" alt="" class="card__backgroundImage" />
      <div class="card__header">
        <div class="card__header--flipper">
          <div class="card__header--front">
            <figure class="card__figure">
              <img v-if="withImages == true" class="card__image" :src="require(`../assets/img/${article.imgName}.jpg`)" :alt="article.imgAlt" />
            </figure>
          </div>
          <div class="card__header--back">
            <p class="card__header--text">{{ article.text }}</p>
          </div>
        </div>
      </div>
      <div class="card__body">
        <div class="card__category">{{ article.category }}</div>
        <h2 class="card__title">{{ article.title }}</h2>
        <h3 class="card__subtitle">{{ article.text }}</h3>
        <p class="card__copy"></p>
        <div class="card__date">
          <dateTimeAuthor :time="article.dateTime" :author="article.author"/>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import dateTimeAuthor from '~/components/date-time-author'

export default {
  components: {
    dateTimeAuthor
  },
  props: {
    articlesType: {
      type: String,
      default: ''
    },
    articles: {
      type: Array,
      default: function () { return [] }
    },
    containerClass: {
      type: String,
      default: ''
    },
    withImages: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    articleClass: function() {
      return (this.articlesType ? 'card--' + this.articlesType : '');
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: #fff;
  width: 32.7rem;
  border-radius: 6px;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  box-shadow: 0 6px 10px -5px rgba(0, 0, 0, 0.2);

  @media only screen and (min-width: $bp-tablet) {
    width: 28.4rem;
  }

  @media only screen and (min-width: $bp-desktop) {
    width: 36rem;
  }

  &__title {
    font-size: 1.6rem;
    line-height: 2rem;
    color: #202124;
    text-align: left;
    font-weight: bold;
  }

  &__subtitle {
    font-size: 1.3rem;
    line-height: 2.3rem;
    color: #a6adb4;
    text-align: left;
    font-weight: normal;
    margin-top: .5rem;
  }

  &__category {
    display: none;
  }

  &__figure {
    height: 100%;
    height: 15.4rem;
  }

  &__image {
    width: 100%;
    height: auto;
  }

  &__backgroundImage {
    display: none;
    max-height: 100%;
    @media only screen and (min-width: $bp-tablet) {
      //max-width: 100%;
      height: 100%;
    }
    @media only screen and (min-width: $bp-desktop) {
      max-width: 120%; // странный трюк
    }
  }

  &__header {
    height: 15.4rem;
    overflow: hidden;
     @media only screen and (min-width: $bp-tablet) {
      height: 18rem;
    }
    &--back {
      display: none;
    }
  }

  &__body {
    padding: 3.2rem 2.4rem;
    @media only screen and (min-width: $bp-tablet) {
      //padding: 4rem;
      padding: 3.5rem;
    }
  }

  &__date {
    color: #a6adb4;
  }
}

.card--primary {
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 20px -15px rgba(0, 0, 0, 0.3);
  }
}

.card--textOnly {
  box-shadow: none;
  width: 32.7rem; // mobile
  @media only screen and (min-width: $bp-tablet) {
    width: 28.4rem; 
  }

  @media only screen and (min-width: $bp-desktop) {
    width: 42rem; 
  }

  .card {
    &__header {
      display: none;
    }

    &__body {
      padding: 0;
    }

    &__category {
      display: inline-block;
      text-transform: uppercase;
      color: $color-primary;
      font-size: 1.6rem;
      line-height: 2rem;
      text-align: left;
      font-weight: bold;
      margin-bottom: 1rem;
    }
  }
}

.card--withoutText {
  background-color: $color-secondary;
  box-shadow: none;
  margin-top: 0;
  margin-bottom: 0;
  //border: 1px solid red;

  .card {
    &__subtitle {
      display: none;
    }

    &__copy {
      display: none;
    }

    &__figure {
      height: 100%;
      cursor: pointer;
    }

    &__image {
      border-radius: $border-radius;
    }

    &__header {
      //border-radius: $border-radius;
      //height: 18rem;
      //overflow: hidden;
      cursor: pointer;
      perspective: 1000;
      -webkit-perspective: 1000;
      padding: 2rem 0;

      &--flipper {
        position: relative;
        transition: 0.8s ease-in-out;
        transition: 1s ease-in-out;
        width: 100%;
        //height: 100%;
        transform-style: preserve-3d;
        height: 15.4rem;

        @media only screen and (min-width: $bp-tablet) {
          height: 18rem;
        }
      }

      &--flipper:hover {
        transform: rotateY(180deg);
      }

      &--back, 
      &--front {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%; 
        -webkit-perspective: 1000;
        perspective: 1000;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }

      &--back {
        transform: rotateY(180deg);
        background: $color-primary;
        color: $color-white;
        display: inline-block;
        text-align: center;
        border-radius: $border-radius;
      }
      &--text {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: 50px;
        margin: auto;
        padding: 0 3rem;
        font-size: 1.3rem;
      }
    }

    &__title {
      line-height: normal;
    }

    &__body {
      //height: 6.2rem;
      padding: 2rem 0;
      background-color: $color-secondary;
    }
  }
}

.card--fullImage {
  height: 30rem;
  position: relative;

  @media only screen and (min-width: $bp-tablet) {
    height: 43rem;
    width: 60.8rem;
  }

  @media only screen and (min-width: $bp-desktop) {
    width: 76rem;
  }

  .card {
    &__image {
      display: none;
    }

    &__backgroundImage {
      display: inline-block;
    }

    &__category {
      color: #fff;
      display: inline-block;
      font-size: 1.6rem;
      font-weight: bold;
      line-height: 2rem;
      margin-bottom: 3rem;
      text-transform: uppercase;
      @media only screen and (min-width: $bp-tablet) {
        margin-bottom: 20rem;
      }
    }

    &__title {
      color: #fff;
      font-size: 2.4rem;
      line-height: 3.4rem;
    }

    &__subtitle {
      color: #fff;
      font-size: 1.6rem;
      line-height: 2.6rem;
    }

    &__header {
      height: 43rem;
    }

    &__body {
      position: absolute;
    }

    &__date {
      color: #cbd0d3;
    }
  }
}

</style>

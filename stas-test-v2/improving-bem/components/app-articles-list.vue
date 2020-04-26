<template>
  <!-- can't read property "length" of undefined - reproduced to me, so I've understood Adilet's advice/concern about v-if :P -->
  <div :class="containerClass" v-if="articles && articles.length"> 
    <article class="card" :class="articleClass" v-for="article in articles" :key="article.fileName">
      <img :src="require(`../assets/img/${article.imgName}.jpg`)" alt="" class="card__backgroundImage" />
      <div class="card__header">
        <figure class="card__figure">
          <img class="card__image" :src="require(`../assets/img/${article.imgName}.jpg`)" :alt="article.imgAlt" />
        </figure>
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
  }

  &__body {
    padding: 3.2rem 2.4rem;
    height: 15.4rem;
    @media only screen and (min-width: $bp-tablet) {
      height: 18rem;
    }
  }

  &__date {
    color: #a6adb4;
  }
}

.card--withoutText {
  box-shadow: none;
  .card {
    &__category {
      display: none;
    }

    &__subtitle {
      display: none;
    }

    &__copy {
      display: none;
    }

    &__figure {
      height: 100%;
      border-radius: $border-radius;
      overflow: hidden;
    }

    &__header {
      height: 18rem;
    }

    &__title {
      line-height: normal;
    }

    &__body {
      height: 6.2rem;
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
      text-transform: uppercase;
      font-weight: bold;
      line-height: 2rem;
      font-size: 1.6rem;
      margin-bottom: 3rem;
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
      top: 1rem;
      top: 0px;
      height: 100%;
    }

    &__date {
      color: #cbd0d3;
    }
  }
}
</style>

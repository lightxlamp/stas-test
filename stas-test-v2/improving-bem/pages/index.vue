<template>
  <div class="container">

    <section class="trending">
      <sectionHeader title="Trending"/> 
      <appArticlesList 
          :articles="trending_articles" 
          containerClass="trending__content" 
      />
    </section>

    <section class="happening-now">
      <sectionHeader title="Happening Now"/> 
      <div class="happening-now__content-wrapper">
        <appArticlesList 
          :articles="happening_now_articles_column_1" 
          containerClass="happening-now__column-1" 
          articlesType="fullImage"
        />

        <appArticlesList 
          :articles="happening_now_articles_column_2" 
          containerClass="happening-now__column-2" 
        />
      </div>
    </section>


    <!-- <div class="happening-now__content-wrapper">
      <ArticlesList
        :articles="happening_now_articles_column_1"
        modifier="happening-now"
        withImage="true"
        containerClass="happening-now__column-1"
      />

      <ArticlesList
        :articles="happening_now_articles_column_2"
        modifier="happening-now-2"
        withImage="true"
        containerClass="happening-now__column-2"
        haveAuthor="true"
      />
    </div> -->

    <article class="card card--fullImage">
      <picture class="card__backgroundImage">
        <source :srcset="imgSourceset" media="(min-width: 768px)" />
        <!-- Define an <img> element for browsers that do not support the <picture> element. -->
        <!-- Lie from W3? :p -->
        <img :src="imgSourcesetSmall" />
      </picture>

      <div class="card__header">
        <figure class="card__figure">
          <img src="../assets/img/bridge.jpg" alt class="card__image" />
        </figure>
      </div>
      <div class="card__body">
        <div class="card__category">City</div>
        <h2 class="card__title">Large article title mobile layout</h2>
        <h3 class="card__subtitle">
          Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto,
          vidit vituperatoribus duo id. Affert detraxit
        </h3>
        <p class="card__copy"></p>
        <div class="card__date">
          <div class="date-time-author">1h ago</div>
        </div>
      </div>
    </article>

    <article class="card card--withoutText">
      <picture class="card__backgroundImage">
        <!-- <source srcset="" media="(min-width: 768px)" /> -->
        <img src />
      </picture>

      <div class="card__header">
        <figure class="card__figure">
          <img src="../assets/img/elephant.jpg" alt class="card__image" />
        </figure>
      </div>
      <div class="card__body">
        <div class="card__category">City</div>
        <h2 class="card__title">Small title</h2>
        <h3 class="card__subtitle">
          Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto,
          vidit vituperatoribus duo id. Affert detraxit
        </h3>
        <p class="card__copy"></p>
        <div class="card__date">
          <dateTimeAuthor time="1h ago" author="Worldnews"/>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import appArticlesList from '~/components/app-articles-list'
import dateTimeAuthor from '~/components/date-time-author'
import sectionHeader from "~/components/section-header"

export default {
  components: {
    appArticlesList,
    dateTimeAuthor ,
    sectionHeader
  },
  computed: {
    // https://blog.lichter.io/posts/dynamic-images-vue-nuxt/
    imgSourceset() {
      return `${require(`@/assets/img/bridge.jpg`)}`
    },
    imgSourcesetSmall() {
      return `${require(`@/assets/img/bridge_300.jpg`)}`
    },
    happening_now_articles_column_1() {
      return this.$store.state.happening_now_articles_column_1;
    },
    happening_now_articles_column_2() {
      return this.$store.state.happening_now_articles_column_2;
    },
    more_news_articles() {
      return this.$store.state.more_news_articles;
    },
    trending_articles() {
      return this.$store.state.trending_articles;
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/mixins.scss';

.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $color-secondary;
  max-width: 182rem;
  min-height: 100vh;
  resize: horizontal;
  overflow: auto;
}

.trending {
  //@include section-padding;
  @media only screen and (min-width: $bp-tablet) {
    width: 60.8rem;
  }

  @media only screen and (min-width: $bp-desktop) {
    width: 116rem;
  }

  &__content {
    & > article:last-child {
      display: none; // To hide the third card on a lower resolutions

      @media only screen and (min-width: $bp-desktop) {
        display: inline-flex;
      }
    }

    @media only screen and (min-width: $bp-tablet) {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      flex-wrap: wrap;

      & > article:not(:first-child)  {
        margin-left: 4rem;
      }
    }
  }
}

.happening-now {
  //@include section-padding;

  @media only screen and (min-width: $bp-tablet) {
    width: 60.8rem;
  }

  @media only screen and (min-width: $bp-desktop) {
    width: 116rem;
    flex-direction: column;
  }

  &__content-wrapper {
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: $bp-desktop) {
      flex-direction: row;
    }
  }

  &__column-2 {
    display: flex;
    flex-direction: column;

    & > div:last-child {
      display: none; // To hide a third card on a lower resolutions

      @media only screen and (min-width: $bp-desktop) {
        display: block;
      }
    }

    @media only screen and (min-width: $bp-tablet) {
      flex-direction: row;

      & > div:not(:first-child) {
        // nicuuu :P Первый раз осознанно применил, not
        margin-left: 4rem;
      }
    }

    @media only screen and (min-width: $bp-desktop) {
      flex-direction: column;
      flex-basis: 0;
      flex-grow: 1;

      & > div {
        margin-left: 4rem;
      }
    }
  }

  &__column-1 {
    @media only screen and (min-width: $bp-desktop) {
      flex-basis: 0;
      flex-grow: 2;
    }
  }
}

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
    height: 100%;
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
    &__backgroundImage {
      display: none;
    }

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
  position: relative;
  height: 30rem;

  .card {
    @media only screen and (min-width: $bp-tablet) {
      width: 6.08rem;
    }
    &__image {
      display: none;
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

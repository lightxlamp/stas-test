<template>
  <!-- can't read property "length" of undefined - reproduced to me, so I've understood Adilet's advice/concern about v-if :P -->
  <div :class="containerClass" v-if="articles && articles.length"> 
    <article class="card" :class="articleClass" v-for="article in articles" :key="article.fileName">
      <img src="" alt="" class="card__backimage" />
      <div class="card__header">
        <figure class="card__figure">
          <!-- <img src="../assets/img/green_lake.jpg" class="card__image" /> -->
          <!-- <img :src="require(`../assets/img/${article.imgName}.jpg`)" :alt="article.imgAlt" :class="articleImage" /> -->
          <img :src="require(`../assets/img/${article.imgName}.jpg`)" :alt="article.imgAlt" />
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

</style>

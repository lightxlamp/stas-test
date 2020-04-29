<template>
  <div class="container-world-news-page">
    <div class="container-world-news-page-top">
      <appBreadcrumbs />

      <searchNewsH />

      <section class="three-columns-section">
        <div class="three-columns-section__col-1">
          <div class="author author--story">
            <img
              src="../assets/img/boy.jpg"
              alt="Jonathan Walker"
              class="author__photo author__photo--story"
            />
          </div>

          <h2>Phasellus eu nulla malesuada, luctus diam.</h2>
        </div>
        <div class="three-columns-section__col-2">
          Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit,
          condimentum mauris convallis cras iaculis at tempus dignissim arcu,
          sollicitudin posuere porta non tellus dictumst penatibus. Commodo ante
          quis senectus quisque semper dapibus porttitor libero lacus hendrerit
          volutpat, in cras a himenaeos leo ridiculus taciti ultrices cursus
          mattis. Tempor mi fames senectus taciti
        </div>
        <div class="three-columns-section__col-3">
          himenaeos leo ridiculus taciti ultrices cursus mattis. Tempor mi fames
          senectus taciti condimentum lacinia ante, non netus rhoncus eget
          habitant sollicitudin, cubilia luctus consequat pharetra natoque
          porta. Sodales tristique habitasse massa ultrices ligula semper
          interdum dictumst.
          <div class="date-time-author">
            <div class="date-time-author__icon"></div>
            <div class="date-time-author__time">2m ago</div>
          </div>
        </div>
      </section>

      <section class="image-and-two-text-block-section">
        <div class="image-and-two-text-block-section__col-1"></div>
        <div class="image-and-two-text-block-section__col-2">
          Lorem ipsum dolor sit amet, consectetur opikhfkseo adipisifwcing elit,
          sed do eiusmod temporeop iodkjnl incididunt ut labore et dolore roipi
          magnaropi aliquia. Ut enim ad minim veeniam, quiswepo nostruklad uio
          exercitation ullamco laboris nisi ut aliquip ex eawiopl commodo
          consequat. Duis ropil aute irure dolor inop reprehenderit in
          tufpoyiopy voluptate velit esse plijxn cillum dolore eu fugiatupi
          nulla parieratur. Excepteuri sint. <br /><br />
          Culpa qui officia deserunt mollit anim id estio ropiluyl laborum. Sed
          ut perspiciatis unde omnis iste natuswi error sit voluptartem
          accusantium polu doloremquep laudantium, totam rem aperiam, eaque
          ipsa.
        </div>
        <div class="image-and-two-text-block-section__col-3">
          In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla
          faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus.
        </div>
      </section>

      <appPagination />
    </div>

    <Footer />
  </div>
</template>

<script>
import appPagination from '~/components/app-pagination'
import appBreadcrumbs from '~/components/app-breadcrumbs'
import dateTimeAuthor from '~/components/date-time-author'
import mainArticle from "~/components/main-article"
import sectionHeader from "~/components/section-header"
import searchNewsH from "~/components/search-news-h"

export default {
  components: {
    appBreadcrumbs,
    appPagination,
    dateTimeAuthor,
    mainArticle,
    searchNewsH,
    sectionHeader
  },

  computed: {
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
  },

  head: {
    title: "My first mobile-first web site :P"
  }
};
</script>

<style lang="scss" scoped>
.container-world-news-page {
  background-color: $color-secondary;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 182rem;
  min-height: 100vh;
}

.container-world-news-page-top {
  @media only screen and (min-width: $bp-tablet) {
    padding: 0 8rem 3rem 8rem;
  }
  display: flex;
  flex-direction: column;
}
</style>
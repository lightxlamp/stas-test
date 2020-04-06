<template>
  <div class="container">

    <SideBar />

    <Header />

    <section class="main-article-and-news">
      <MainArticle />

      <div class="news">
        <SectionTitleAndNavigation title="More news" />

        <div class="divide-line"></div>

        <ArticlesList :articles="more_news_articles"
                    modifier="" 
                    withImage=false
                    containerClass="news__content"/>
      </div>
    </section>

    <body class="middle-content">
      
      <section class="trending">
        <SectionTitleAndNavigation title="Trending" />
        <ArticlesList :articles="trending_articles"
                      modifier="trending" 
                      withImage=true
                      containerClass="trending__content"/>
      </section>

      <section class="happening-now">
        <SectionTitleAndNavigation title="Happening Now" />

        <div class="happening-now__content-wrapper">
          <ArticlesList :articles="happening_now_articles_column_1"
                        modifier="trending" 
                        withImage=true
                        containerClass="happening-now__column-1"/>

          <ArticlesList :articles="happening_now_articles_column_2"
                        modifier="trending" 
                        withImage=true
                        containerClass="happening-now__column-2"/>
        </div>
      </section>
    </body>

    <Footer />

  </div>
</template>


<script>

  import Article from "~/components/Article";
  import ArticlesList from "~/components/ArticlesList";
  import Header from "~/components/Header";
  import Footer from "~/components/Footer";
  import MainArticle from "~/components/MainArticle";
  import SectionTitleAndNavigation from "~/components/SectionTitleAndNavigation";
  import SideBar from "~/components/SideBar";
  import SocialNetworks from "~/components/SocialNetworks";

  import { mapMutations } from 'vuex' 

  export default {
    components: {
      Article,
      ArticlesList,
      Footer,
      Header,
      MainArticle,
      SectionTitleAndNavigation,
      SideBar,
      SocialNetworks
    },

    computed: {
        happening_now_articles_column_1 () {
          return this.$store.state.happening_now_articles_column_1;
        },
        happening_now_articles_column_2() {
          return this.$store.state.happening_now_articles_column_2;
        },
        more_news_articles () {
          return this.$store.state.more_news_articles;
        },
        trending_articles () {
          return this.$store.state.trending_articles;
        }
    },

    head: {
      title: 'My first mobile-first web site :P'
    },
  };

</script>
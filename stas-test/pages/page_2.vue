<template>
  <div class="container">

    <SideBar />

    <Header />

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
            <div class="author">
                <div class="author__photo"></div>
                <div class="author__name">by Steven Voorhees</div>
            </div>
            <div class="next-story">
                <div class="next-story__top">
                    <div class="next-story__next">Next Story</div>
                    <div class="next-story__icon"></div>
                </div>
              
                <div class="next-story__bottom">
                    <div class="next-story__title"></div>
                    <div class="next-story__text"></div>
                </div>
            </div>
        </div>
    </section>

    <body class="middle-content">
      
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
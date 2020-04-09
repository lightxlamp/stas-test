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
        <div class="next-story__left">
          <div class="next-story__next">Next Story</div>
          <div class="next-story__title">Morbi eleifend a libero</div>
          <div
            class="next-story__text"
          >Quisque viverra interdum velit, et cursus magna sagittis in. In dui dui.</div>
        </div>

        <div class="next-story__right">
          <div class="next-story__icon"></div>
        </div>
      </div>
    </div>
  </section>

  <section class="stories-block">
    <section class="text-only-stories">
      <div class="text-only-story">
        <div class="text-only-story__col-1-of-2">
          <div class="text-only-story__title">Quisque viverra interdum velit?</div>
          <div class="text-only-story__text">
            Culpa qui officia deserunt mollit anim id esto polujimi laborum. Sed ut perspiciatis unde omnis iste
            eropluk onatuspop error sit voluptartem accusantium wetrop doloremque laudantium, totam rem aperiam,
            eaquep ipsa quaeer ab illo inventore veritatisy et quasi weth ropeior architecto beatae vitae dicta sunt
            explicapbo. Nemo popul eniem ipsam yui voluptatem quialoperyi voluptas sit aspernatur aute odit aut fugit,
            sed quiawi consequuntur joki erty magni dolores eosep quiklopii ratione wertyuil voluptatem sequi nesciunt.
            Nequeop porro polu quisquam est, quepi dolorem ipsum quiat lopi dolor srit amet, consectetur adipisci
            velit, topitop seid quia non numquam eiuris modij tempora poluko incidunt ut labore et dolore magnam
            aliquam mokeru quaerat iope voluptatem. Lorem ipsum dolor sit amet, consectetur holukoro on adipisifwcing
          </div>
        </div>

        <div class="text-only-story__col-2-of-2">
          <div class="text-only-story__text">
            elit, sed do eiusmod tempor incididunte utopi labore et dolore roipi magna aliqua. Ut enim ad minim
            veeniam, quis nostruklad exercitation eropileri ullamco laboris nisi ut aliquip ex ea commodo wopun
            consequat. Duis aute irure dolor in reprehenderit inie tufpoy voluptate velit esse cillum dolore eu
            fugiat holi nulla parieratur. Excepteur sint occaecat ropukuli uki cupidatat.
          </div>
        </div>

        <div class="divide-line"></div> 
      </div>
    </section>

    <section class="stories">
      <div class="story">
        <div class="author author--story">
          <div class="author__photo author__photo--story"></div>
          <div class="author__name author__name--story">Jonathan Walker</div>
        </div>

        <div
          class="story__text"
        >In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. 
        Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est rhoncus massa</div>

        <div class="date-time">
          <div class="date-time__icon"></div>
          <div class="date-time__time">2m ago</div>
        </div>
      </div>

      <div class="story">
        <div class="author author--story">
          <div class="author__photo author__photo--story"></div>
          <div class="author__name author__name--story">Brenda Mercer</div>
        </div>

        <div
          class="story__text"
        >In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. 
        Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet.</div>

        <div class="date-time">
          <div class="date-time__icon"></div>
          <div class="date-time__time">2m ago</div>
        </div>
      </div>

      <div class="video-story">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/oSmUI3m2kLk"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  </section>

  <Footer />
</div>
</template>


<script>
import ArticlesList from "~/components/ArticlesList";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import MainArticle from "~/components/MainArticle";
import SectionTitleAndNavigation from "~/components/SectionTitleAndNavigation";
import SideBar from "~/components/SideBar";
import SocialNetworks from "~/components/SocialNetworks";

import { mapMutations } from "vuex";

export default {
  components: {
    ArticlesList,
    Footer,
    Header,
    MainArticle,
    SectionTitleAndNavigation,
    SideBar,
    SocialNetworks
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
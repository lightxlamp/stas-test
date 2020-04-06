<template>
<div class="container" id="container">
  <div class="side-bar" v-show="isSideBarVisible">
    <div class="side-bar__body">
      <div class="logo logo--red">Logo</div>

      <nav class="side-nav">
        <div class="side-nav__item">
          <div class="side-nav__home"></div>
          <a href="#" class="nav__link nav__link--active side-nav__link">Home</a>
        </div>

        <div class="side-nav__item">
          <div class="side-nav__discovery"></div>
          <a href="#" class="nav__link side-nav__link">Discovery</a>
        </div>

        <div class="side-nav__item">
          <div class="side-nav__photos"></div>
          <a href="#" class="nav__link side-nav__link">Photos</a>
        </div>

        <div class="side-nav__item">
          <div class="side-nav__contact"></div>
          <a href="#" class="nav__link side-nav__link">Contact</a>
        </div>

        <div class="side-nav__item">
          <div class="side-nav__user logged-in-user">
            <img src="../assets/img/blonde_girl.jpg" alt="User photo" class="logged-in-user__photo" />
          </div>
          <a href="#" class="nav__link side-nav__link">Profile</a>
        </div>

        <!-- <div class="side-nav__icon-box">
                      <svg class="side-nav__icon">
                          <use xlink:href="img/sprite.svg#icon-home"></use>
                      </svg>
        </div>-->
      </nav>
    </div>

    <div class="side-bar__footer">
      <div class="side-bar__footer-links">
        <ul class="nav nav--side-bar">
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--side-bar">About</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--side-bar">Help</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--side-bar">Terms</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--side-bar nmb">Guidlines</a>
          </li>
        </ul>

        <ul class="nav nav--side-bar">
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--side-bar">Testimonials</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--side-bar">Advertise</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--side-bar">Integrations</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--side-bar nmb">Careers</a>
          </li>
        </ul>
      </div>
      <div class="side-bar__footer-social">
        <SocialNetworks />
      </div>
    </div>
  </div>

  <Header />

  <section class="main-article-and-news">
    <div class="main-article">
      <div class="main-article__category" v-on:click="isSideBarVisible = !isSideBarVisible">World News</div>
      <div class="main-article__title">Amazing places in America to visit.</div>
      <div class="main-article__text">
        For some reason — this country, this city, this neighborhood, this
        particular street — is the place you are living a majority of your life in.
      </div>
      <button class="btn main-article__btn">Learn more</button>
    </div>

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

  <footer class="footer">
    <div class="footer__column-1">
      <div class="logo logo--white">Logo</div>
      <div class="footer__nav">
        <ul class="nav nav--footer">
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--footer">Home</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--footer">Discovery</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--footer">Photos</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--footer">Contact</a>
          </li>
        </ul>

        <ul class="nav nav--footer">
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--footer">About</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--footer">Help</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--footer">Terms</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--footer">Guidlines</a>
          </li>
        </ul>

        <ul class="nav nav--footer">
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--footer">Testimonials</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--footer">Advertise</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--footer">Integrations</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--footer">Careers</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer__column-2">
      <div class="email-box">
        <div class="form-group">
          <input class="form-field" type="email" placeholder="Email" />
          <!-- <div class="email-box__icon"></div> -->
          <!-- <span>ICON</span> -->
          <!-- <span class="email-box__icon"></span> -->
        </div>
        <p class="email-box__text">Stay in touch with us for the freshest products!</p>
      </div>

      <SocialNetworks />
    </div>
  </footer>
</div>
</template>


<script>
import Header from "~/components/Header";
import SectionTitleAndNavigation from "~/components/SectionTitleAndNavigation";
import Article from "~/components/Article";
import ArticlesList from "~/components/ArticlesList";
import SocialNetworks from "~/components/SocialNetworks";

import { mapMutations } from 'vuex' 

export default {
  components: {
    Header,
    SectionTitleAndNavigation,
    Article,
    ArticlesList,
    SocialNetworks
  },
  head: {
    title: 'My first mobile-first web site :P'
  },

  computed: {
      trending_articles () {
        return this.$store.state.trending_articles;
      },
      happening_now_articles_column_1 () {
        return this.$store.state.happening_now_articles_column_1;
      },
      happening_now_articles_column_2() {
        return this.$store.state.happening_now_articles_column_2;
      },
      more_news_articles () {
        return this.$store.state.more_news_articles;
      }
  },

  data: () => ({
    isSideBarVisible: false
  }),
};

</script>
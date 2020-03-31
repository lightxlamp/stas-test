<template>
  <div class="container">
      <!-- <header /> Потом можно будет вынести в компоненты все-->
      <header class="header">
        <div class="nav">
            <button class="nav-btn"></button>
              <!-- <ul class="nav">
                <li class="nav__item"><a href="#" class="nav__link">Home</a></li>
                <li class="nav__item"><a href="#" class="nav__link">Discovery</a></li>
                <li class="nav__item"><a href="#" class="nav__link">Photos</a></li>
                <li class="nav__item"><a href="#" class="nav__link">Contact</a></li>
              </ul> -->
        </div>

        <div class="header__logo">Logo</div>
    
        <div class="logged-in-user"> 
          <img src="../assets/img/blonde_girl.jpg" alt="User photo" class="logged-in-user__photo">
        </div>

      </header>

      <section class="main-article">
        <div class="main-article__category">World News</div>
        <div class="main-article__title">Amazing places in America to visit.</div>
        <div class="main-article__text">For some reason — this country, this city, this neighborhood, this
          particular street —  is the place you are living a majority of your life in.</div>
        <button class="btn main-article__btn">Learn more</button>
      </section>

      <section class="more-news">
        <div class="more-news__header">
          <div class="more-news__title">More news</div>
          <div class="more-news__navigation">
            <div class="items-navigation">
              <div class="items-navigation__left-arrow"></div>
              <div class="items-navigation__right-arrow"></div>
            </div>
          </div>
        </div>

        <div class="divide-line"></div>

        <div class="more-news-article">
          <div class="more-news-article__category">Travel</div>
          <div class="more-news-article__title">Article Title</div>
          <div class="more-news-article__text">It's that time of the day again. Blog time . Time to catch up on 
            another 24 hours of similar news. </div>
          <div class="date-time">
            <div class="date-time__icon"></div>
            <div class="date-time__time">2m ago</div>
          </div>
        </div> 
        
        <div class="more-news-article">
          <div class="more-news-article__category">Technology</div>
          <div class="more-news-article__title">Article Title</div>
          <div class="more-news-article__text">In the same place , sitting in the same chair perhaps we think we 
            ought to sleep in Gabby tonight. I have lost a sock in the washing.</div>
          <div class="date-time">
            <div class="date-time__icon"></div> <!-- It is always empty.. Do we need it? :P ::before? -->
            <div class="date-time__time">1h ago</div>
          </div>
        </div>
      </section>

      <section class="trending">
        
      </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
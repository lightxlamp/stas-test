<template>
  <div class="container">
    <!-- <header /> Потом можно будет вынести в компоненты все-->
    <header class="header">
      <div class="button-or-menu">
        <button class="nav-btn"></button>
        <ul class="nav">
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--active">Home</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">Discovery</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">Photos</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">Contact</a>
          </li>
        </ul>
      </div>

      <div class="header__logo">Logo</div>

      <div class="logged-in-user">
        <img src="../assets/img/blonde_girl.jpg" alt="User photo" class="logged-in-user__photo" />
      </div>
    </header>

    <section class="main-article">
      <div class="main-article__category">World News</div>
      <div class="main-article__title">Amazing places in America to visit.</div>
      <div class="main-article__text">
        For some reason — this country, this city, this neighborhood, this
        particular street — is the place you are living a majority of your life in.
      </div>
      <button class="btn main-article__btn">Learn more</button>
    </section>

    <section class="news">
      <div class="block-head">
        <div class="block-head__title">More news</div>
        <div class="block-head__navigation">
          <div class="items-navigation">
            <div class="items-navigation__left-arrow"></div>
            <div class="items-navigation__right-arrow"></div>
          </div>
        </div>
      </div>

      <div class="divide-line"></div>

      <div class="news__content">
        <div class="article">
          <div class="article__category">Travel</div>
          <div class="article__title">Article Title</div>
          <div class="article__text">
            It's that time of the day again. Blog time. Time to catch up on
            another 24 hours of similar news.
          </div>
          <div class="date-time">
            <div class="date-time__icon"></div>
            <div class="date-time__time">2m ago</div>
          </div>
        </div>

        <div class="article">
          <div class="article__category">Technology</div>
          <div class="article__title">Article Title</div>
          <div class="article__text">
            In the same place, sitting in the same chair perhaps we think we
            ought to sleep in Gabby tonight. I have lost a sock in the washing.
          </div>
          <div class="date-time">
            <div class="date-time__icon"></div>
            <!-- It is always empty.. Do we need it? :P ::before? -->
            <div class="date-time__time">1h ago</div>
          </div>
        </div>
      </div>
    </section>

    <section class="trending">
      <div class="block-head">
        <div class="block-head__title">Trending</div>
        <div class="block-head__navigation">
          <div class="items-navigation">
            <div class="items-navigation__left-arrow"></div>
            <div class="items-navigation__right-arrow"></div>
          </div>
        </div>
      </div>

      <div class="trending__content">
        <div class="article article--trending">
          <div class="article__image">
            <img
              src="../assets/img/green_lake.jpg"
              alt="Green lake"
              class="article__image article__image--trending"
            />
          </div>
          <div class="article__wrap--trending">
            <div class="article__category article__category--trending">Travel</div>
            <div class="article__title article__title--trending">Dolore magna aliqua</div>
            <div
              class="article__text article__text--trending"
            >Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.</div>
            <div class="date-time">
              <div class="date-time__icon"></div>
              <div class="date-time__time">1h ago</div>
            </div>
          </div>
        </div>

        <div class="article article--trending">
          <div class="article__image">
            <img
              src="../assets/img/umbrellas_small.jpg"
              alt="Umbrellas"
              class="article__image article__image--trending"
            />
          </div>
          <div class="article__wrap--trending">
            <div class="article__category article__category--trending">Travel</div>
            <div class="article__title article__title--trending">Dolore magna aliqua</div>
            <div
              class="article__text article__text--trending"
            >Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.</div>
            <div class="date-time">
              <div class="date-time__icon"></div>
              <div class="date-time__time">1h ago</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="happening-now">
      <div class="block-head">
        <div class="block-head__title">Happening Now</div>
        <div class="block-head__navigation">
          <div class="items-navigation">
            <div class="items-navigation__left-arrow"></div>
            <div class="items-navigation__right-arrow"></div>
          </div>
        </div>
      </div>

      <div class="happening-now__column-1">

        <div class="article article--happening-now">
          <div class="article__image">
            <img
              src="../assets/img/bridge.jpg"
              alt="golden gate bridge"
              class="article__image article__image--happening-now"
            />
          </div>
          <div class="article__wrap article__wrap--happening-now">
            <div class="article__category article__category--happening-now">City</div>
            <div class="article__info article__info--happening-now">
              <div class="article__title article__title--happening-now">Golden Gate Bridge Facts</div>
              <div
                class="article__text article__text--happening-now"
              >When the Golden Gate Bridge Flattened by 7 Feet—and Other Facts About the San Francisco Icon. The 1.7-mile-long bridge has endured earthquakes</div>
              <div class="date-time date-time--happening-now">
                <div class="date-time__icon"></div>
                <div class="date-time__time">2m ago</div>
              </div>
            </div>
          </div>
        </div>

        <div class="article article--happening-now">
          <div class="article__image">
            <img
              src="../assets/img/forest.jpg"
              alt="Bridge"
              class="article__image article__image--happening-now"
            />
          </div>
          <div class="article__wrap article__wrap--happening-now">
            <div class="article__category article__category--happening-now">Travel</div>
            <div class="article__info article__info--happening-now">
              <div class="article__title article__title--happening-now">We need to safeguard our forests</div>
              <div
                class="article__text article__text--happening-now"
              >The importance of forests cannot be underestimated. We depend on forests for our survival, from the air we breathe to the wood we use. 
              </div>
              <div class="date-time date-time--happening-now">
                <div class="date-time__icon"></div>
                <div class="date-time__time">2m ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="happening-now__column-2">
        <div class="article article--trending">
          <div class="article__image">
            <img
              src="../assets/img/elephant.jpg"
              alt="Green lake"
              class="article__image article__image--trending"
            />
          </div>
          <div class="article__wrap--trending">
            <div class="article__category article__category--trending">Travel</div>
            <div class="article__title article__title--trending">Desert Elephants</div>
            <div
              class="article__text article__text--trending"
            >Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.</div>
            <div class="date-time">
              <div class="date-time__icon"></div>
              <div class="date-time__time">1h ago</div>
            </div>
          </div>
        </div>

        <div class="article article--trending">
          <div class="article__image">
            <img
              src="../assets/img/parrot_small.jpg"
              alt="Green lake"
              class="article__image article__image--trending"
            />
          </div>
          <div class="article__wrap--trending">
            <div class="article__category article__category--trending">Travel</div>
            <div class="article__title article__title--trending">Jungle Parrots</div>
            <div
              class="article__text article__text--trending"
            >Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.</div>
            <div class="date-time">
              <div class="date-time__icon"></div>
              <div class="date-time__time">1h ago</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>
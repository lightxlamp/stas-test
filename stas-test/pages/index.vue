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

      <div class="logo logo--header">Logo</div>

      <div class="logged-in-user">
        <img src="../assets/img/blonde_girl.jpg" alt="User photo" class="logged-in-user__photo" />
      </div>
    </header>

    <section class="main-article-and-news">
      <div class="main-article">
        <div class="main-article__category">World News</div>
        <div class="main-article__title">Amazing places in America to visit.</div>
        <div class="main-article__text">
          For some reason — this country, this city, this neighborhood, this
          particular street — is the place you are living a majority of your life in.
        </div>
        <button class="btn main-article__btn">Learn more</button>
     </div>

      <div class="news">
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
      </div>
    </section>

    <body class="middle-content">
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
                <div class="article__title article__title--trending">Mountain Lake Hotel</div>
                <div
                  class="article__text article__text--trending"
                >LMountain Lake Hotel was the site for much of the on-location filming of the 1987</div>
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
                <div class="article__title article__title--trending">The Best Beach Umbrellas</div>
                <div
                  class="article__text article__text--trending"
                >One of the worst things about going to the beach is the imminent sunburn.</div>
                <div class="date-time">
                  <div class="date-time__icon"></div>
                  <div class="date-time__time">1h ago</div>
                </div>
              </div>
            </div>   
            
            <div class="article article--trending">
              <div class="article__image">
                <img
                  src="../assets/img/medics.jpg"
                  alt="Umbrellas"
                  class="article__image article__image--trending"
                />
              </div>
              <div class="article__wrap--trending">
                <div class="article__category article__category--trending">Travel</div>
                <div class="article__title article__title--trending">American Red Cross Desert</div>
                <div
                  class="article__text article__text--trending"
                >The American Red Cross Desert to the Sea Region serves Orange</div>
                <div class="date-time">
                  <div class="date-time__icon"></div>
                  <div class="date-time__time">1h ago</div>
                </div>
              </div>
            </div>

          </div> <!-- end of trending content -->
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

          <div class="happening-now__content-wrapper">
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
                    >When the Golden Gate Bridge Flattened by 7 Feet—and Other Facts About the San Francisco Icon.</div>
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
                    alt="Elephants"
                    class="article__image article__image--trending"
                  />
                </div>
                <div class="article__wrap--trending">
                  <div class="article__category article__category--trending">Travel</div>
                  <div class="article__title article__title--trending">Desert Elephants</div>
                  <div
                    class="article__text article__text--trending"
                  >Desert-adapted elephants are not a distinct species of elephant but are African bush elephants</div>
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
                  >So where is the circling jungle parrot? Well, it turns out the bird is flying in a small circle east of the Sky Platform</div>
                  <div class="date-time">
                    <div class="date-time__icon"></div>
                    <div class="date-time__time">1h ago</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
     
        </section>
    </body>

    <footer class="footer">
      <div class="footer__column-1">
        <div class="logo logo--footer">Logo</div>
          <div class="footer__nav">
            <ul class="nav nav--footer">
              <li class="nav__item"><a href="#" class="nav__link nav__link--footer">Home</a></li>
              <li class="nav__item"><a href="#" class="nav__link nav__link--footer">Discovery</a></li>
              <li class="nav__item"><a href="#" class="nav__link nav__link--footer">Photos</a></li>
              <li class="nav__item"><a href="#" class="nav__link nav__link--footer">Contact</a></li>
            </ul>

            <ul class="nav nav--footer">
              <li class="nav__item"><a href="#" class="nav__link nav__link--footer">About</a></li>
              <li class="nav__item"><a href="#" class="nav__link nav__link--footer">Help</a></li>
              <li class="nav__item"><a href="#" class="nav__link nav__link--footer">Terms</a></li>
              <li class="nav__item"><a href="#" class="nav__link nav__link--footer">Guidlines</a></li>
            </ul>
    
            <ul class="nav nav--footer">
              <li class="nav__item"><a href="#" class="nav__link nav__link--footer">Testimonials</a></li>
              <li class="nav__item"><a href="#" class="nav__link nav__link--footer">Advertise</a></li>
              <li class="nav__item"><a href="#" class="nav__link nav__link--footer">Integrations</a></li>
              <li class="nav__item"><a href="#" class="nav__link nav__link--footer">Careers</a></li>
            </ul>
          </div>
      </div>

      <div class="footer__column-2">
        <div class="email-box">
          <div class="form-group">
            <input class="form-field" type="email" placeholder="Email">
            <!-- <div class="email-box__icon"></div> -->
            <!-- <span>ICON</span> -->
            <!-- <span class="email-box__icon"></span> -->
          </div>
          <p class="email-box__text">Stay in touch with us for the freshest products!</p>
        </div>
         
        <div class="social-networks"> <!-- TODO change to UL later -->
          <div class="social-networks__instagram"></div>
          <div class="social-networks__twitter"></div>
          <div class="social-networks__facebook"></div>
          <div class="social-networks__web"></div>
        </div>
          <!-- <ul class="social-networks"> 
              <li class="social-networks__instagram"></li>
              <li class="social-networks__twitter"></li>
              <li class="social-networks__facebook"></li>
              <li class="social-networks__web"></li>
          </ul> -->
      </div>
    </footer>
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
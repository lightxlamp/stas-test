<template>
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
</template>
<template>
  <div class="container">
    <div>
      <!-- <header /> -->
      <header class="header">
        <div class="header__logo">Logo</div>
        <ul class="nav">
          <li class="nav__item"><a href="#" class="nav__link">Home</a></li>
          <li class="nav__item"><a href="#" class="nav__link">Discovery</a></li>
          <li class="nav__item"><a href="#" class="nav__link">Photos</a></li>
          <li class="nav__item"><a href="#" class="nav__link">Contact</a></li>
        </ul>
        <div class="user">
          <div class="user__icon"></div>
        </div>

        

        <h3 class="heading-3">Your own home:</h3>
        <h1 class="heading-1">The ultimate personal freedom</h1>
        <button class="btn header__btn">View our properties</button>
        <div class="header__seenon-text">Seen on</div>
        <div class="header__seenon-logos">
            <img src="img/logo-bbc.png" alt="Seen on logo 1">
            <img src="img/logo-forbes.png" alt="Seen on logo 2">
            <img src="img/logo-techcrunch.png" alt="Seen on logo 3">
            <img src="img/logo-bi.png" alt="Seen on logo 4">
        </div>
      </header>

      <div>Main</div>

      <h1 class="title">
        World News
      </h1>
      <h2 class="subtitle">
        Amazing places in America to visit.
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

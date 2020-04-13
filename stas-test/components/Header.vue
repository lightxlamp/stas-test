<template>
  <div>
    <!-- https://github.com/maoberlehner/vue-lazy-hydration/issues/15 -->
    <header class="header">
      <div class="button-or-menu">
        <!-- <button class="nav-btn"></button> -->
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />

        <label
          for="navi-toggle"
          class="navigation__button"
          v-on:click="showSideBar"
        >
          <span class="navigation__icon">&nbsp;</span>
        </label>

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
        <img
          src="../assets/img/blonde_girl.jpg"
          alt="User photo"
          class="logged-in-user__photo"
        />
      </div>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    showSideBar() {
      if (this.$store.state.isSideBarVisible == false) {
        this.$store.commit("showSideBar");
      }
    },
  },
};
</script>

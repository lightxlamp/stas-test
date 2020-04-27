<template>
  <div class="logged-in-user">
    <img src="../assets/img/blonde_girl.jpg" alt="User photo" class="logged-in-user__photo" />
  </div>
</template>

<style scoped lang="scss">
.logged-in-user {
  width: 5rem;
  height: 4rem;
  border: 1px solid red;

  &__photo {
    display: block;
    margin: 1rem auto;
    border-radius: 50%;
    height: auto;
    max-width: 100%;
    width: 1.6rem;
    @media only screen and (min-width: $bp-tablet) {
      width: 3rem;
    }
  }
  &__photo:hover {
    width: 3rem;
     @media only screen and (min-width: $bp-tablet) {
      width: 3.2rem;
    }
    border: .2rem solid $color-primary;
  }
}
</style>

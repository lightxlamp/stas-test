<template>
  <div class="logged-in-user">
    <img src="../assets/img/blonde_girl.jpg" alt="User photo" class="logged-in-user__photo" />
  </div>
</template>

<style scoped lang="scss">
.logged-in-user {
  &__photo {
    display: block;
    border-radius: 50%;
    width: 1.6rem;
    border: .2rem solid transparent;
    @media only screen and (min-width: $bp-tablet) {
      width: 3rem;
    }
  }
  &__photo:hover {
    border: .2rem solid $color-primary;
  }
}
</style>

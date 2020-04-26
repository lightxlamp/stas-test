<template>
  <footer class="footer">
    <div class="footer__column-1">
      <logo />
      <navigationLinks />
    </div>

    <div class="footer__column-2">
      <emailBox />
      <socialNetworks />
    </div>
  </footer>
</template>

<script>
import emailBox from '~/components/email-box'
import logo from '~/components/logo'
import navigationLinks from '~/components/navigation-links'
import socialNetworks from '~/components/social-networks'

export default {
  components: {
    emailBox,
    logo,
    navigationLinks,
    socialNetworks
  }
}
</script>

<style scoped lang="scss">
.footer {
  background-color: $color-grey-dark-2;
  display: none;
  padding: 6rem 8rem;
  margin-top: 8rem; 

  @media only screen and (min-width: $bp-tablet) {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (min-width: $bp-desktop) {
    display: flex;
    flex-direction: row;
    padding: 6rem 14rem;
  }

  @media only screen and (min-width: $bp-large-desktop) {
    padding: 6rem 32rem;
  }

  &__column-1 {
    display: flex;
    flex: 1 1 auto;

    & > div {
      flex-basis: 0;
      flex-grow: 1;
      @media only screen and (min-width: $bp-desktop) {
        flex: 0 0 auto;
      }

      padding: 0 2.4rem 3.4rem 2.4rem;
    }
  }

  &__column-2 {
    display: flex;
    flex: 1 1 auto;
    align-items: flex-end;
    justify-content: space-between;

    @media only screen and (min-width: $bp-desktop) {
      align-items: flex-start;
    }

    & > div {
      @media only screen and (min-width: $bp-desktop) {
        flex-basis: 0;
        flex-grow: 1;
      }
      // padding: 0 2.4rem 3.4rem 2.4rem;
      // Move to email-box component
      width: 28.4rem;
      padding: 0 2.4rem 0 2.4rem;
    }
  }
}
</style>

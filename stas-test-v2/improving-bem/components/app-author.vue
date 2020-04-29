<template>
    <div class="author" :class="authorAdditionalClass">
        <img
            :src="require(`../assets/img/${avatarFile}`)"
            :alt="authorName"
            class="author__photo"
        />

        <div class="author__name">{{authorName}} {{authorAdditionalClass}}</div>
    </div>
</template>

<script>
export default {
    props: {
        avatarFile: {
            type: String,
            default: 'boy.jpg' // TODO add default user avatar (empty)
        },
        authorName: {
            type: String, 
            default: 'User Name'
        },
        modifier: {
            type: String, 
            default: ''
        }
    },
    computed: {
        authorAdditionalClass: function() {
            return this.modifier ? 'author--' + this.modifier : '';
    }
  }
}
</script>

<style lang="scss" scoped>
.author {
  align-items: center;
  display: flex;

  &__photo {
    border-radius: 50%;
    border: 2px solid $color-white;
    height: 2.8rem;
    object-fit: cover;
    object-position: 50% 50%;
    width: 2.8rem;

    @media only screen and (min-width: $bp-tablet) {
      height: 4rem;
      width: 4rem;
    }

    &--story {
      border: none;
      height: 4rem;
      width: 4rem;
    }
  }

  &__name {
    color: $color-white;
    display: none;
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 2rem;
    margin-left: 2rem;

    @media only screen and (min-width: $bp-tablet) {
      display: inline-block;
    }

    &--story {
      color: $color-black;
      display: inline-block;
      font-size: 2.4rem;
      font-weight: bold;
      line-height: 4.2rem;
      text-align: left;
    }
  }
}
</style>
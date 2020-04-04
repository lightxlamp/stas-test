<template>
    <div class="trending__content">
        <div class="article article--trending"  v-for="article in trending_articles" :key="article.fileName">
            
            <div class="article__image">
                <img
                    :src="require(`../assets/img/${article.imgName}.jpg`)"
                    :alt="article.imgAlt"
                    class="article__image article__image--trending"
                />
            </div>

            <div class="article__wrap--trending">
                <div class="article__category article__category--trending">{{article.category}}</div>
                <div class="article__title article__title--trending">{{article.title}}</div>
                <div
                    class="article__text article__text--trending"
                >{{article.text}}</div>
                <div class="date-time">
                    <div class="date-time__icon"></div>
                    <div class="date-time__time">{{article.dateTime}}</div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex' 

export default {
    computed: {
        trending_articles () {
            console.log(this.$store.state.trending_articles);
            return this.$store.state.trending_articles
        },
        imgAlt() {
            return this.trending_articles[0][1];
        },
        imgSrc(){
            const fileName = this.trending_articles[0][0];
            return require(`../assets/img/${fileName}.jpg`);
        }
    }
}
</script>
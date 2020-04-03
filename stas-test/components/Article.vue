<template>
    <div class="article article--trending">

        <div class="article__image">
            <!-- <img :src="require(`../assets/doggos/${selectedDog.toLowerCase()}.jpg`)" :alt="selectedDog"> -->
            <!-- <img :src="dogImage" :alt="selectedDog"> -->
            <!-- https://codesandbox.io/s/how-to-load-dynamic-images-in-vue-3eu3x?from-embed -->
            <img
                :src="imgSrc"
                :alt="imgAlt"
                class="article__image article__image--trending"
            />
        </div>

        <div class="article__wrap--trending">
            <div class="article__category article__category--trending">{{trending_articles[0][2]}}</div>
            <div class="article__title article__title--trending">{{trending_articles[0][3]}}</div>
            <div
                class="article__text article__text--trending"
            >{{trending_articles[0][4]}}</div>
            <div class="date-time">
                <div class="date-time__icon"></div>
                <div class="date-time__time">{{trending_articles[0][5]}}</div>
            </div>
        </div>

    </div>
</template>

<script>
import { mapMutations } from 'vuex' 

export default {
    computed: {
        myName () {
            return this.$store.state.stas
        },
        trending_articles () {
            return this.$store.state.trending_articles
        },
        imgAlt() {
            return this.trending_articles[0][1];
        },
        imgSrc(){
            //const fileName = this.trending_articles[0][0];
            //let path = `../assets/img/${fileName}.jpg`;
            let path = this.trending_articles[0][0];

            //return require(path);
            return require(`../assets/img/green_lake.jpg`);
        }
    }
}
</script>
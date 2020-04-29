<template>
    <div class="video-story">
        <iframe
            width="100%"
            height="100%"
            :src="src"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            default: '' 
        },
    }
}
</script>

<style lang="scss" scoped>

</style>
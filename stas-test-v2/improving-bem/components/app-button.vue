<template>
    <!-- <a href="#" class="btn ">Learn more</a> -->
    <a href="#" class="btn ">{{btnText}}</a>
</template>

<script>
export default {
    props: {
        btnText: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>

</style>
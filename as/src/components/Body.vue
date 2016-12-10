

<template>
    <div class="uk-block ">

        <div class="uk-container">

        <clock></clock>
        </div>
    </div>
</template>

<script>



    export default {
        name: 'body-component',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            'clock': require('./clock.vue'),

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

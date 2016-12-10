

<template>
        <div v-on:click="toggleClass" class="toggle-button" :class="{'toggle-button-selected': active}">
            <button></button>
        </div>
</template>

<script>



    export default {
        name: 'toggle-button',
        data:function () {
            return {
                active:false
            }
        },
        mounted:function(){
        },
        methods:{
            toggleClass:function(){
                this.active === true ? this.active = false : this.active = true ;
                console.log('event should be emited', this.active);
                this.$emit('toggleActive' , this.active)
            }
        },
        components: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .toggle-button { background-color: white; margin: 5px 0; border-radius: 20px; border: 1px solid #D0D0D0; height: 12px; cursor: pointer; width: 25px; position: relative; display: inline-block; user-select: none; -webkit-user-select: none; -ms-user-select: none; -moz-user-select: none; }
    .toggle-button button { cursor: pointer; outline: 0; display:block; position: absolute; left: 0; top: 0; border-radius: 100%; width: 12px; height: 12px; background-color: white; float: left; margin: 0px 0 0 0px; border:1px solid #D0D0D0; transition: left 0.3s; }
    .toggle-button-selected { background-color: #83B152; border: 1px solid #7DA652; }
    .toggle-button-selected button { left: 13px; top: 0; margin: 0; border: none; width: 12px; height: 12px; box-shadow: 0 0 2px rgba(0,0,0,0.1); }
</style>

<template>
  <div id="app">
    <nav-component></nav-component>
      <body-component></body-component>
  </div>
</template>

<script>
import nav from './components/Nav';
import body from './components/Body'
var $ = require('jquery');
export default {
  name: 'app',
  components: {
      'nav-component': nav,
      'body-component':body
  }
}

</script>

<style>

</style>

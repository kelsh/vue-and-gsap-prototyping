<template>
    <nav class="uk-navbar">
        <ul class="uk-navbar-nav">
            <li class=""><a href="">link</a></li>
            <li><a href="">link</a></li>
            <li class="uk-parent"><a href="">link</a></li>
        </ul>
        <div class="uk-navbar-flip">

            <ul class="uk-navbar-nav">
                <a href="" class="uk-navbar-toggle"></a>
            </ul>
        </div>
    </nav>
</template>

<script>



export default {
  name: 'nav-component',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

<template>
  <figure class="app">
    <img v-bind:src="AppIcon">
    <figcaption>{{AppName}}</figcaption>
  </figure>
</template>

<script>
export default {
  name: 'HomeApp',
  props: {
    AppIcon: String,
    AppName: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  figure {
    margin: auto;
    margin-bottom: 2em;

    img {
      width: 80px;
      padding: .5em;
    }
    figcaption {
      font-size: 1.3em;
      color: $dark-grey;
    }
  }
</style>

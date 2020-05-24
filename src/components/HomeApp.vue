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
    img {
      width: 70px;
      padding: .5em;
      border: $grey-border;
      border-radius: 10px;
    }
    figcaption {
      font-size: 1.3em;
      color: $dark-grey;
    }
  }
</style>

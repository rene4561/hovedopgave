<template>
  <nav class="apps">
    <router-link :to="link.path" v-for="(link, index) in navLinks" :key="index">
      <figure >
        <img :src="link.icon"/>
        <figcaption>
          {{link.text}}
        </figcaption>
      </figure>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'HomeNavigation',
  props: ['navLinks']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .apps {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    column-gap: 10px;
    max-width: 800px;
    margin: 10vh auto;

    a {
      text-decoration: none;
    }
  }
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

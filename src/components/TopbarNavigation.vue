<template>
    <nav id="nav">
        <a href=""></a>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
    </nav>
</template>

<script>
export default {
  name: 'TopbarNavigation',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#nav {
  display: flex;
  justify-content: center;
  padding: 2px;
  

  a {
    font-weight: bold;
    color: $black;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>

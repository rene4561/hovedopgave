<template>
  <div id="app">
    <header class="topBar">
      <topbar-navigation v-bind:nav-links="navLinks"/>
      <topbar-user v-bind:username="activeuser.username"/>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>
<script>
import TopbarUser from '@/components/TopbarUser.vue'
import TopbarNavigation from '@/components/TopbarNavigation.vue'

export default {
  components: {
    TopbarUser,
    TopbarNavigation,
  },
  data() {
    return {
      activeuser:{
        username: 'René'
      },
      navLinks: [
        {
          text: 'Forside',
          path: '/home',
          icon: '/img/logo.82b9c7a5.png'
        },
        {
          text: 'Rediger sider',
          path: '/edit',
          icon: '../assets/edit-page.svg'
        },
        {
          text: 'Tilpas udseende',
          path: '/customize',
          icon: '../assets/customize-page.png'
        },
        {
          text: 'Produkter',
          path: '/Produkter',
          icon: '../assets/product-page.svg'
        },
        {
          text: 'Test',
          path: '/Test',
          icon: '../assets/logo.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "./styles/_normalize.scss";

body {
  background-color: $tertiary;
  padding-top: $nav-height;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $black;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: calc(100% - 2em);
  height: $nav-height;
  padding: 0 1em;
  background: $gre-y-dient;
  box-shadow: $primary-shadow;
}

main {
  padding: 0 60px 30px;

}
</style>

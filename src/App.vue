<template>
  <div id="app">
    <header class="topBar">
      <topbar-navigation v-bind:nav-links="navLinks"/>
      <topbar-user v-bind:username="activeuser.username"/>
    </header>
    <main>
      <transition-page>
        <router-view/>
      </transition-page>
    </main>
    <footer>
      &copy; Dynamic it
    </footer>
  </div>
</template>
<script>
import TopbarUser from '@/components/TopbarUser.vue'
import TopbarNavigation from '@/components/TopbarNavigation.vue'
import TransitionPage from '@/transitions/TransitionPage.vue';

export default {
  components: {
    TopbarUser,
    TopbarNavigation,
    TransitionPage,
  },
  data() {
    return {
      activeuser:{
        username: 'René',
        profilePicture: ''
      },
      navLinks: [
        {
          text: 'Forside',
          path: '/',
          icon: '../assets/logo.png'
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
  },
}
</script>

<style lang="scss">
  @import "./styles/_normalize.scss";

  body {
    background-color: $tertiary;
    padding-top: $nav-height;
    overflow-y: scroll;
  }

  #app {
    min-height: 91vh;
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
    z-index: 10;
  }

  main {
    padding: 0 60px 30px;

  }
</style>

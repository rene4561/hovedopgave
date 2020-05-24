<template>
  <div id="app">
    <header class="topBar">
      <topbar-navigation/>
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
        username: 'Vuencint'
      },
      navLinks: [
        {
          text: 'Contact',
          path: '/contact',
          icon: 'ion-ios-megaphone'
        },
        {
          text: 'About',
          path: '/about',
          icon: 'ion-ios-business'
        },
        {
          text: 'Blog',
          path: '/blog',
          icon: 'ion-ios-bonfire'
        },
        {
          text: 'Portfolio',
          path: '/portfolio',
          icon: 'ion-ios-briefcase'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import 'https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css';
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

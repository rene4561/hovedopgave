<template>
  <div class="home">
    <img class="profilePicture" alt="profile picture" src="../assets/logo.png">
    <h1>Velkommen {{username}}</h1>
    <nav class="apps">
      <HomeApp 
      v-for="app in apps"
      v-bind:key="app.id"
      v-bind:AppName="app.name"
      v-bind:AppIcon="app.icon"
      />
    </nav>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HomeApp from '@/components/HomeApp.vue'

export default {
  name: 'Home',
  components: {
    HomeApp,
  },
  data() {
    return {
      apps: [
        { id: 1, name: 'Udseende', icon: '/img/logo.82b9c7a5.png'},
        { id: 2, name: 'Rediger', icon: '/img/logo.82b9c7a5.png'},
        { id: 3, name: 'Produkter', icon: '/img/logo.82b9c7a5.png'},
        { id: 4, name: 'Grid test', icon: '/img/logo.82b9c7a5.png'},
        { id: 5, name: 'Grid test', icon: '/img/logo.82b9c7a5.png'},
        { id: 6, name: 'Grid test', icon: '/img/logo.82b9c7a5.png'},
        { id: 7, name: 'Grid test', icon: '/img/logo.82b9c7a5.png'},
      ],
        username: 'Vuencint'
    }
  }
}
</script>
<style lang="scss" scoped>
  .home {padding: 35px 0;}

  .profilePicture {
    border: $grey-border;
    border-radius: 100%;
  }

  .apps {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    max-width: 700px;
    margin: 10vh auto;
  }
</style>
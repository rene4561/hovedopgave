<template>
  <div class="home">
    <img class="profilePicture" alt="profile picture" src="../assets/Mig.jpg">
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
        { id: 1, name: 'Rediger sider', icon: '../assets/edit-page.svg'},
        { id: 2, name: 'Tilpas udseende', icon: '../assets/customize-page.png'},
        { id: 3, name: 'Produkter', icon: '../assets/product-page.svg'},
        { id: 4, name: 'Billedarkiv', icon: '../assets/logo.png'},
        { id: 5, name: 'Sprog', icon: '../assets/logo.png'},
        { id: 6, name: 'Betegnelser', icon: '../assets/logo.png'},
        { id: 7, name: 'Grid test', icon: '../assets/logo.png'},
      ],
        username: 'René'
    }
  }
}
</script>
<style lang="scss" scoped>
  .home {padding: 35px 0;}

  .profilePicture {
    border-radius: 100%;
    background-color: $secondary;
    width: 150px;
  }

  .apps {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    max-width: 800px;
    margin: 10vh auto;
  }
</style>
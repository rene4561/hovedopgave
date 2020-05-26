<template>
  <div class="home">
    <img class="profilePicture" alt="profile picture" src="../assets/Mig.jpg">
    <h1>Velkommen {{username}}</h1>
    <home-navigation v-bind:nav-links="navLinks" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeNavigation from '@/components/HomeNavigation.vue'

export default {
  name: 'Home',
  components: {
    HomeNavigation,
  },
  data() {
    return {
      navLinks: [
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
        },
        {
          text: 'Test',
          path: '/Test',
          icon: '../assets/logo.png'
        },
        {
          text: 'Test',
          path: '/Test',
          icon: '../assets/logo.png'
        },
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
</style>
<template>
  <div class="customize">
    <img alt="Vue logo" src="../assets/logo.png">
    <customize-navigationmenu-items/>
  </div>
</template>

<script>
// @ is an alias to /src
import CustomizeNavigationmenuItems from '@/components/test1.vue'


export default {
  name: 'Customize',
  components: {
    CustomizeNavigationmenuItems,
  }
}
</script>
<template>
  <div class="customize">
    <nav class="navigationSide"></nav>
    <customize-menu-structure class="setting"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CustomizeMenuStructure from '@/components/CustomizeMenuStructure.vue'


export default {
  name: 'Customize',
  components: {
    CustomizeMenuStructure,
  }
}
</script>
<style lang="scss" scoped>

  //Setting bliver brugt på hver enkelt component som bliver impoteret
  .setting {
    margin: 0 auto;
    max-width: 700px;
    padding: 35px 0;
    padding-left: 50px;
  }
  .navigationSide {
    background-color: $secondary;
    box-shadow: $primary-shadow;
    display: block;
    position: fixed;
    min-width: 300px;
    top: 9vh;
    left: 0;
    bottom: 0;
  }
</style>
<template>
  <span class="menuPreviewWindowLinks" >
    <a href="#" v-for="element in menuPagesActiveList" :key="element.order">
      {{element.name}}
    </a>
  </span>
</template>

<script>
  export default {
    name: 'MenuPreview',
    props: {
      menuPagesActiveList: Array,
    },
  }
</script>

<style scoped lang="scss">
  a {
    margin: 0 .3em;
    text-decoration: none;
    color: #fff;
  }
</style>

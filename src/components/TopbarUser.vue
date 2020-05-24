<template>
  <article class="topbarUser">
      <span href="#">{{username}}</span>
      <img src="../assets/ellipsis-v-solid.svg">
  </article>
</template>

<script>

export default {
  name: "TopbarUser",
  props: {
    username: String,
  },
};
</script>

<style lang="scss" scoped>
  .topbarUser {
    display: flex;
    align-items: center;

      img {
        height: 1.5em;
        padding-left: .5em;
      }
  }
</style>
<template>
  <nav id="nav">
    <router-link :to="link.path" v-for="(link, index) in navLinks" :key="index">
      <figure >
        <img :src="link.icon"/>
        <figcaption>
          {{link.text}}
        </figcaption>
      </figure>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'TopbarNavigation',
  props: ['navLinks']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#nav {
  display: grid;
	grid-template-columns: auto auto auto auto auto ;
	grid-column-gap: 1em;
	
	figure {
		margin: 0;
		padding: 5px;
	}

		img {
		width: 50px;
		}
	
  a {
		text-decoration: none;
		color: $black;
		-webkit-transition: background 200ms ease-in-out;
		-moz-transition: background 200ms ease-in-out;
		-ms-transition: background 200ms ease-in-out;
		-o-transition: background 200ms ease-in-out;
		transition: background 200ms ease-in-out;
		border-radius: 5%;

		&:hover {
			background-color: #c6c6c6;
		}

    &.router-link-exact-active {
			background-color: #c6c6c6;
    }
  }
}
</style>

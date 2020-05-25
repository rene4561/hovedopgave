<template>
    <nav id="nav">
			<figure v-for="(link, index) in navLinks" :key="index">
        <router-link :to="link.path">
					<img :src="link.icon"/>
					<figcaption>
						{{link.text}}
					</figcaption>
				</router-link>
			</figure>
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
	grid-template-columns: 1fr 1fr 1fr 1fr;
	width: 50%;
	
	figure {
		margin: 0;

		img {
		width: 2em;
		}
	}
	
  a {
		text-decoration: none;
    color: $black;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

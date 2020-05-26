<template>
  <div class="customize">
    <customize-menu-structure/>
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
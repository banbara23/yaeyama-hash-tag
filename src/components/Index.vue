<template>
  <div class="index">
    <twitter />
  </div>
</template>

<script>
import twitter from './twitter/Base'

export default {
  name: 'index',
  components: {
    twitter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.index {
  margin-top: 20px;
}
</style>

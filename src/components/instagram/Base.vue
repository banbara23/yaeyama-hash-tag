<template>
  <div id="insta-base">
    <all />
  </div>
</template>

<script>
import all from './All.vue';
export default {
  name: 'timeline',
  components: {
    all
  },
  props: ['query', 'id', 'word']
}
</script>

<style scoped>
div#insta-base {
  margin-top: 20px;
  margin-bottom: 24px;
}
</style>

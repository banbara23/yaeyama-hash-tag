<template>
  <div id="timeline">
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

<style>
.timeline {
  margin-top: 24px;
  margin-bottom: 24px;
}
</style>

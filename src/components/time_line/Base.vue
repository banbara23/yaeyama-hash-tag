<template>
  <div id="timeline">
    <twitter class="twitter"
             :query='"%E5%85%AB%E9%87%8D%E5%B1%B1"'
             :id='"872701594977976320"'
             :word='"八重山"' />
    <instagram class="instagram"
               :query='"%E5%85%AB%E9%87%8D%E5%B1%B1"'
               :id='"872701594977976320"'
               :word='"八重山"' />
  </div>
</template>

<script>
import twitter from './Twitter.vue';
import instagram from './Instagram.vue';
export default {
  name: 'timeline',
  components: {
    twitter,
    instagram
  },
  props: ['query', 'id', 'word']
}
</script>

<style>
.instagram {
  width: 300px
}
</style>

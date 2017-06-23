<template>
  <div id="top-card">
    <div class="card">
      <div class="card-image">
        <img :src="url" v-if="url">
        <div id="placeHolder" v-else="url"></div>
        <span class="card-title">#{{title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '#top-card',
  props: ['title', 'code', 'url']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#placeHolder {
  width: 300px;
  height: 300px;
  background-color: #ccc;
}
</style>

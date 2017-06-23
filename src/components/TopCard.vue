<template>
  <div id="top-card">
    <div class="card">
      <router-link :to="{path:`${code}`}">
      <div class="card-image">
        <img :src="url"
             v-if="url">
        <div id="placeHolder"
             v-else="url"></div>
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">#{{title}}</span>
      </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: '#top-card',
  props: ['title', 'code', 'url']
}
</script>

<style scoped>
#placeHolder {
  width: 300px;
  height: 300px;
  background-color: #ccc;
}
</style>

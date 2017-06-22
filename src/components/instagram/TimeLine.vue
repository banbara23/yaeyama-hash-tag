<template>
  <div id="instagram">
    <h4>{{name}}</h4>
    <div class="col s12 m6 l4" v-for="m in media">
      <div class="card" v-if="media">
        <div class="card-image waves-effect">
          <img class="activator" :src="m.thumbnail_src">
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
            <i class="material-icons Large right">close</i>
          </span>
          <p class="left-align">{{m.data}}</p>
          <p class="left-align">{{m.caption}}</p>
          <a id="insta-btn" class="orange lighten-5 waves-effect waves-teal btn-flat left-align" :href="`https://www.instagram.com/p/${m.code}/`" target="_blank">Instagramで見る</a>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>

export default {
  name: 'instagram',
  props: ['name', 'media']
}
</script>

<style scoped>
h4 {
  font-weight: normal;
}
#insta-btn {
  margin-top: 10px;
}
</style>

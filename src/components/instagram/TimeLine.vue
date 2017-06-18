<template>
  <div id="instagram">
    <h4>{{name}}</h4>
  
    <div class="col s12 m6 l4" v-for="m in media">
      <div class="card" v-if="media">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" :src="m.thumbnail_src">
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
            <i class="material-icons right">close</i>
          </span>
          <p class="left-align">{{m.post_date}}</p>
          <p>{{m.caption}}</p>
          <a class="teal lighten-5 waves-effect waves-teal btn-flat" :href="`https://www.instagram.com/p/${m.code}/`" target="_blank">Instagramで見る</a>
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

<style>
/*img#thumb {
  width: 300px;
}*/

img.activator {
  object-fit: cover;
}
</style>

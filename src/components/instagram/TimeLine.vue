<template>
  <div id="instagram">
    <h5>{{name}}</h5>
  
    <div class="card left-align"
         v-if="media"
         v-for="n in 10">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator"
             :src="media[n].thumbnail_src">
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
        <p>{{media[n].date}}</p>
        <p>{{media[n].caption}}</p>
        <a class="waves-effect waves-teal btn-flat"
           :href="`https://www.instagram.com/p/${media[n].code}/`"
           target="_blank">Instagramで見る</a>
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

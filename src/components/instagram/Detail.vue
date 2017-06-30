<template>
  <div id="instagram">
    <h4>{{name}}</h4>
    <div class="col s12 m6 l4"
         v-for="m in media">
      <div class="card"
           v-if="media">
        <a href="#modal"
           @click="openModal">
          <div class="card-image">
            <img class="activator"
                 :src="m.thumbnail_src">
          </div>
        </a>
      </div>
      <!-- Modal Structure -->
      <div id="modal"
           class="modal modal-fixed-footer">
        <div class="modal-content">
          <img :src="m.display_src">
          <p class="left-align">{{m.data}}</p>
          <p class="left-align">{{m.caption}}</p>
        </div>
        <div class="modal-footer">
          <a :href="`https://www.instagram.com/p/${m.code}/`"
             target="_blank"
             class="modal-action modal-close waves-effect waves-green btn-flat ">Instagramを開く</a>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>

export default {
  name: 'instagram',
  props: ['name', 'media'],
  methods: {
    openModal: function () {
      $('.modal').modal({
        inDuration: 200,
        outDuration: 200,
        startingTop: '4%',
      });
    }
  }
}
</script>

<style scoped>
h4 {
  font-weight: normal;
}

#modal-img {
  object-fit: cover;
}
</style>

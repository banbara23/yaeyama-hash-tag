<template>
  <div id="instagram">
    <h4>{{name}}</h4>
    <div class="col s6 m6 l4" v-for="m in media" :key="m.code">
      <div class="card" @click="show(m)" v-if="media">
        <div class="card-image">
          <img class="activator" :src="m.thumbnail_src">
        </div>
      </div>
    </div>
  
    <!-- Modal Structure -->
    <div id="img-detail" class="modal modal-fixed-footer">
      <div class="modal-content">
        <div class="card">
          <div class="card-image">
            <img class="activator" :src="modalSrc">
          </div>
        </div>
        <p>{{modalCaption}}</p>
        <p>{{modalDate}}</p>
      </div>
      <div class="modal-footer">
        <a :href="modalInstagram" target="_blank" class="modal-action modal-close waves-effect waves-green btn-flat ">Instagramを見る</a>
      </div>
    </div>
  
  </div>
</template>

<script>

export default {
  name: 'instagram',
  props: ['name', 'media'],
  data() {
    return {
      modalSrc: null,
      modalDate: null,
      modalCaption: null,
      modalInstagram: null
    }
  },
  mounted() {
    $(document).ready(function () {
      $('#img-detail').modal();
    });
  },
  methods: {

    show(m) {
      $('#img-detail').modal('open');
      this.modalSrc = m.display_src;
      this.modalDate = m.data;
      this.modalCaption = m.caption;
      this.modalInstagram = `https://www.instagram.com/p/${m.code}/`;
    },
    // hide() {
    //   this.$modal.hide('img-detail');
    // }
  }
}
</script>

<style scoped>
h4 {
  font-weight: normal;
}

div.card-image {
  cursor: pointer;
}
</style>

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
  
    <!-- Modal -->
    <modal name="img-detail" :height="modalHeight" :width="modalWidth" :adaptive="true">
      <div slot="top-right">
        <button @click="$modal.hide('img-detail')">
          ❌
        </button>
      </div>
      <!--<div class="card">
                  <div class="card-image">-->
      <img class="activator" :src="modalSrc" style="max-width: 100%; height: auto;">
      <div style="padding: 4px;">
        <div style="display:inline-block;">
          <p style="display: inline;">{{modalDate}}</p>
          <a class="waves-effect waves-light btn" :href="`https://www.instagram.com/p/${modalCode}/`" target="_blank" >Instagram</a>
        </div>
        <p>{{modalCaption}}</p>
      </div>
      <!--</div>
                </div>-->
    </modal>
  </div>
</template>

<script>

export default {
  name: 'instagram',
  props: ['name', 'media'],
  data() {
    return {
      modalCode: null,
      modalSrc: null,
      modalDate: null,
      modalCaption: null,
      modalHeight: window.innerHeight - window.innerHeight / 9,
      modalWidth: window.innerWidth - window.innerWidth / 9,
    }
  },
  methods: {

    show(m) {
      this.modalCode = m.code;
      this.modalSrc = m.display_src;
      this.modalDate = m.data;
      this.modalCaption = m.caption;
      this.$modal.show('img-detail');
    },
    hide() {
      this.$modal.hide('img-detail');
    }
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

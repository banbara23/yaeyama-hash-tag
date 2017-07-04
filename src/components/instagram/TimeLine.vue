<template>
  <div id="instagram">
    <h4>{{name}}</h4>
    <div class="col s12 m6 l4"
         v-for="m in media">
      <div class="card"
           v-if="media">
        <a @click="show(m)">
          <div class="card-image">
            <img class="activator"
                 :src="m.thumbnail_src">
          </div>
        </a>
      </div>
    </div>
  
    <!-- Modal -->
    <modal name="img-detail"
           :width="400"
           :height="600"
           :minWidth="200"
           :minHeight="200"
           :adaptive="true"
           :resizable="true"
           :draggable="true">
      <div slot="top-right">
        <button @click="$modal.hide('img-detail')">
          ❌
        </button>
      </div>
      <img :src="modalSrc"
           style="max-width: 100%; height: auto;">
      <div style="padding: 4px; overflow: auto;">
        <p>{{modalDate}}</p>
        <p>{{modalCaption}}</p>
      </div>
    </modal>
  </div>
</template>

<script>
var $ = require('jquery');
require('fancybox')($);
export default {
  name: 'instagram',
  props: ['name', 'media'],
  data() {
    return {
      modalSrc: null,
      modalDate: null,
      modalCaption: null
    }
  },
  methods: {
    show(m) {
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

</style>

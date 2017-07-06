<template>
  <div id="instagram">
    <h4>{{name}}</h4>
    <div class="col s12 m6 l4"
         v-for="m in media">
      <div class="card"
           v-if="media">
        <a id="single_1" @click="show(m)" href="#single_1">
          <div class="card-image">
            <img class="activator"
                 :src="m.thumbnail_src">
          </div>
        </a>
      </div>
    </div>

    <!-- Modal -->
    <div id="single_1">
      <img :src="modalSrc"
           style="max-width: 100%; height: auto;">
      <div style="padding: 4px; overflow: auto;">
        <p>{{modalDate}}</p>
        <p>{{modalCaption}}</p>
      </div>
    </div>
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
      this.modalSrc = m.thumbnail_src;
      this.modalDate = m.data;
      this.modalCaption = m.caption;
       $("#single_1").fancybox({
          helpers: {
              title : {
                  type : 'float'
              }
          }
      });
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

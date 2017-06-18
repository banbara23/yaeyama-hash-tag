<template>
  <div id="yaeyama" class="container">
    <vue-progress-bar />
    <div class="row">
      <instagram :name="'#黒島'" :media="response.media" />
    </div>
  </div>
</template>

<script>
import instagram from './instagram/TimeLine.vue';
import firebase from 'firebase'
const db = firebase.database()

export default {
  name: 'timeline',
  components: {
    instagram
  },
  mounted() {
    this.$Progress.start();
  },
  firebase() {
    return {
      response: {
        source: db.ref('/instagram').child('kuroshima'),
        asObject: true,
        readyCallback: function () {
          this.$Progress.finish();
        }
      }
    }
  }
}
</script>

<style>
div#yaeyamabase {
  margin: 8px;
}
</style>

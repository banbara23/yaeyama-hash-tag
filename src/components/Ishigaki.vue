<template>
  <div id="yaeyama" class="container">
    <vue-progress-bar />
    <div class="row">
      <instagram :name="'#石垣島'" :media="response" />
    </div>
  </div>
</template>

<script>
import instagram from './instagram/TimeLine.vue';
import firebase from 'firebase'
const db = firebase.database()
import config from '../timeline-config.js'

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
        source: db.ref('/public').child('ishigaki').limitToFirst(config.max),
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

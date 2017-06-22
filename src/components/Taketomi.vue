<template>
  <div id="yaeyama" class="container">
    <vue-progress-bar />
    <div class="row">
      <instagram :name="'#竹富島'" :media="response" />
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
        source: db.ref('/public').child('taketomi'),
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

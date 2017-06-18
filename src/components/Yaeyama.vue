<template>
  <div id="yaeyama" class="row">
    <div class="col s12">
      <ul class="tabs ">
        <li class="tab col s6">
          <a href="#contents1">Twitter</a>
        </li>
        <li class="tab col s6">
          <a href="#contents2">Instagram</a>
        </li>
      </ul>
    </div>
    <div id="contents1" class="col s12 m12">
      <twitter :query='"%E5%85%AB%E9%87%8D%E5%B1%B1"' :id='"872701594977976320"' :name='"八重山"' :height="'2000'" />
    </div>
    <div id="contents2" class="col s12 m8 offset-m2 l6 offset-l3">
      <instagram :tag="'#八重山'" :media="response.media" />
    </div>
  </div>
</template>

<script>
// import all from './All.vue';
import twitter from './twitter/TimeLine.vue';
import instagram from './instagram/TimeLine.vue';
import firebase from 'firebase'
const db = firebase.database()

export default {
  name: 'timeline',
  components: {
    twitter,
    instagram
  },
  mounted() {
    $('ul.tabs').tabs()
  },
  firebase() {
    return {
      response: {
        source: db.ref('/instagram').child('yaeyama'),
        asObject: true,
        readyCallback: function () {
          // this.$Progress.finish();
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

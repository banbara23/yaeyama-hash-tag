<template>
  <div id="ishitaki" class="row">
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
      <twitter :query='"%E7%9F%B3%E5%9E%A3%E5%B3%B6"' :id='"872719272245567492"' :name='"石垣島"' :height="'2000'" />
    </div>
    <div id="contents2" class="col s12 m8 offset-m2 l6 offset-l3">
      <instagram :tag="'#石垣島'" :media="response.media" />
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
  name: 'ishitaki',
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

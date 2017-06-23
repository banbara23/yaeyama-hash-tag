<template>
  <div id="base" class="row">
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
      <twitter v-if="params" :query="params.tag" :id='params.id' :name='params.name' :height="3000" />
    </div>
    <div id="contents2" class="col s12 m8 offset-m2 l6 offset-l3">
      <instagram :tag="'#八重山'" :media="instaData.media" />
    </div>
  </div>
</template>

<script>
// import all from './All.vue';
import twitter from './twitter/TimeLine.vue';
import instagram from './instagram/TimeLine.vue';
import hashtags from '../hashtags.js';
import firebase from 'firebase'
const db = firebase.database()

export default {
  name: 'timeline',
  components: {
    twitter,
    instagram
  },
  data() {
    return {
      params: null,
      height: 1000
    }
  },
  mounted() {
    $('ul.tabs').tabs()
    hashtags.forEach(function (elm) {
      if (elm.code == this.$route.params.code) {
        this.params = elm;
        return;
      }
    }, this);
  },
  firebase() {
    return {
      instaData: {
        source: db.ref('/instagram').child(this.$route.params.code),
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
div#base {
  margin-top: 8px;
}
</style>

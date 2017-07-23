<template>
  <div class="index">
    <vue-progress-bar />
    <p class="center">八重山諸島の「なう」を眺めよう！
    </p>
    <div class="container">
      <div class="row">
        <div class="col s6 m4 l4"
             v-for="data in result"
             :key="data.code">
          <top-card :title="data.title"
                    :code="data.code"
                    :url="data.url"></top-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topCard from './TopCard.vue';
import firebase from 'firebase'
const db = firebase.database()

export default {
  name: 'index',
  components: {
    topCard
  },
  data() {
    return {
      result:
      [
        { code: 'yaeyama', title: '八重山', url: '' },
        { code: 'ishigaki', title: '石垣島', url: '' },
        { code: 'iriomote', title: '西表島', url: '' },
        { code: 'taketomi', title: '竹富島', url: '' },
        { code: 'kohama', title: '小浜島', url: '' },
        { code: 'kuroshima', title: '黒島', url: '' },
        { code: 'hatoma', title: '鳩間島', url: '' },
        { code: 'hateruma', title: '波照間島', url: '' },
        { code: 'yonaguni', title: '与那国島', url: '' }
      ]
    }
  },
  mounted() {
    this.$Progress.start();
  },
  firebase() {
    return {
      result: {
        source: db.ref('/top'),
        readyCallback: function () {
          this.$Progress.finish();
        }
      }
    }
  }
}
</script>
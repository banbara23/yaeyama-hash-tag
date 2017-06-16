<template>
  <div id="timeline">
    <!--<all />-->
    {{param}}
    <time-line v-if="param"
               :query='param.tag'
               :id='param.id'
               :word='param.name'
               :height="height" />
  </div>
</template>

<script>
// import all from './All.vue';
import TimeLine from './TimeLine.vue';
import hashtags from '../hashtags.js';

export default {
  name: 'timeline',
  components: {
    // all,
    TimeLine
  },
  data() {
    return {
      param: null,
      height: 1000
    }
  },
  mounted() {
    hashtags.forEach(function (elm) {
      if (elm.code == this.$route.params.code) {
        this.param = elm;
        return;
      }
    }, this);
  }
}
</script>

<style>
.timeline {
  margin-top: 24px;
  margin-bottom: 24px;
}
</style>

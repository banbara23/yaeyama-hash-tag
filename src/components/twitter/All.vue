<template>
    <div class="timeline">
        <time-line :query='"%E5%85%AB%E9%87%8D%E5%B1%B1"'
                 :id='"872701594977976320"'
                 :name='"八重山"' 
                 :height="height" />
        <!--<time-line :query='"%E7%AB%B9%E5%AF%8C%E7%94%BA"'
                     :id='"872720186729680896"'
                     :name='"竹富町"' />-->
        <time-line :query='"%E7%9F%B3%E5%9E%A3%E5%B3%B6"'
                 :id='"872719272245567492"'
                 :name='"石垣島"'
                 :height="height" />
        <time-line :query='"%E8%A5%BF%E8%A1%A8%E5%B3%B6"'
                 :id='"872720987854225409"'
                 :name='"西表島"'
                 :height="height" />
        <time-line :query='"%E7%AB%B9%E5%AF%8C%E5%B3%B6"'
                 :id='"872721296886448128"'
                 :name='"竹富島"'
                 :height="height" />
        <time-line :query='"%E5%B0%8F%E6%B5%9C%E5%B3%B6"'
                 :id='"872723027510779904"'
                 :name='"小浜島"'
                 :height="height" />
        <time-line :query='"%E9%B3%A9%E9%96%93%E5%B3%B6"'
                 :id='"873090361656090625"'
                 :name='"鳩間島"'
                 :height="height" />
        <time-line :query='"%E9%BB%92%E5%B3%B6"'
                 :id='"873094072998649856"'
                 :name='"黒島"'
                 :height="height" />
        <time-line :query='"%E6%B3%A2%E7%85%A7%E9%96%93%E5%B3%B6"'
                 :id='"873094266548928512"'
                 :name='"波照間島"'
                 :height="height" />
    </div>
</template>

<script>
import TimeLine from './TimeLine.vue'
export default {
    name: 'index',
    components: {
        TimeLine
    },
    created() {
        this.height = 600;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*a {
  color: #42b983;
}*/
</style>

<template>
    <div id="instaall">
        <!--<vue-progress-bar />-->
        <div class="row">
            <time-line :name="'#八重山'"
                    :media="allData.yaeyama.media" />
        </div>
        <div class="row">
            <time-line :name="'#石垣島'"
                    :media="allData.ishigaki.media" />
        </div>
        <div class="row">
            <time-line :name="'#西表島'"
                    :media="allData.iriomote.media" />
        </div>
        <div class="row">
            <time-line :name="'#竹富島'"
                    :media="allData.taketomi.media" />
        </div>
        <div class="row">
            <time-line :name="'#小浜島'"
                    :media="allData.kohama.media" />
        </div>
        <div class="row">
            <time-line :name="'#黒島'"
                    :media="allData.kuroshima.media" />
        </div>
        <div class="row">
            <time-line :name="'#鳩間島'"
                    :media="allData.hatoma.media" />
        </div>
        <div class="row">
            <time-line :name="'#波照間島'"
                    :media="allData.hateruma.media" />
        </div>
        <div class="row">
            <time-line :name="'#竹富町'"
                    :media="allData.taketomicho.media" />
        </div>
    </div>
</template>

<script>
import TimeLine from './TimeLine.vue'
import firebase from 'firebase'
const db = firebase.database()

export default {
    name: 'instaall',
    components: {
        TimeLine
    },
    created() {
        progress = 0;
        // this.$Progress.start();
    },
    firebase: {
        allData: {
            source: db.ref('/instagram'),
            asObject: true,
            readyCallback: function () {
                // this.$Progress.finish();
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.row {
    width: 300px;
    padding: 12px;
    display: inline-block;
}
</style>

<template>
    <div id="instaall">
        <div class="row">
            <single />
        </div>
        <div class="row">
            <single />
        </div>
        <div class="row">
            <single />
        </div>
        <div class="row">
            <single />
        </div>
        <div class="row">
            <single />
        </div>
        <div class="row">
            <single />
        </div>
        <div class="row">
            <single />
        </div>
        <div class="row">
            <single />
        </div>
        <div class="row">
            <single />
        </div>
    </div>
</template>

<script>
import Single from './Single.vue'
export default {
    name: 'instaall',
    components: {
        Single
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







/*a {
  color: #42b983;
}*/
</style>

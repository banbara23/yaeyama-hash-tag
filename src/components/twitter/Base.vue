<template>
  <div id="timeline">
    <!-- Dropdown Trigger -->
    <a class='dropdown-button btn'
       href='#'
       data-activates='dropdown1'>タグを選択<i class="material-icons right">arrow_drop_down</i></a>
  
    <!-- Dropdown Structure -->
    <ul id='dropdown1'
        class='dropdown-content'>
      <li><a href="#!">#八重山</a></li>
      <li><a href="#!">#石垣島</a></li>
      <li><a href="#!">#西表島</a></li>
      <li><a href="#!">#竹富島</a></li>
      <li><a href="#!">#小浜島</a></li>
      <li><a href="#!">#黒島</a></li>
      <li><a href="#!">#鳩間島</a></li>
      <li><a href="#!">#波照間島</a></li>
      <li><a href="#!">すべて</a></li>
    </ul>
    <all />
  </div>
</template>

<script>
import all from './All.vue';
export default {
  name: 'timeline',
  components: {
    all
  },
  props: ['query', 'id', 'word'],
  mounted() {
    $(".dropdown-button").dropdown();
  }
}
</script>

<style>
.timeline {
  margin-top: 24px;
  margin-bottom: 24px;
}
</style>

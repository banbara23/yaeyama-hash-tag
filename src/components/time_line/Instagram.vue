<template>
  <div id="instagram">
    <!--<div class="row">-->
    <!--<div class="col s12 m7">-->
    <!--<div id="card-header"
               class="blue darken-3">
            <p class="left">name_name</p>
        
          </div>
          <div class="my-card-panel">
            <img id="thumb"
                 src="https://placehold.jp/640x640.png?text=thumbnail" />
            <div>captin</div>
        
          </div>-->
  
  
    <div class="card">
      <div class="card-image">
        <img src="https://placehold.jp/640x640.png?text=thumbnail">
        <span class="card-title">Card Title</span>
      </div>
      <div class="card-content">
        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
      </div>
      <div class="card-action">
        <a href="#">This is a link</a>
      </div>
    </div>

  </div>
  <!--</div>-->
  <!--</div>-->
</template>

<script>
export default {
  name: 'instagram',
  props: ['query', 'id', 'word'],
  mounted: function () {

  }
}
</script>

<style>
div#instagram {
  display: inline-block;
}


/*img#thumb {
  width: 300px;
}*/
</style>

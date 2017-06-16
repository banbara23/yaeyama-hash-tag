<template>
  <div id="twitter"
       class="card">
    <a class="twitter-timeline"
       width='600px'
       :data-height="height"
       data-chrome="nofooter"
       :href="`https://twitter.com/hashtag/${query}`"
       :data-widget-id="id">#{{name}} のツイート</a>
  </div>
</template>

<script>
export default {
  name: 'twitter',
  props: ['query', 'id', 'name', 'height'],
  mounted: function () {
    (!function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
      if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + "://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
      }
    }(document, "script", "twitter-wjs")
    )
  }
}
</script>

<style>
div#twitter {
  display: inline-block;
}
</style>

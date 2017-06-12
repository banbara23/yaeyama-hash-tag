<template>
  <div id="timeline"
       class="card">
    <a class="twitter-timeline"
       width='auto'
       data-chrome="nofooter"
       :href="`https://twitter.com/hashtag/${query}`"
       :data-widget-id="id">#{{word}} のツイート</a>
  </div>
</template>

<script>
export default {
  name: 'timeline',
  props: ['query', 'id', 'word'],
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
#timeline {
  margin: 8px;
}
</style>

<template>
  <nav id="navbar" class="nav-extended orange darken-1">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo center">やえやまハッシュタグ</router-link>
    </div>
    <ul>
      <li>
        <router-link to="/yaeyama">#八重山</router-link>
      </li>
      <li>
        <router-link to="/ishigaki">#石垣島</router-link>
      </li>
      <li>
        <router-link to="/iriomote">#西表島</router-link>
      </li>
      <li>
        <router-link to="/taketomi">#竹富島</router-link>
      </li>
      <li>
        <router-link to="/kohama">#小浜島</router-link>
      </li>
      <li>
        <router-link to="/kuroshima">#黒島</router-link>
      </li>
      <li>
        <router-link to="/hatoma">#鳩間島</router-link>
      </li>
      <li>
        <router-link to="/hateruma">#波照間島</router-link>
      </li>
    </ul>
  
  </nav>
</template>
<script>
const hashtags = require("./hashtags.js");
export default {
  name: 'navbar',
  data() {
    return {
      tags: hashtags
    }
  }
}
</script>
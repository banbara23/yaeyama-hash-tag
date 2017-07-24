<template>
  <nav id="navbar" class="nav-extended orange darken-1">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo center">八重山ハッシュタグ</router-link>
    </div>
    <ul class="container">
      <router-link tag="li" to="/yaeyama" activeClass='active'><a>#八重山</a></router-link>
      <li>
        <router-link tag="li" to="/ishigaki" activeClass='active'><a>#石垣島</a></router-link>
      </li>
      <li>
        <router-link tag="li" to="/iriomote" activeClass='active'><a>#西表島</a></router-link>
      </li>
      <li>
        <router-link tag="li" to="/taketomi" activeClass='active'><a>#竹富島</a></router-link>
      </li>
      <li>
        <router-link tag="li" to="/kohama" activeClass='active'><a>#小浜島</a></router-link>
      </li>
      <li>
        <router-link tag="li" to="/kuroshima" activeClass='active'><a>#黒島</a></router-link>
      </li>
      <li>
        <router-link tag="li" to="/hatoma" activeClass='active'><a>#鳩間島</a></router-link>
      </li>
      <li>
        <router-link tag="li" to="/hateruma" activeClass='active'><a>#波照間島</a></router-link>
      </li>
      <li>
        <router-link tag="li" to="/yonaguni" activeClass='active'><a>#与那国</a></router-link>
      </li>
    </ul>
  
  </nav>
</template>
<script>
const hashtags = require("../hashtags.js");
export default {
  name: 'navbar',
  data() {
    return {
      tags: hashtags
    }
  }
}
</script>
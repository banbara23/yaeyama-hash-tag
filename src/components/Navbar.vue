<template>
  <nav id="navbar"
       class="nav-extended orange darken-1">
    <div class="nav-wrapper">
      <router-link to="/"
                   class="brand-logo center">やえやまハッシュタグ</router-link>
    </div>
    <div class="container">
      <!--<div class="row">-->
      <ul class="left">
        <li>
          <a class="dropdown-button"
             href="#"
             data-activates="dropdown_twitter">Twitter<i class="material-icons right">arrow_drop_down</i></a>
        </li>
        <li>
          <a class="dropdown-button"
             href="#"
             data-activates="dropdown_instagram">Instagram<i class="material-icons right">arrow_drop_down</i></a>
        </li>
      </ul>
      <!--</div>-->
    </div>
    <ul id='dropdown_twitter'
        class='dropdown-content'>
      <!--<li><router-link :to="'twitter/yaeyama'">#八重山</router-link></li>
          <li><router-link :to="twitter/yaeyama">#八重山</router-link></li>
          <li><router-link :to="twitter/yaeyama">#八重山</router-link></li>
          <li><router-link :to="twitter/yaeyama">#八重山</router-link></li>
          <li><router-link :to="twitter/yaeyama">#八重山</router-link></li>
          <li><router-link :to="twitter/yaeyama">#八重山</router-link></li>
          <li><router-link :to="twitter/yaeyama">#八重山</router-link></li>-->
  
      <li v-for="tag in tags">
        <router-link :to="{ path:`twitter/${tag.code}` }">#{{tag.name}}</router-link>
        <!--<router-link :to="{ name 'twitter', params: {code: 'yaeyama' } }">#{{tag.name}}</router-link>-->
  
      </li>
    </ul>
    <ul id='dropdown_instagram'
        class='dropdown-content'>
      <li v-for="tag in tags">
        <router-link :to="{ path:`instagram/${tag.code}` }">#{{tag.name}}</router-link>
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
<style scoped>
ul {
  width: 100%;
}

ul li {
  width: 50%;
}

ul#dropdown_twitter a {
  color: #2196f3;
}

ul#dropdown_instagram a {
  color: #e91e63;
}
</style>
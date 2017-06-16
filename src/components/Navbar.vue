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
      <li v-for="tag in tags">
        <router-link :to="{ path:`twitter/${tag.code}` }">#{{tag.display}}</router-link>
      </li>
    </ul>
    <ul id='dropdown_instagram'
        class='dropdown-content'>
      <li v-for="tag in tags">
        <router-link :to="{ path:`instagram/${tag.code}` }">#{{tag.display}}</router-link>
      </li>
    </ul>
  
  </nav>
</template>
<script>
export default {
  name: 'navbar',
  data() {
    return {
      tags: [
        { display: '八重山', code: "yaeyama" },
        { display: '石垣島', code: "ishigaki" },
        { display: '西表島', code: "iriomote" },
        { display: '竹富島', code: "taketomi" },
        { display: '小浜島', code: "kohama" },
        { display: '黒島', code: "kuroshima" },
        { display: '波照間島', code: "hateruma" },
        { display: '鳩間島', code: "hatoma" },
        { display: '全て', code: "all" }
      ]
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
<template>
  <nav class="nav-extended orange darken-1">
    <div class="nav-wrapper">
      <router-link to="/"
                   class="brand-logo center">やえやまハッシュタグ</router-link>
    </div>
    <ul class="left">
      <li>
        <router-link to="/twitter"><img src="../assets/Twitter_Logo_White_On_Image.svg">Twiter</router-link>
      </li>
      <li>
        <router-link to="/instagram"><img src="../assets/instagram_icon.svg">Instagram</router-link>
      </li>
    </ul>
  
  </nav>
</template>

<style scoped>
ul {
  width: 100%
}
ul li {
  width: 50%;
}
</style>
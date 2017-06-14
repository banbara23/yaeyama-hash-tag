<template>
  <nav class="nav-extended orange darken-1">
    <div class="nav-wrapper">
      
      <h4 class="white-text"><a href="#">やえやまハッシュタグ</a></h4>
      <p>八重山のハッシュタグが大集合</p>
    </div>
    <ul class="left">
      <!--<li　class="active"><a href="#">#八重山</a></li>
              <li><a href="#">#石垣島</a></li>
              <li><a href="#">#西表島</a></li>
              <li><a href="#">#竹富島</a></li>
              <li><a href="#">#小浜島</a></li>
              <li><a href="#">#黒島</a></li>
              <li><a href="#">#鳩間島</a></li>
              <li><a href="#">#波照間島</a></li>-->
      <li><router-link to="/twitter">Twiter</router-link></li>
      <li><router-link to="/instagram">Instagram</router-link></li>
    </ul>
  </nav>
</template>
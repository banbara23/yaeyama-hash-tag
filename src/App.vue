<template>
  <div id="app">
    <navbar></navbar>
    <div id="contents">
      <router-view></router-view>
    </div>
    <footer class="page-footer orange darken-1">
      <div class="container">
        <div class="row">
          <div class="col l6 s12 left-align">
            <h5 class="white-text">About</h5>
            <p class="grey-text text-lighten-4">最新情報を表示するためトップツィートのみ表示しています。</p>
          </div>
          <!--<div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3"
                       href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3"
                       href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3"
                       href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3"
                       href="#!">Link 4</a></li>
                </ul>
              </div>-->
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2017 Copyright ikemura
          <!--<a class="grey-text text-lighten-4 right"
                 href="#!">More Links</a>-->
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import firebase from 'firebase'
import firebaseconfig from '../firebase-config.js'
firebase.initializeApp(firebaseconfig);

import navbar from './components/Navbar.vue'
export default {
  name: 'app',
  components: {
    navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  background-color: #f7f7f7;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#contents {
  flex: 1;
}

footer {
  margin-top: 12px;
}
</style>

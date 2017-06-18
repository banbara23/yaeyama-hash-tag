import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Base from '@/components/Base'
import Instagram from '@/components/instagram/Base'
import Yaeyama from '@/components/Yaeyama'
import Ishigaki from '@/components/Ishigaki'
import Iriomote from '@/components/Iriomote'
import Taketomi from '@/components/Taketomi'
import Kohama from '@/components/Kohama'
import Kuroshima from '@/components/Kuroshima'
import Hatoma from '@/components/Hatoma'
import Hateruma from '@/components/Hateruma'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: Index,
    },
    {
      path: '/yaeyama',
      component: Yaeyama
    },
    {
      path: '/ishigaki',
      component: Ishigaki
    },
    {
      path: '/iriomote',
      component: Iriomote
    },
    {
      path: '/taketomi',
      component: Taketomi
    },
    {
      path: '/kohama',
      component: Kohama
    },
    {
      path: '/kuroshima',
      component: Kuroshima
    },
    {
      path: '/hatoma',
      component: Hatoma
    },
    {
      path: '/hateruma',
      component: Hateruma
    },
  ]
})

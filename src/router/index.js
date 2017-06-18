import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Base from '@/components/Base'
import Instagram from '@/components/instagram/Base'
import Yaeyama from '@/components/Yaeyama'
import Ishigaki from '@/components/Ishigaki'

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
      path: '/:code',
      component: Base
    }
  ]
})

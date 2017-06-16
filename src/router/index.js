import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Twitter from '@/components/Base'
import Instagram from '@/components/instagram/Base'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: Index,
    },
    {
      path: '/:code',
      component: Twitter
    },
    {
      path: 'twitter/:code',
      component: Twitter
    },
    {
      path: 'instagram/:tag',
      component: Instagram
    }
  ]
})

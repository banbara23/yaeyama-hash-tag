import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Twitter from '@/components/twitter/Base'
import Instagram from '@/components/instagram/Base'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: Index
    },
    {
      path: '/twitter/:tag',
      name: 'twitter',
      component: Twitter
    },
    {
      path: '/instagram/:tag',
      name: 'instagram',
      component: Instagram
    }
  ]
})

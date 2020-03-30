import Vue from 'vue'
import Router from 'vue-router'
// import talkBox from '@/components/talkBox'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})

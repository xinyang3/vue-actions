import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test1 from '@/views/test/test1.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/test1',
    name: 'test1',
    component: test1
  }
]

var router =  new Router({
  routes
})
export default router;

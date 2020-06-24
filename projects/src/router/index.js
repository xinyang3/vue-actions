// import Vue from 'vue'
// import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ComponentInDepth from '@/views/component-in-depth.vue'
import AnimateTest from '@/components/animate/test1.vue'
import transitionTest2 from '@/views/transition/transitionTest2.vue'
import customerDirective from '@/views/customer-directive.vue'
import diagram from '@/views/diagram/diagram.vue'
import redisClient from '@/components/redisClient.vue'
import elementHead from '@/components/element/home.vue'
import fullpageNavigation from '@/views/fullpage-navigation.vue'
import messageBoxCustomer from '@/views/message-box-customer-example.vue'
const echartsDemos = () => import('@/views/echarts/echarts.vue');
const echartsDemoOne = () => import('@/views/echarts/demo-one.vue');
// Vue.use(Router)

// const router = new Router({
const routes = [{
  path: '/',
  name: 'HelloWorld',
  component: HelloWorld
},
{
  path: '/componentInDepth',
  name: 'ComponentInDepth',
  component: ComponentInDepth
},
{
  path: '/animateTest',
  name: 'AnimateTest',
  component: AnimateTest
},
{
  path: '/transitionTest2',
  name: 'transitionTest2',
  component: transitionTest2
},
{
  path: '/customerDirective',
  name: 'customerDirective',
  component: customerDirective
},
{
  path: '/diagram',
  name: 'diagram',
  component: diagram
}, {
  path: '/redisClient',
  name: 'redisClient',
  component: redisClient
},
{
  path: '/elementHead',
  name: elementHead,
  component: elementHead
},
{
  path: '/fullpage-navigation',
  name: fullpageNavigation,
  component: fullpageNavigation
},
{
  path: '/messageBoxCustomer',
  name: 'messageBoxCustomer',
  component: messageBoxCustomer
},
  {
  path: '/echarts-demos',
  name: 'echartsDemos',
  component: echartsDemos,
  children: [
    {
      path: 'echarts-demo-one',
      name: 'demoOne',
      component: echartsDemoOne
    },
    {
      path: 'echarts-demo-two',
      name: 'demoTwo',
      component: echartsDemoOne
    }
  ]
  }
]
// })

export default routes

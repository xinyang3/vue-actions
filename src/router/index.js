// import Vue from 'vue'
// import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ComponentInDepth from '@/views/component-in-depth.vue'
import AnimateTest from '@/components/animate/test1.vue'
import transitionTest2 from '@/views/transition/transitionTest2.vue'
import customerDirective from '@/views/customer-directive.vue'
import diagram from '@/views/diagram/diagram.vue'
import redisClient from '@/components/redisClient.vue'
import elementHead from '@/components/element/home.vue';
import fullpageNavigation from '@/views/fullpage-navigation.vue';

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
        }
    ]
    // })

export default routes
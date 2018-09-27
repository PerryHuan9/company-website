import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior(to, from, savedPosition){
        if(savedPosition){
            return savedPosition;
        } else{
            return {x: 0, y: 0}
        }
    },
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/product',
            name: 'product',
            redirect: '/product/airplane',
            component: () => import('./views/Product.vue'),
            children: [
                {
                    path: 'airplane',
                    name: 'airplane',
                    component: () => import('./components/ProductAirplane.vue'),
                },
                {
                    path: 'airship',
                    name: 'airship',
                    component: () => import('./components/ProductAirship.vue'),
                }

            ]
        },
        {
            path: '/service',
            name: 'service',
            component: () => import('./views/Service.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('./views/Contact.vue')
        },
    ]
})

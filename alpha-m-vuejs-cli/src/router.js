import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import QCMView from './views/QCMView.vue'
import Welcome from './views/Welcome.vue'
import Contact from './views/Contact.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home,
        },{
            path: '/',
            name: 'welcome',
            component: Welcome,
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "about" */ './views/About.vue'),
        },
        {
            path: '/QCM',
            name: 'qcm',
            component: QCMView,
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
        },
    ],
})

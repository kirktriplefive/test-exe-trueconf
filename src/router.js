import Vue from 'vue';
import Router from 'vue-router';
import Light from './views/Light.vue'
import { publicPath } from '../vue.config';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: publicPath,
    routes: [
        {
            path: '/',
            name: 'Light',
            component: Light,
            props: { currentColor: 'none' },
        },
        {
            path: '/red',
            name: 'red',
            component: Light,
            props: { currentColor: 'red', time: 10000 },
        },
        {
            path: '/yellow',
            name: 'yellow',
            component: Light,
            props: { currentColor: 'yellow', time: 3000 },
        },
        {
            path: '/green',
            name: 'green',
            component: Light,
            props: { currentColor: 'green', time: 15000 },
        },
    ],
});
router.beforeEach((to, from, next) => {
    if (to.name === 'Light') {
        router.push('yellow');
    } else {
        next();
    }
});

export default router;
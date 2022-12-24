import {
    createWebHashHistory,
    createRouter,
    createWebHistory
} from 'vue-router';
import Home from "../components/Home.vue"
import About from "../components/About.vue"
import News from "../components/News.vue"
import NotFound from "../components/NotFound.vue"

const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/new/:id',
        component: News,
        // children: [
        //     {
        //         path: "/gym",
        //         component:Gym
        //     }
        // ]
    },
    {
        path: '/:path(.*)',
        component: NotFound
    }
]

const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    next()
})

export default router
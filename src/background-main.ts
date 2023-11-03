import { createApp } from 'vue'
import 'reset-css'
import 'ant-design-vue/dist/reset.css'
import {
    type RouteRecordRaw,
    createRouter,
    createWebHashHistory,
} from 'vue-router'
import Website from '@pages/background/website.vue'
import App from '@pages/background/index.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        children: [
            {
                path: '/',
                redirect: 'website',
            },
            {
                path: 'website',
                component: Website,
            },
            {
                path: 'account',
                component: () => import('@pages/background/account.vue'),
            },
            {
                path: 'action',
                component: () => import('@pages/background/action.vue'),
            },
        ],
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App).use(router).mount('#background')

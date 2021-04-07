import { createApp } from 'vue'
import axios from 'axios'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App'
import HomePage from './components/HomePage'
import SelfCheck from './components/SelfCheck';

const router = new createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomePage, name: 'home-page'},
        {path: '/self-check', component: SelfCheck, name: 'self-check'},
    ],
});

const api = axios.create({
    baseURL: 'https://api.covid19api.com/',
});

const app = createApp(App);
app.use(router)
app.config.globalProperties.$api = api
router.isReady().then(() => {
    app.mount('#app')
})


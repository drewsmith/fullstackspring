require('../less/app.less')

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from '../components/App.vue'
import Home from '../components/Home.vue'
import Introduction from '../components/Introduction.vue'
import Setup from '../components/Setup.vue'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{ 
        path: '/', 
        component: Home 
    }, {
        path: '/introduction', 
        component: Introduction 
    }, {
        path: '/setup', 
        component: Setup 
    }],
});

const app = new Vue({
    router,
    render: createEle => createEle(App)
}).$mount('#app');
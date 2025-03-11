import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignInForm from "@/components/SignInForm.vue";
import SignUpForm from "@/components/SignUpForm.vue";
import HomeUserView from "@/views/HomeUserView.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/signin',
        name: 'signin',
        component: SignInForm,
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUpForm,
    },
    {
        path:'/user',
        name:'homeuser',
        component: HomeUserView
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

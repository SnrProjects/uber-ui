import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from '../components/HomeComponent'
// import Footer from '../components/FooterComponent'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

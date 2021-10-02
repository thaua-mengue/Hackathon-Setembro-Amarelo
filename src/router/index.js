import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import IndicacaoProfissinais from '../views/IndicacaoProfissinais'
import Campanha from '../views/Campanha'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Profissinais',
    name: 'IndicacaoProfissinais',
    component: IndicacaoProfissinais
  },
  {
    path: 'Campanha',
    name: 'Campanha',
    component: Campanha
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

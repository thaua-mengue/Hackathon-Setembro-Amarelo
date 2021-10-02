import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import IndicacaoProfissinais from '../views/IndicacaoProfissinais'
import CampanhaPrevencao from '../views/CampanhaPrevencao'
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
    path: '/campanha',
    name: 'CampanhaPrevencao',
    component: CampanhaPrevencao
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

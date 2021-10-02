import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import IndicacaoProfissionais from '../views/IndicacaoProfissionais'
import CampanhaPrevencao from '../views/CampanhaPrevencao'
import ContInformativo from '../views/ContInformativo'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Profissionais',
    name: 'IndicacaoProfissionais',
    component: IndicacaoProfissionais
  },
  {
    path: '/campanha',
    name: 'CampanhaPrevencao',
    component: CampanhaPrevencao
  },
  {
    path: '/ContInformativo',
    name: 'ContInformativo',
    component: ContInformativo
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

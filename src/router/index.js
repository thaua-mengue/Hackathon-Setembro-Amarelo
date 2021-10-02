import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import IndicacaoProfissinais from "../views/IndicacaoProfissinais";
import CampanhaPrevencao from "../views/CampanhaPrevencao";
import AtendimentoOnline from "../views/AtendimentoOnline";
import AtendPresencial from "../views/AtendPresencial";
import ContInformativo from "../views/ContInformativo";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Profissinais",
    name: "IndicacaoProfissinais",
    component: IndicacaoProfissinais,
  },
  {
    path: "/AtendimentoOnline",
    name: "AtendimentoOnline",
    component: AtendimentoOnline,
  },
  {
    path: "/campanha",
    name: "CampanhaPrevencao",
    component: CampanhaPrevencao,
  },
  {
    path: "/AtendPresencial",
    name: "AtendPresencial",
    component: AtendPresencial,
  },
  {
    path: "/ContInformativo",
    name: "ContInformativo",
    component: ContInformativo,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

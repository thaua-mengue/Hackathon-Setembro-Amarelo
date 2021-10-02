<template>
  <div class="app-top-bar">
    <v-app-bar color="#FFF176" app dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <img
        class="mr-2"
        src="../../assets/logoCampanha.png"
        height="24"
        width="24"
      />

      <v-toolbar-title class="title"> Ano Amarelo </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon a href="https://www.cvv.org.br/">
        <v-icon>mdi-cellphone</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer color="#FFFDE7" v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="yellow--text text--accent-4"
        >
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Início</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/campanha">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-heart</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Campanha de Prevenção</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/Profissionais">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-doctor</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Indicação de Profissionais</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/AtendimentoOnline">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-laptop</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Atendimento Online</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/AtendPresencial">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-hospital-building</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Atendimento Presencial</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/ContInformativo">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-cellphone-information</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Conteúdo Informativo</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "AppTopBar",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped>
.app-top-bar a {
  text-decoration: none;
}

.title {
  color: #f9a825;
}
</style>

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
    </v-app-bar>
    <v-navigation-drawer color="#FFFDE7" v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="yellow--text text--lighten-2"
        >
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Início</v-list-item-title>
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
.title {
  color: #f9a825;
}
</style>
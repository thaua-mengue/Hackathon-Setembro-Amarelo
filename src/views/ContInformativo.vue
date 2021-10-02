<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">
      Conteúdo Informativo
    </h2>
    <div
      class="containercard mb-3 mt-3"
      v-for="atend of listaAtendPres"
      :key="atend.id"
    >
      <v-card class="mx-auto" max-width="344">
        <v-img :src="atend.imagem" height="200px"></v-img>

        <v-card-title>
          {{ atend.nome }}
        </v-card-title>

        <v-card-subtitle>
          {{ atend.tipo }}
        </v-card-subtitle>

        <v-card-actions>
          <v-btn color="orange lighten-2" text>
            Leia mais
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              {{ atend.descricao }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "ContInformativo",
  data() {
    return {
      listaAtendPres: [],
      show: false,
    };
  },
  created() {
    fetch("https://it3zxc-default-rtdb.firebaseio.com/setembroamarelo.json")
      .then((resposta) => resposta.json())
      .then((json) => {
        this.listaAtendPres = json;
      });
  },
};
</script>

<style scoped></style>

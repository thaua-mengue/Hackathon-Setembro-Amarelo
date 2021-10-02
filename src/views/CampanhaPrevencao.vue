<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">
      Campanha de Prevenção ao Suidicio
    </h2>
  <p>Nos links abaixo você encontra conteudo informativo sobre a campanha stembro amarelo</p>
    <div v-for="(list, index) of this.list" :key="index">
      <Card
        :title="list.nome"
        :text="list.descricao"
        :url="list.imagem"
        :subtitle="list.link"
      />
    </div>
  </v-container>
</template>

<script>
import Card from "../components/generic/Card.vue";
export default {
  name: "CampanhaPrevencao",
  components: {
    Card,
  },
  data() {
    return {
      Campanha: [],
      show: false,
      list: [],
    };
  },

  methods: {
    content() {
      if (this.Campanha) {
        let categoria;
        let elemento = this.Campanha.map((element) => {
          categoria = element.categoria;

          const find = categoria.find((element) => element === "Campanha");

          if (find) {
            this.list.push(element);
          }
        });

        elemento = this.list;

        return elemento;
      }
    },
  },

  created() {
    fetch("https://it3zxc-default-rtdb.firebaseio.com/setembroamarelo.json")
      .then((response) => (this.Campanha = response.json()))
      .then((json) => {
        this.Campanha = json;
        this.content();
      });
  },
};
</script>

<style scoped>
</style>
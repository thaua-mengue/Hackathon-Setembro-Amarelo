<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Atendimento Presencial</h2>
    <p>Você tambem pode encontrar ajuda presencial nos links abaixo:</p>

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
  name: "AtendPresen",
  components: {
    Card,
  },
  data() {
    return {
      AtendPresencial: [],
      show: false,
      list: [],
    };
  },

  methods: {
    content() {
      if (this.AtendPresencial) {
        let categoria;
        let elemento = this.AtendPresencial.map((element) => {
          categoria = element.categoria;

          const find = categoria.find(
            (element) => element == "Atendimento Presencial"
          );

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
      .then((response) => (this.AtendPresencial = response.json()))
      .then((json) => {
        this.AtendPresencial = json;
        this.content();
      });
  },
};
</script>

<style scoped></style>

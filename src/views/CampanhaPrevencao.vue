<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">
      Campanha de Prevenção ao Suidicio
    </h2>

    <v-for v-for="(list, index) of this.list" :key="index">
      <Card
        :title="list.name"
        :text="list.descricao"
        :url="list.imagem"
        :subtitle="list.link"
      />
    </v-for>
    <button @click="content">JSOn</button>
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
      let categoria;
      //let elementoGoverno;

      let elemento = this.Campanha.map((element) => {
        categoria = element.categoria;

        const find = categoria.find(
          (element) => element === "Atendimento Presencial"
        );

        if (find) {
          this.list.push(element);
        }
      });

      elemento = this.list;
      console.log(elemento);
      return elemento;
    },
  },
  created() {
    fetch("https://it3zxc-default-rtdb.firebaseio.com/setembroamarelo.json")
      .then((response) => (this.Campanha = response.json()))
      .then((json) => {
        this.Campanha = json;
        // console.log(this.Campanha);
      });
  },
};
</script>

<style scoped>
</style>
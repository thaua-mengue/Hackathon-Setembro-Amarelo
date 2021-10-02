<template>
  <v-container>
    <h2 class="text-h5 text-center mb-5 mt-5">
      Indicação de Profissionais
    </h2>
    <p>Procurando por profissionais qualificados? Temos algumas indicações de onde conseguir ajuda:</p>
    <div v-for="(list, index) of this.list" :key="index">
      <Card
        :title="list.name"
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
  name: "IndicacaoProfissionais",
  components: {
    Card,
  },
  data() {
    return {
      Profissionais: [],
      show: false,
      list: [],
    };
  },

  computed: {
    content() {
      let categoria;
      let elemento = this.Profissionais.map((element) => {
        categoria = element.categoria;
        const find = categoria.find((element) => element === "Indicação de Profissionais");
        if (find) {
          this.list.push(element);
        }
      });
      elemento = this.list;
      return elemento;
    },
  },
  created() {
    fetch("https://it3zxc-default-rtdb.firebaseio.com/setembroamarelo.json")
      .then((response) => (this.Profissionais = response.json()))
      .then((json) => {
        this.Profissionais = json;
        this.content();
      });
  },
};
</script>

<style scoped>
</style>
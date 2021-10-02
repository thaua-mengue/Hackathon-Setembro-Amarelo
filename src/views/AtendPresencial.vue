<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">
      Atendimento Presencial
    </h2>

    <v-for v-for="(list, index) of AtendPresencial" :key="index">
      <div class="mb-3 mt-5">
        <Card
          :title="list.nome"
          :text="list.descricao"
          :url="list.imagem"
          :subtitle="list.link"
        />
      </div>
    </v-for>
  </v-container>
</template>

<script>
import Card from "../components/generic/Card.vue";
export default {
  name: "AtendPresencial",
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
  /*
  computed: {
    content() {
      let categoria;
      let elemento = this.ContInformativo.map((element) => {
        categoria = element.categoria;

        const find = categoria.find(
          (element) => element === "Conteúdo Informativo"
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
  */
  created() {
    fetch("https://it3zxc-default-rtdb.firebaseio.com/setembroamarelo.json")
      .then((response) => (this.AtendPresencial = response.json()))
      .then((json) => {
        this.AtendPresencial = json;
        // console.log(this.Campanha);
      });
  },
};
</script>

<style scoped></style>

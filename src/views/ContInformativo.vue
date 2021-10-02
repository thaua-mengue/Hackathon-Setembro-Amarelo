<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">
      Conteúdo Informativo
    </h2>

    <v-for v-for="(list, index) of ContInformativo" :key="index">
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
  name: "ContInformativo",
  components: {
    Card,
  },
  data() {
    return {
      ContInformativo: [],
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
      .then((response) => (this.ContInformativo = response.json()))
      .then((json) => {
        this.ContInformativo = json;
        // console.log(this.Campanha);
      });
  },
};
</script>

<style scoped></style>

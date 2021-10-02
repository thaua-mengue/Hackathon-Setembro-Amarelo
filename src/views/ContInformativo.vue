<template>
  <v-container>
    <h2 class="text-h5 text-center mb-5 mt-5">
      Conteúdo Informativo
    </h2>
    <p>Aqui voce encontra a entrevista com a psicologa Ana Arantes sobre o suicidio. </p>
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

  computed: {
    content() {
      let categoria;
      let elemento = this.ContInformativo.map((element) => {
        categoria = element.categoria;
        const find = categoria.find((element) => element === "Conteúdo informativo");
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
      .then((response) => (this.ContInformativo = response.json()))
      .then((json) => {
        this.ContInformativo = json;
        this.content();
      });
  },
};
</script>

<style scoped>
</style>

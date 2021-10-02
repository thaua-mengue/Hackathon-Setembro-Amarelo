<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">
      Onde encontrar Atendimento Online
    </h2>

    <Card
      title="Titulo"
      url="https://gntech.med.br/pub/media/wysiwyg/Capa_-_BLOG_01.png"
      text="Informações"
      subtitle="Subtitle"
    />
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
    };
  },
  computed: {},
  created() {
    fetch("https://it3zxc-default-rtdb.firebaseio.com/setembroamarelo.json")
      .then((response) => response.json())
      .then((json) => {
        this.campanha = json;
        console.log(this.campanha);
      });
  },
};
</script>

<style scoped>
  .AtendimentoOnline-color {
      color: aqua;
 
}
</style>
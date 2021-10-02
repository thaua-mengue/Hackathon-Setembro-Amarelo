<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">
      Onde encontrar Atendimento Online
    </h2>
    <p>Podemos tambem te oferecer ajuda online durante o ano inteiro através dos links abaixo.</p>
    <Card
      title="Atendimento Online"
      url="https://crpmt.org.br//storage/news/large/15506992815c6dcb110b1a8.jpg"
      text="Os atendimentos funcionam através de vídeo-consultas, podendo contar com o apoio de e-mail chat. Há algum tempo percebemos o crescimento das discussões sobre terapia online. Discute-se sobre os potenciais resultados, desafios, regulamentação e capacitação dos psicólogos para o atendimento online."
      subtitle="Saiba mais"
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

</style>
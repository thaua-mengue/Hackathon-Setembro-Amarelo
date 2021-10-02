<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">
      Onde encontrar Atendimento Online
    </h2>
    <p>
      Podemos também te oferecer ajuda online durante o ano inteiro através dos
      links abaixo:
    </p>
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
  name: "AtendimentoOnline",
  components: {
    Card,
  },
  data() {
    return {
      AtendimentoOnline: [],
      show: false,
      list: [],
    };
  },
  methods: {
    content() {
      if (this.AtendimentoOnline) {
        let categoria;
        let elemento = this.AtendimentoOnline.map((element) => {
          categoria = element.categoria;

          const find = categoria.find(
            (element) => element == "Atendimento Online"
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
      .then((response) => response.json())
      .then((json) => {
        this.AtendimentoOnline = json;
        this.content();
      });
  },
};
</script>

<style scoped>
</style>
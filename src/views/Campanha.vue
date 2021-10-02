<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">
      Campanha de Prevenção ao Suidicio
    </h2>
  </v-container>
</template>

<script>
export default {
  name: "Campanha",
  data() {
    return {
      Campanha: [],
    };
  },
  created() {
    fetch("https://it3zxc-default-rtdb.firebaseio.com/setembroamarelo.json")
      .then((response) => response.json())
      .then((json) => {
        this.campanha = json;
      });
  },
};
</script>

<style scoped>
</style>
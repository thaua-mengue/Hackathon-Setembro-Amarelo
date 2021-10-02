<template>
  <v-card class="mx-auto mb-4" max-width="344">
    <v-img :src="url" height="200px"> </v-img>

    <v-card-title> {{ title }} </v-card-title>

    <v-card-subtitle> {{ subtitle }} </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange lighten-2" text :href="subtitle" target="_blank">
        Acesse o link
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ text }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    url: String,
    text: String,
    subtitle: String,
  },
  data() {
    return { show: false };
  },
};
</script>

<style scoped></style>

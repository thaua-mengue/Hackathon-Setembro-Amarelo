<template>
    <v-container>
        <h2 class="text-h5 text-center mb-3 mt-5">Indicação de Profissionais</h2>
    </v-container>
</template>

<script>
export default {
    name: 'IndicacaoProfissionais',
    data() {
        return {
            IndicacaoProfissinais: []
        }
    },
    created() {
        fetch('https://it3zxc-default-rtdb.firebaseio.com/setembroamarelo.json')
            .then(response => response.json())
            .then(json => {
                this.IndicacaoProfissinais = json;
            })
    }
}
</script>

<style scoped>

</style>
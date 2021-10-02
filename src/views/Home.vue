<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">
      A campanha Setembro Amarelo® salva vidas! 
    </h2>
           <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://ik.imagekit.io/cbpz03zxgou/storage/noticias/noticia-969.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      SEMPRE é tempo de Prevenir
    </v-card-title>

    <v-card-subtitle>
      Vamos vencer este problema JUNTOS
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        LEIA MAIS
      </v-btn>

      <v-spacer></v-spacer>

    
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          São registrados mais de 13 mil suicídios todos os anos no Brasil e mais de 01 milhão no mundo. Trata-se de uma triste realidade, que registra cada vez mais casos, principalmente entre os jovens. Cerca de 96,8% dos casos de suicídio estavam relacionados a transtornos mentais. Em primeiro lugar está a depressão, seguida do transtorno bipolar e abuso de substâncias.
           Com o objetivo de prevenir e reduzir estes números a campanha Setembro Amarelo® cresceu e hoje conquistamos o Brasil inteiro. Para isso, o apoio das nossas federadas, núcleos, associados e de toda a sociedade é fundamental.
           Como resultado de muito esforço, em 2016, garantimos espaços inéditos na imprensa e firmamos muitas parcerias. Conseguimos também iluminar monumentos históricos, pontos turísticos, pela primeira vez o Cristo Redentor, espaços públicos e privados no Brasil inteiro. Centenas de pessoas participaram de caminhadas e ações para a conscientização sobre este importante tema.
           Esta é uma página completa com material disponível para auxiliar a todos. Assim sendo, aproveite os nossos materiais e participe da nossa campanha durante todo o ano.
           São diversos materiais de uso público: <a href="https://portal.cfm.org.br/wp-content/uploads/2021/09/setembroamarelo_diretrizes.pdf">Diretrizes para a Divulgação e Participação da Campanha Setembro Amarelo®</a>, materiais online para download, a <a href="http://www.flip3d.com.br/web/pub/cfm/index9/?numero=14">Cartilha Suicídio Informando para Prevenir</a> e todo o material para a imprensa.
           Participe conosco, divulgue a campanha entre os seus amigos e nos ajude a salvar vidas!
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      show: true,
    }),
  }
</script>
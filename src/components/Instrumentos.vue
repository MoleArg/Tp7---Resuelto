<template>
  <div class="container">
    <div class="row-3 justify-content-between">
      <div class="col-5" v-for="item in items" :key="item.id">
        <h3>{{ item.instrumento }}</h3>
        <img
          :src="`assets/img/${item.imagen}`"
          width="120px"
          :alt="item.instrumento"
        /><br />
        <h5>${{ item.precio }}</h5>
        <div v-if="item.costoEnvio == 'G'" class="gratis">
          <img src="assets/img/camion.png" alt="camion" />Envio gratis
        </div>
        <div v-else class="envio">costo de envio: {{ item.costoEnvio }}</div>
        <br />
        <p>{{ item.cantidadVendida }} vendidos</p>
        <router-link :to="`detalle/${item.id}`" tag="button"
          >Detalle</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Datos from "../Api/instrumentos.json";

export default {
  name: "Datos",
  props: {
    msg: String,
  },
  computed: {
    items() {
      return Datos.instrumentos.map((item) => {
        console.log(item.instrumento);
        return item;
      });
    },
  },
};
</script>

<style scoped>
.gratis {
  color: green;
}
.envio {
  color: orange;
}
</style>

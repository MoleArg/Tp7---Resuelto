<template>
  <div class="container">
    <title>Detalle</title>
    <div class="row-3 justify-content-between">
      <div class="col-5">
        <h3>{{ instrumentoE.instrumento }}</h3>
        <img
          :src="`/assets/img/${instrumentoE.imagen}`"
          width="450px"
          :alt="instrumentoE.instrumento"
        /><br />
        <p>Descripcion: {{ instrumentoE.descripcion }}</p>
        <p>Marca: {{ instrumentoE.marca }}</p>
        <p>Modelo: {{ instrumentoE.modelo }}</p>
        <h5>${{ instrumentoE.precio }}</h5>
        <div v-if="instrumentoE.costoEnvio == 'G'" class="gratis">
          <img src="/assets/img/camion.png" alt="camion" />Envio gratis
        </div>
        <div v-else class="envio">
          costo de envio: {{ instrumentoE.costoEnvio }}
        </div>
        <br />
        <p>{{ instrumentoE.cantidadVendida }} vendidos</p>
      </div>
    </div>
  </div>
</template>

<script>
import Datos from "../Api/instrumentos.json";
export default {
  name: "Detalle",
  mounted() {
    this.ObtenerInstrumento();
  },
  data() {
    return {
      instrumentoE: [],
    };
  },
  methods: {
    ObtenerInstrumento() {
      const buscado = this.$route.params.id;
      this.instrumentoE = Datos.instrumentos.find((aux) => aux.id === buscado);
      console.log(this.instrumentoE);
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

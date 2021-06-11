<template>
  <div id="app">
    <div class="row">
       <h1 style="text-align: center;">Aqui nos encontramos</h1>
       <GoogleMap :latitude= -32.88626145587847 :longitude= -68.83828831798627 :title="'Marcador'" />
    </div>

  </div>
</template>

<script>
import GoogleMap from "../components/GoogleMap.vue";

export default {
  name: 'App',
  components: {
    GoogleMap
  }
}
</script>
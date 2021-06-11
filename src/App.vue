<template>
  <div id="app" class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/instrumentos">Instrumentos</router-link> |
      <router-link to="/ubicacion">Donde estamos</router-link>
    </div><br>
    <router-view />
  </div>
</template>

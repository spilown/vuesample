<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div class="container">
    <h1>Hello App!</h1>
    <p>
      <router-link to="/">Go to Home | </router-link>
      <router-link to="/about">Go to About</router-link>
      <router-link to="/user">|user</router-link>
    </p>

    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 00px;
}
</style>

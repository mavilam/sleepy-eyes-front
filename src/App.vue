<template>
  <div class="flex flex-col h-screen">  
    <Content class="flex-grow"/>
    <Footer/>
  </div>
</template>

<script setup>
import Header from '././components/Header.vue'
import Content from '././components/Content.vue'
import Footer from '././components/Footer.vue'
</script>

<style>
#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

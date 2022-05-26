<template>
  <div class="flex flex-col h-screen bg-bone">  
    <Content class="flex-grow"/>
    <Footer/>
  </div>
</template>

<script>
import Header from '././components/Header.vue'
import Content from '././components/Content.vue'
import Footer from '././components/Footer.vue'

export default {
  name: 'App',
  components: {
    Content,
    Footer
  },
  methods: {
    setViewHeight: function() {
      console.log("hey")
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    },
  },
  mounted: function() {
    this.setViewHeight()
    console.log("soul sister")
    window.addEventListener('resize', () => {
      this.setViewHeight()
    })
  }
}


</script>

<style>
#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
}
</style>

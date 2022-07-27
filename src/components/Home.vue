<template>
  <div class="flex flex-col h-screen font-bitter" :class="color">
    <Content class="basis-3/4" :bg-color="bgColor"/>
    <Footer class="basis-1/5"/>
  </div>
</template>

<script>
import Content from './Content.vue'
import Footer from './Footer.vue'

export default {
  name: 'Home',
  components: {
    Content,
    Footer
  },
  data() {
    return {
      colorArray: ['text-blue', 'text-green', 'text-orange', 'text-purple', 'text-brown', 'text-olive'],
      color: 'green',
      bgColor: 'bg-green'
    }
  },
  methods: {
    setViewHeight: function() {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    },
    changeColor: function() {
      let random = Math.floor(Math.random() * this.colorArray.length)
      this.color = `${this.colorArray[random]}`
      console.log(this.color)
      this.setBgColor()
    },
    setBgColor: function() {
      this.bgColor = this.color.replace('text', 'bg')
    }
  },
  mounted: function() {
    this.changeColor()
    this.setBgColor()
    this.setViewHeight()
    window.addEventListener('resize', () => {
      this.setViewHeight()
    })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bitter&display=swap');
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
}
</style>

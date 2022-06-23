<template>
  <div class="flex flex-col h-screen" :class="color">
    <Content class="basis-3/4"/>
    <Footer class="basis-1/12" :bg-color="bgColor"/>
  </div>
</template>

<script>
import Content from '././components/Content.vue'
import Footer from '././components/Footer.vue'

export default {
  name: 'App',
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
#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
}
</style>

<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <Logo class="pt-12 w-9/12 xl:w-4/12 lg:w-6/12 basis-2/5 lg:basis-4/6" />
    <div class="font-bold pt-3 sm:pt-12 lg:txt-xl text-lg">
      <router-link to="/blog">
        <p class="underline">Todo sobre la Original Eye Tee</p>
      </router-link>
    </div>
    <Newsletter :bg-color="bgColor"/>
  </div>
</template>

<script>
import Logo from './Logo.vue'
import Newsletter from './Newsletter.vue'

export default {
    name: 'Content',
    components: {
      Logo,
      Newsletter
    },
    props: {
        'bgColor': {
            type: String,
            default: 'bg-bone'
        }
    },
  }
</script>

<style scoped>
</style>
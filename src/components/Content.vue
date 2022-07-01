<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <Logo class="pt-12 w-9/12 xl:w-4/12 lg:w-6/12 basis-2/5 lg:basis-4/6" />
    <div class="font-bold pt-3 sm:pt-12 lg:txt-xl text-lg">
      <p>Se vienen cositas.</p>
      <p>Stay tuned:</p>
    </div>
    <div class="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
      <div
        class="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
        <div class="relative">
          <input type="text" id="form-subscribe-Subscribe"
            class="rounded-lg border-transparent flex-1 appearance-none border w-full py-2 px-4 bg-bone placeholder-black shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-grey-500 focus:ring-grey-600 focus:border-transparent"
            placeholder="you@hola.com" 
            v-model="subEmail"
            @input="checkMail()" />
        </div>
        <button
          v-if="!isSuscribing"
          class="flex-shrink-0 px-4 py-2 text-base text-bone font-semibold  rounded-lg shadow-md focus:outline-none"
          :class="bgColor"
          @click="suscribe()"
          :disabled="disableSuscribe || suscribed">
          {{suscribeButtonText}}
        </button>
        <div class="flex-shrink-0 px-4 py-2 drop-shadow-md">
          <pulse-loader :loading="isSuscribing" color="#F6F4EA"></pulse-loader>
        </div>
      </div>
    </div>
    <p class="px-12 pt-1 md:pt-6 text-xs">Suscribiéndote confirmas que estás de acuerdo con la <a class="underline underline-offset-1" href="https://mailchimp.com/legal/terms" target="_blank">política de privacidad</a>.</p>
    <p class="font-bold pt-3 sm:pt-12 lg:txt-xl text-lg">{{ error }}</p>
  </div>
  
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import axios from 'axios'

import Logo from './Logo.vue'

export default {
    name: 'Content',
    components: {
      PulseLoader,
      Logo
    },
    props: {
        'bgColor': {
            type: String,
            default: 'bg-bone'
        }
    },
    data() {
      return {
        evadeCorsURL: 'https://jorgeatgu-cors.herokuapp.com/',
        mailChimpBaseUrl: 'https://xyz.us11.list-manage.com/subscribe/post?u=554bac955bf742500ebe1bf7f&amp;id=bdb9294df2',
        subEmail: '',
        bgColorsCatalog: ['bg-blue', 'bg-green', 'bg-orange', 'bg-purple', 'bg-brown', 'bg-olive'],
        error: '',
        suscribeButtonText: 'Suscríbete',
        isSuscribing: false,
        suscribed: false,
        disableSuscribe: false
      }
    },
    methods: {
      checkMail() {
        const emailRegexp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.{1}[a-zA-Z0-9-]+)$/
        if (emailRegexp.test(this.subEmail)) this.disableSuscribe = false
        else this.disableSuscribe = true
      },
      suscribe() {
        if (this.subEmail === '') return
        this.isSuscribing = true
        axios.get(`${this.evadeCorsURL}${this.mailChimpBaseUrl}`, {
          params: {
            EMAIL: encodeURI(this.subEmail)
          }
        })
        .then(response => {
          console.log("éxito")
          this.isSuscribing = false
          this.error = ''
          this.suscribed = true
          this.suscribeButtonText = 'Éxito!'
        })
        .catch(error => {
          this.isSuscribing = false
          this.error = 'Ups, se nos ha roto por algún lado. Prueba más tarde, por favor.'
          console.log(error)
        })
      }

    }
  }
</script>

<style scoped>
</style>
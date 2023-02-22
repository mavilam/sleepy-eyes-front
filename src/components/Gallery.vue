<template>
  <div class="flex flex-col justify-center items-center pb-5" :class="color">
    <Eye class="w-1/6 2xl:w-4% xl:w-1/12 lg:w-1/12 md:w-1/12 cursor-pointer pb-1" @click="backToHome()"></Eye>
		<div class="relative flex pb-2 items-center w-full">
			<div class="flex-grow border-t border-gray-400"></div>
		</div>
    <div class="p-5 sm:p-8">
      <div class="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
        <img src="/gallery/gal_1.jpg" alt="Chica con la bolsa de Sleepy Eyes Busy Mind" />
        <img src="/gallery/gal_2.jpg" alt="Chico de espaldas con una gorra y la camiseta de Sleepy Eyes Busy Mind" />
        <img src="/gallery/gal_3.jpg" alt="Dos chicos de espaldas con la camiseta de Sleepy Eyes Busy Mind" />
        <img src="/gallery/gal_4.jpg" alt="Chico de frente con la camiseta de Sleepy Eyes Busy Mind" />
        <img src="/gallery/gal_5.jpg" alt="Chico de espaldas con la camiseta de Sleepy Eyes Busy Mind" />
      </div>
    </div>
    <hr>
		<Footer />
  </div>
</template>

<script>
	import Eye from './Eye.vue'
	import Footer from './Footer.vue'

	import {
		pickRandomColor
	} from '../composables/colorManagement'

	export default {
		name: 'Gallery',
		components: {
			Eye,
			Footer
		},
		data() {
			return {
				color: 'green',
				bgColor: 'bg-green'
			}
		},
		methods: {
			changeColor: function () {
				this.color = `${pickRandomColor(this.colorArray)}`
				this.setBgColor()
			},
			setBgColor: function () {
				this.bgColor = this.color.replace('text', 'bg')
			},
			backToHome() {
				this.$router.push('/')
			}

		},
		mounted: function () {
			this.changeColor()
			this.setBgColor()
		}
	}
</script>

<style scoped>
</style>
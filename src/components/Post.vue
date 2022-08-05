<template>
	<div class="flex flex-col justify-center items-center pb-5" :class="color">
		<logo class="pt-3 w-1/6 xl:w-1/12 lg:w-3/12 cursor-pointer" @click="backToHome()"></logo>
		<div class="relative flex py-2 items-center w-full">
			<div class="flex-grow border-t border-gray-400"></div>
		</div>
		<article class="max-w-3xl px-6 py-5 mx-auto space-y-6">
			<p class="text-xs font-semibold tracking-wider uppercase">#fuckfastfashion</p>
			<div class="w-full mx-auto space-y-4">
				<h1 class="text-4xl font-bold leading-tight md:text-5xl">¿Cómo se fabrica la Original Eye Tee?</h1>
			</div>
			<div class="dark:text-gray-100 text-justify">
				<p>La camiseta parte de la idea de vestir prendas de alta calidad, que hayan sido fabricadas de la manera más
					ética que esté en nuestras manos y que no se destrocen en el primer lavado.</p>
				<br />
				<div class="shadow-lg">
					<img src="/backLogo.jpg" alt="Mujer de espaldas mostrando el logo de Sleepy Eyes en la camiseta"
						class="rounded-md" />
				</div>

				<br />
				<h2 class="text-3xl font-bold leading-tight pb-3">Con qué</h2>
				<p>Para nuestras camisetas, usamos únicamente algodón 100% orgánico con certificación GOTS, poliéster reciclado
					y
					otros materiales sostenibles como Modal®.</p>

				<p>Si lo comparamos con el algodón normal, el algodón orgánico se cultiva sin usar insecticidas químicos,
					fertilizantes o pesticidas, es decir, no se incorporan sustancias peligrosas o tóxicas al suelo o a los ríos o
					lagos adyacentes. Esto garantiza un entorno seguro para los agricultores y sus familias.</p>

				<p>Todas las camisetas se producen sin tintes. cuando se mezcla el algodón orgánico virgen sin teñir con los
					desechos de algodón orgánico blanco, negro y azul, se crea un efecto jaspeado natural, que da el color
					característico de nuestra camiseta. Al eliminar el proceso de teñido, no solo se reduce el uso de productos
					químicos, sino que también se reduce la cantidad de agua consumida por prenda.</p>
				<br />
				<h2 class="text-3xl font-bold leading-tight pb-3">Cómo y quién</h2>

				<p>Nuestras camisetas están fabricadas en China y Bangladesh. Normalmente esto es sinónimo de explotación, pero
					nuestros proveedores trabajan con el foco puesto en que los trabajadores tengan unas condiciones laborales
					decentes.</p>
				<p>Para llevarlo a cabo, colaboran estrechamente con la Fair Wear Foundation <a href="https://www.fairwear.org/"
						class="underline">(FWF)</a> aplicando un enfoque de Responsabilidad Social Corporativa.</p>

				<p>En todas sus fabricas llevan a cabo una serie de proyectos para mejorar la vida de los trabajadores. Entre
					los
					proyectos mas destacados están: subvencionar tiendas de comestibles a precios razonables en las fábricas, dar
					becas de educación para los hijos de los trabajadores o impartir talleres de salud materna.</p>

				<p>Si tenéis curiosidad, <a href="https://online.flippingbook.com/view/967478373/74" class="underline">aquí</a>
					podéis encontrar
					más
					información.</p>
				<br />
				<h2 class="text-3xl font-bold leading-tight pb-3">Serigrafía</h2>

				<p>La serigrafía es una de las partes clave de la camiseta y, como no podía ser de otra manera, buscamos un
					proceso que siguiera nuestra manera de ser: tenía que ser de alta calidad, fabricadas de la manera más ética
					que
					esté en nuestras manos y que el estampado durara.</p>

				<p>La serigrafía de las camisetas se lleva a cabo en España. Cada camiseta de somete a un proceso de estampación
					manual, con tintas con base de agua. Este tipo de tintas tiene un menor impacto en el medio ambiente, porque,
					a
					diferencia de otras tintas, está libre de componentes como solventes hidrocarburos, pigmentos con metales
					pesados o conservantes con bases de plásticos.</p>
				<p>Los beneficios de las tintas con base de agua no son solo que tienen un menor impacto en el medio ambiente,
					también son estampaciones más frescas en época de calor porque permiten una libre transpiración gracias a la
					ligereza del estampado.</p>
				<br />
				<p>Por último, un consejo: en la lavadora recomendamos lavar la camiseta dada la vuelta, para alargar su vida y
					desgastar lo menos posible el exterior, y en frío (alrededor de 30º), ya que al ser 100% algodón en reacción
					con
					el calor tiende a encojer.</p>
			</div>

		</article>
		<hr>
		<Footer />
	</div>
</template>

<script>
	import Logo from './Logo.vue'
	import Footer from './Footer.vue'

	import {
		pickRandomColor
	} from '../composables/colorManagement'

	export default {
		name: 'Post',
		components: {
			Logo,
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

<style>
</style>
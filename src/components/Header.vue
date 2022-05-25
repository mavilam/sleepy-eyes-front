<template>
  <header class="sticky top-0 z-30 w-full px-2 py-4 bg-white sm:px-4 shadow-md">
    <div class="flex items-center justify-between mx-auto max-w-7xl">
      <a href="#">
        <span class="text-2xl text-grey-600">Sleepy</span>
      </a>
      <div class="flex items-center space-x-1">
        <ul class="hidden space-x-2 md:inline-flex">
          <li><a href="#" class="px-4 py-2 text-gray-600 rounded">Home</a></li>
          <li><a href="#" class="px-4 py-2 text-gray-600 rounded">Clothes</a></li>
        </ul>
        <div class="inline-flex md:hidden">
          <button class="flex-none px-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
            </svg>
            <span class="sr-only">Open Menu</span>
          </button>
          <ul class="hidden space-x-2 md:inline-flex">
            <li><a href="#" class="px-4 py-2 text-gray-600 rounded">Home</a></li>
            <li><a href="#" class="px-4 py-2 text-gray-600 rounded">Clothes</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>

</script>

<style scoped>

</style>
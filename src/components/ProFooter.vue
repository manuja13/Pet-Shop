<template>
  <footer class="p-2 bg-[#ced8ee] md:p-2 lg:p-4 mt-auto">
    <div class="mx-auto max-w-screen-xl text-center">
      <a href="#" class="flex justify-center items-center text-2xl font-semibold text-gray-900">
        <img src="../assets/Alfie-Pet-Supplies.png" class="logo-size mr-2 h-8" alt="Petsmart Logo">
        <svg class="mr-2 h-8" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>Alfie Pet Supplies
      </a>
      <p class="my-6 text-gray-500">Your pet's happiness starts here with unbeatable selection and service.</p>
      <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900">
        <li>
          <router-link to="/" class="mr-4 hover:underline md:mr-6">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="mr-4 hover:underline md:mr-6">About</router-link>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">Products</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">Pet Care Tips</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">Cat Facts</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">Contact</a>
        </li>
      </ul>
      <span class="text-sm text-gray-500 sm:text-center">© 2024 <a href="#" class="hover:underline">Alfie Pet Supplies™</a>. All Rights Reserved.</span>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
}

.logo-size {
  height: 60px;
  width: auto;
}
</style>

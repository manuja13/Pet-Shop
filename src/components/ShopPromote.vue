<template>
  <div class="mt-20"> <!-- Adjust this margin as needed -->
    <h1 class="text-3xl md:text-4xl font-bold text-center mb-8">----- Shop Now -----</h1>
    <div class="relative w-full h-96 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1581888475780-27b6b0bc3690?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')">
      <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
        <h2 class="text-4xl md:text-6xl font-bold mb-4">Your Trusted Local Pet Supply Store</h2>
        <p class="text-lg md:text-2xl mb-6">Quality Products, Expert Advice, Friendly Service</p>
        <router-link to="/products" class="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
          Shop Now
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopPromote',
};
</script>

<style scoped>
/* Additional styling if needed */
</style>
